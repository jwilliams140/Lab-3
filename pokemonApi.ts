import { PokemonBuilder } from "../models/PokemonBuilder";

export async function fetchPokemon(name: string) {

  const q = name.trim().toLowerCase();

  if (!q) {
    throw new Error("Please enter a Pokémon name");
  }

  console.log("Fetching pokemon:", q);

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${q}`);

  if (!response.ok) {
    throw new Error("Pokemon not found");
  }

  const data: any = await response.json();

  const pokemon = new PokemonBuilder()
    .setName(data.name)
    .setImage(data.sprites.front_default)
    .setTypes(data.types.map((t: any) => t.type.name))
    .setAbilities(data.abilities.map((a: any) => a.ability.name))
    .setMoves(data.moves.slice(0, 5).map((m: any) => m.move.name))
    .build();

  return pokemon;
}

