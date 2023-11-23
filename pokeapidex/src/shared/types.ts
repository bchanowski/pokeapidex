export type PokemonType = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
  };
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
  stats: Array<{ base_stat: number; stat: { name: string } }>;
};

export type PokemonListType = {
  name: string;
};

export type PokemonsListType = PokemonListType[];
