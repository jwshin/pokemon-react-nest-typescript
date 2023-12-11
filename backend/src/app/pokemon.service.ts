import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { PrismaService } from './prisma.service';
import { PokemonDetail, PokemonList } from './pokeapico.interface';

const DEFAULT_PAGE_SIZE = 5;

@Injectable()
export class PokemonService implements OnModuleInit {
  private readonly logger = new Logger(PokemonService.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly prismaService: PrismaService
  ) {}

  async onModuleInit() {
    this.logger.log('Starting fetch and summarize pokeapi.co data ...');
    const start = new Date().getTime();

    await this.prismaService.pokemon.deleteMany();

    let url = 'https://pokeapi.co/api/v2/pokemon';
    while (url) {
      const { data: pokemons } = await firstValueFrom(
        this.httpService.get<PokemonList>(url)
      );

      url = pokemons.next;

      const promises = pokemons.results.map(async (item) => {
        const { data: detail } = await firstValueFrom(
          this.httpService.get<PokemonDetail>(item.url)
        );

        try {
          await this.prismaService.pokemon.create({
            data: {
              id: detail.id,
              name: detail.name,
              front_sprite_url: detail.sprites.front_shiny,
              back_sprite_url: detail.sprites.back_shiny,
            },
          });
        } catch (e) {
          this.logger.warn(e);
        }
      });

      // throttle so not to overload pokeapi.co
      await Promise.all(promises);
    }

    this.logger.log(`... completed in ${new Date().getTime() - start}ms`);
  }

  async list(page: number) {
    const offset = page * DEFAULT_PAGE_SIZE;

    const results = await this.prismaService.pokemon.findMany({
      skip: offset,
      take: DEFAULT_PAGE_SIZE + 1, // shortcut to determine there will be "next" set of results
      orderBy: {
        id: 'asc',
      },
    });

    return {
      results: results.slice(0, DEFAULT_PAGE_SIZE),
      prev_page: page > 0 ? page - 1 : null,
      next_page: results.length > DEFAULT_PAGE_SIZE ? page + 1 : null,
    };
  }
}
