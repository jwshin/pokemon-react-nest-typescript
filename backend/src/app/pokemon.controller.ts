import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { PokemonService } from './pokemon.service';
import { PokemonListResponse } from '@pokemon/shared';

@Controller()
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get('/api/list/:page')
  async summarize(
    @Param('page', ParseIntPipe) page: number
  ): Promise<PokemonListResponse> {
    return this.pokemonService.list(page);
  }
}
