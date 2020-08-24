import axios from "axios";

//Sets the default pokemon image. Used in SmallPokemonCard and BigPokemonCard
export function imageSelect(id, image, altImage, altImage2) {
  if (id > 893) {
    if (altImage !== null) {
      return altImage;
    } else if (altImage2 !== null) {
      axios.get(altImage2).then((res) => {
        if (res.data.sprites.front_default !== null) {
          return res.data.sprites.front_default;
        }
      });
    }
  } else {
    return image;
  }
}

export const ImageUrl = (id) => {
  if (id >= 10 && id < 100) {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`;
  } else if (id < 10) {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`;
  } else {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
  }
};

export const typeColor = {
  dataNotFound: "#6b6b6b",
  normal: "#A8A878",
  fighting: "#C03028",
  flying: "#A890F0",
  poison: "#A040A0",
  ground: "#E0C068",
  rock: "#B8A038",
  bug: "#A8B820",
  ghost: "#705898",
  steel: "#B8B8D0",
  fire: "#f56935",
  grass: "#5C9836",
  water: "#5cabc0",
  electric: "#E5BD1D",
  psychic: "#F85888",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  fairy: "#EE99AC",
};

//fetch specific pokemon data. Used in Nav and BigPokemonCard.
//export async function getPokemon(res) {
//return axios.get(`https://pokeapi.co/api/v2/pokemon/${res}`);
/*return ({
        name: res.data.name,
        id: res.data.id,
        type:
          res.data.types.length !== 0
            ? res.data.types.map((type) => type.type.name)
            : ["dataNotFound"],
        abilities:
          res.data.abilities.length !== 0
            ? res.data.abilities
                .map((ability) => ability.ability.name)
                .join(", ")
            : "Data Not Found",
        height: res.data.height,
        weight: res.data.weight,
        moves: res.data.moves.map((move) => move.move.name),
        image: ImageUrl(res.data.id),
        altImage: res.data.sprites.front_default,
        altImage2: res.data.forms.length !== 0 ? res.data.forms[0].url : null,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        specialAttack: res.data.stats[3].base_stat,
        specialDefense: res.data.stats[4].base_stat,
        speed: res.data.stats[5].base_stat,
      });*/
//}
