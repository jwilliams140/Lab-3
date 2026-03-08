import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image} from "react-native";
import { usePokemonController } from "../controllers/usePokemonController";

export default function HomeScreen() {
  const [pokemonName, setPokemonName] = useState("");
  const { pokemon, loading, error, searchPokemon } = usePokemonController();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokemon Search</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Pokémon name (e.g., pikachu)"
        value={pokemonName}
        onChangeText={setPokemonName}
        autoCapitalize="none"
        autoCorrect={false}
      />

      <Button title="Get Pokémon" onPress= {() => searchPokemon(pokemonName)}
        />

      {loading && <Text>Loading...Please Wait</Text>}

      {error !== "" && ( <Text style = {{ color: "red" }}>{error}</Text> )}

      { pokemon && (
      <View style = {{ alignItems: "center", marginTop: 20 }} >

        <Text style = {{ fontSize: 20, fontWeight: "bold" }} >
          {[pokemon.name]}
        </Text>

        <Image
          source = {{ uri: pokemon.image}}
          style = {{ width: 120, height: 120 }}
        />

        <Text style = {{ marginTop: 10 }}> Types: </Text>
        {pokemon.types.map((t) => (
          <Text key = {t}> {t} </Text>
        ))}

        <Text style = {{ marginTop: 10 }}> Abilities: </Text>
        {pokemon.abilities.map((a) => (
          <Text key = {a}> {a} </Text>
        ))}

        <Text style = {{ marginTop: 10 }}> Moves: </Text>
        {pokemon.moves.map((m) => (
          <Text key = {m}> {m} </Text>
        ))}
      </View>
    )}
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
});;





