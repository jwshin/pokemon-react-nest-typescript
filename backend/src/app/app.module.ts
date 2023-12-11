import { Module } from '@nestjs/common';

import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { HttpModule } from '@nestjs/axios';
import { PrismaService } from './prisma.service';

@Module({
  imports: [HttpModule],
  controllers: [PokemonController],
  providers: [PrismaService, PokemonService],
})
export class AppModule {}
