import { Button, StyleSheet, Text, TextInput, View, Image, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { Pokemon } from "../models/Pokemon";

type Props = {
  pokemonName: string;
  setPokemonName: (name: string) => void;
  onSearch: () => void;

  pokemon: Pokemon | null;
  loading: boolean;
  error: string;

  favorites: string[];
  isFavorite: boolean;
  toggleFavorite: () => void;

  loadFavorite: (name: string) => void;
};

export default function PokemonView({
  pokemonName,
  setPokemonName,
  onSearch,
  pokemon,
  loading,
  error,
  favorites,
  isFavorite,
  toggleFavorite,
  loadFavorite
}: Props) {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const spinAnim = useRef(new Animated.Value(0)).current;

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "720deg"]
  });

  useEffect(() => {
    if (!pokemon) return;

    fadeAnim.setValue(0);
    spinAnim.setValue(0);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true
      }),
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      })
    ]).start();

  }, [pokemon]);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Pokemon Search</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Pokemon name (e.g., pikachu)"
        value={pokemonName}
        onChangeText={setPokemonName}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Button title="Get Pokemon" onPress={onSearch} />

      {loading && <Text>Loading... Please Wait </Text>}

      {error !== "" && (
        <Text style={{ color: "red" }}>{error}</Text>
      )}

{pokemon && (
        <Animated.View
          style={{
            alignItems: "center",
            marginTop: 20,
            opacity: fadeAnim,
            transform: [{ rotate: spin }]
          }}
        >

          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {pokemon.name}
          </Text>

          <Image
            source={{ uri: pokemon.image }}
            style={{ width: 120, height: 120 }}
          />

          <Button
            title={isFavorite ? "Unfavorite" : "Favorite"}
            onPress={toggleFavorite}
          />

          <Text style={{ marginTop: 10 }}>Types:</Text>
          {pokemon.types.map((t) => (
            <Text key={t}>{t}</Text>
          ))}

          <Text style={{ marginTop: 10 }}>Abilities:</Text>
          {pokemon.abilities.map((a) => (
            <Text key={a}>{a}</Text>
          ))}

          <Text style={{ marginTop: 10 }}>Moves:</Text>
          {pokemon.moves.map((m) => (
            <Text key={m}>{m}</Text>
          ))}

        </Animated.View>
      )}

      <Text style={{ marginTop: 20, fontWeight: "bold" }}>
        Favorites
      </Text>

      {favorites.map((f) => (
        <Text key={f} onPress={() => loadFavorite(f)}>
          {f}
        </Text>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
});


