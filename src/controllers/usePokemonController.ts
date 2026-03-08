import { useState } from "react";
import { fetchPokemon } from "../services/pokemonApi";
import { Pokemon } from "../models/Pokemon";
import { useEffect } from "react";
import { loadFavorites, saveFavorites } from "../services/favoriteStorage";

export function usePokemonController() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    async function load() {
      const stored = await loadFavorites();
      setFavorites(stored);
    }
    load();
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);  

  async function searchPokemon(name: string) {
    const q = name.trim();

    if (!q) {
        setError("Please enter a Pokémon name");
        return;
    }

    setLoading(true);
    setError("");
    setPokemon(null);

    try {
        const data = await fetchPokemon(q);
        setPokemon(data);

    } catch (err: any) {
        setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function toggleFavorite() {
    if(!pokemon) return;
      const name = pokemon.name;

    if(favorites.includes(name)) {
      setFavorites(favorites.filter(f => f !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  }

  const isFavorite = pokemon ? favorites.includes(pokemon.name) : false;

  return {
    pokemon,
    loading,
    error,
    favorites,
    isFavorite,
    searchPokemon,
    toggleFavorite
  };
}


