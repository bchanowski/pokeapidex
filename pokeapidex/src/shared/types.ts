export type PokemonType = {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: Array<{ type: { name: string } }>;
};

export type PokemonListType = {
  name: string;
};

export type PokemonsListType = PokemonListType[];
