import { Pokemon } from "./Pokemon";

export class PokemonBuilder {

  private pokemon: Pokemon = {
    name: "",
    image: "",
    types: [],
    abilities: [],
    moves: []
  };

  setName(name: string) {
    this.pokemon.name = name;
    return this;
  }

  setImage(image: string) {
    this.pokemon.image = image;
    return this;
  }

  setTypes(types: string[]) {
    this.pokemon.types = types;
    return this;
  }

  setAbilities(abilities: string[]) {
    this.pokemon.abilities = abilities;
    return this;
  }

  setMoves(moves: string[]) {
    this.pokemon.moves = moves;
    return this;
  }

  build(): Pokemon {
    return this.pokemon;
  }
}
