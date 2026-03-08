import { useState } from "react";
import PokemonView from "../components/PokemonView";
import { usePokemonController } from "../controllers/usePokemonController";

export default function HomeScreen() {

  const [pokemonName, setPokemonName] = useState("");

  const { pokemon, loading, error, searchPokemon } = usePokemonController();

  return (
    <PokemonView
      pokemonName={pokemonName}
      setPokemonName={setPokemonName}
      onSearch={() => searchPokemon(pokemonName)}
      pokemon={pokemon}
      loading={loading}
      error={error}
    />
  );
}






