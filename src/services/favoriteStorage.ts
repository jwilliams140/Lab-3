import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_KEY = "pokemon_favorites";

export async function loadFavorites(): Promise<string[]> {
    const data = await AsyncStorage.getItem(FAVORITES_KEY);

    if (!data) {
        return [];
    }
    return JSON.parse(data);
}

export async function saveFavorites(favorites: string[]) {
    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}
