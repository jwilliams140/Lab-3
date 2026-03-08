import { useState } from "react";
import { fetchPokemon } from "../services/pokemonApi";
import { Pokemon } from "../models/Pokemon";

export function usePokemonController() {
  const [pokemon, setPokemon] = useState< Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchPokemon(name: string) {
    const q = name.trim();

    if (!q) {
        setError("Please enter a Pokémon name");
        return;
    }

    setLoading(true);
    setError("");
    setPokemon(null);

    console.log("Search pressed:", q);

    try {
        const data = await fetchPokemon(q);
        setPokemon(data);

    } catch (err: any) {
        setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return {
    pokemon,
    loading,
    error,
    searchPokemon
  };
}
