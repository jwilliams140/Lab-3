import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image} from "react-native";

export default function HomeScreen() {
  const [pokemonName, setPokemonName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pokemon, setPokemon] = useState<any>(null);

  async function handleSearch() {
    const q = pokemonName.trim();

    if (!q) {
        setError("Please enter a Pokémon name");
        return;
    }

    setLoading(true);
    setError("");
    setPokemon(null);

    console.log("Search pressed:", q);

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${q}`);

        if (!response.ok) {
            throw new Error("Pokemon not found");
        }

        const data = await response.json();
        console.log("Pokemon data", data);
        setPokemon(data);

    } catch (err: any) {
        setError(err.message);
    } finally {
      setLoading(false);
    }
  }

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

      <Button title="Get Pokemon" onPress={handleSearch} />

      {loading && <Text>Loading...Please Wait</Text>}

      {error !== "" && ( <Text style = {{ color: "red" }}>{error}</Text> )}

      { pokemon && (
      <View style = {{ alignItems: "center", marginTop: 20 }} >

        <Text style = {{ fontSize: 20, fontWeight: "bold" }} >
          {[pokemon.name]}
        </Text>

        <Image
        source = {{ uri: pokemon.sprites.front_default }}
        style = {{ width: 120, height: 120 }}
        />

        <Text style = {{ marginTop: 10 }}> Types: </Text>
        {pokemon.types.map((t: any) => (
          <Text key = {t.type.name}> {t.type.name} </Text>
        ))}

        <Text style = {{ marginTop: 10 }}> Abilities: </Text>
        {pokemon.abilities.map((a: any) => (
          <Text key = {a.ability.name}> {a.ability.name} </Text>
        ))}

        <Text style = {{ marginTop: 10 }}> Moves: </Text>
        {pokemon.moves.slice(0, 5).map((m: any) => (
          <Text key = {m.move.name}> {m.move.name} </Text>
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
});



