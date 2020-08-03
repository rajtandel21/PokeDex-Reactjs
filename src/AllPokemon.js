import React, { useState, useEffect } from "react";
import axios from "axios";
import SmallPokemonCard from "./SmallPokemonCard";
import BigPokemonCard from "./BigPokemonCard";

function AllPokemon() {
  const [pokemon, setPokemon] = useState();
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, isLoading] = useState(true);

  const [card, showCard] = useState(false);
  const [id, setId] = useState(1);
  const openDetails = (id) => {
    setId(id);
    showCard(true);
  };
  const closeCard = () => {
    showCard(false);
  };

  const pokemonList = () => {
    axios.get(currentUrl).then((res) => {
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      pokemonData(res.data.results);
    });
  };

  const pokemonData = (results) => {
    let pokeData = results.map((data) => axios.get(data.url));
    Promise.all(pokeData).then((res) => {
      setPokemon(
        res.map((pokemon) => (
          <SmallPokemonCard
            key={pokemon.data.id}
            name={pokemon.data.name}
            id={pokemon.data.id}
            type={pokemon.data.types.map((type) => type.type.name).join(", ")}
            abilities={pokemon.data.abilities
              .map((ability) => ability.ability.name)
              .join(", ")}
            height={pokemon.data.height}
            weight={pokemon.data.weight}
            moves={pokemon.data.moves.map((move) => move.move.name).join(", ")}
            image={pokemon.data.sprites.other.dream_world.front_default}
            hp={pokemon.data.stats[0].base_stat}
            attack={pokemon.data.stats[1].base_stat}
            defense={pokemon.data.stats[2].base_stat}
            specialAttack={pokemon.data.stats[3].base_stat}
            specialDefense={pokemon.data.stats[4].base_stat}
            speed={pokemon.data.stats[5].base_stat}
            openDetails={openDetails(pokemon.data.id)}
          />
        ))
      );
    });

    isLoading(false);
  };

  useEffect(() => {
    pokemonList();
  }, [currentUrl]);

  const nextBtn = () => {
    setCurrentUrl(nextUrl);
    isLoading(true);
  };

  const previousBtn = () => {
    setCurrentUrl(prevUrl);
    isLoading(true);
  };

  //console.log(pokemon == undefined ? "Loading data..." : pokemon[0].name);
  //<p>{nextUrl}</p>
  //<p>{prevUrl == null ? "No Previous page" : prevUrl}</p>

  return (
    <div>
      {card ? (
        <BigPokemonCard
          name={"blubasaur"}
          id={id}
          /*type={type}
          abilities={abilities}
          height={height}
          weight={weight}
          moves={moves}
          image={image}
          hp={hp}
          attack={attack}
          defense={defense}
          specialAttack={specialAttack}
          specialDefense={specialDefense}
          speed={speed}*/
          closeCard={closeCard}
        />
      ) : null}
      <div className="cardContainer">{loading ? "Loading..." : pokemon}</div>
    </div>
  );
}

export default AllPokemon;
