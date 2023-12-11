// response type from https://pokeapi.co/api/v2/pokemon
export interface PokemonList {
  next?: string;
  results: {
    url: string;
  }[];
}

// response type from https://pokeapi.co/api/v2/pokemon/{name}
export interface PokemonDetail {
  id: number;
  name: string;
  sprites: {
    front_default?: string;
    front_shiny?: string;
    back_default?: string;
    back_shiny?: string;
  };
}
