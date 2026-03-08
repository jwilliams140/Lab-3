export async function fetchPokemon(name: string) {
    const q = name.trim().toLowerCase();

    if (!q) {
        throw new Error("Please enter a Pokémon name");
    }

    console.log("Fetching Pokémon:", q);

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${q}`);

    if (!response.ok) {
        throw new Error("Pokémon not found");
    }

    const data = await response.json();
    console.log("Pokémon data", data);
    return data;
}
