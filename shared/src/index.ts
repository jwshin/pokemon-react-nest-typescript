export interface PokemonSummary {
  id: number;
  name: string;
  front_sprite_url?: string;
  back_sprite_url?: string;
}

export interface PokemonListResponse {
  results: PokemonSummary[];
  prev_page?: number;
  next_page?: number;
}
