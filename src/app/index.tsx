import { useState } from "react";
import PokemonView from "../components/PokemonView";
import { usePokemonController } from "../controllers/usePokemonController";

export default function HomeScreen() {
  const [pokemonName, setPokemonName] = useState("");
  const { 
    pokemon, 
    loading, 
    error, 
    favorites,
    isFavorite,
    searchPokemon,
    toggleFavorite
    } = usePokemonController();

  return (
    <PokemonView
      pokemonName={pokemonName}
      setPokemonName={setPokemonName}
      onSearch={() => searchPokemon(pokemonName)}
      pokemon={pokemon}
      loading={loading}
      error={error}
      favorites={favorites}
      isFavorite={isFavorite}
      toggleFavorite={toggleFavorite}
      loadFavorite={searchPokemon}
    />
  );
}







