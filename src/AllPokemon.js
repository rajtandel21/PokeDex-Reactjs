import React, { useState, useEffect } from "react";
import axios from "axios";
import SmallPokemonCard from "./SmallPokemonCard";
import BigPokemonCard from "./BigPokemonCard";
import Nav from "./Nav";
import { ImageUrl } from "./reuseFunctions";

function AllPokemon() {
  const [pokemon, setPokemon] = useState();
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [loading, isLoading] = useState(true);

  const [card, showCard] = useState(false);
  const [props, setProps] = useState();

  useEffect(() => {
    pokemonList();
  }, [currentUrl]);

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
            type={
              pokemon.data.types.length !== 0
                ? pokemon.data.types.map((type) => type.type.name)
                : ["dataNotFound"]
            }
            abilities={
              pokemon.data.abilities.length !== 0
                ? pokemon.data.abilities
                    .map((ability) => ability.ability.name)
                    .join(", ")
                : "Data Not Found"
            }
            height={pokemon.data.height}
            weight={pokemon.data.weight}
            moves={pokemon.data.moves.map((move) => move.move.name)}
            image={ImageUrl(pokemon.data.id)}
            altImage={pokemon.data.sprites.front_default}
            altImage2={
              pokemon.data.forms.length !== 0 ? pokemon.data.forms[0].url : null
            }
            hp={pokemon.data.stats[0].base_stat}
            attack={pokemon.data.stats[1].base_stat}
            defense={pokemon.data.stats[2].base_stat}
            specialAttack={pokemon.data.stats[3].base_stat}
            specialDefense={pokemon.data.stats[4].base_stat}
            speed={pokemon.data.stats[5].base_stat}
            openDetails={openDetails}
          />
        ))
      );
    });

    isLoading(false);
  };

  const openDetails = (props) => {
    setProps(props);
    showCard(true);
  };
  const closeCard = () => {
    showCard(false);
  };

  const rangeList = (range) => {
    let num = parseInt(range / 10, 10) * 10;
    setCurrentUrl(`https://pokeapi.co/api/v2/pokemon/?offset=${num}&limit=20`);
  };

  const nextBtn = () => {
    if (nextUrl != null) {
      setCurrentUrl(nextUrl);
      isLoading(true);
    }
  };

  const previousBtn = () => {
    if (prevUrl != null) {
      setCurrentUrl(prevUrl);
      isLoading(true);
    }
  };

  return (
    <div className="App-header">
      <Nav
        nextBtn={nextBtn}
        previousBtn={previousBtn}
        rangeList={rangeList}
        openDetails={openDetails}
        ImageUrl={ImageUrl}
        closeCard={closeCard}
      />
      {card ? (
        <BigPokemonCard
          name={props.name}
          id={props.id}
          type={props.type}
          abilities={props.abilities}
          height={props.height}
          weight={props.weight}
          moves={props.moves}
          image={props.image}
          altImage={props.altImage}
          altImage2={props.altImage2}
          hp={props.hp}
          attack={props.attack}
          defense={props.defense}
          specialAttack={props.specialAttack}
          specialDefense={props.specialDefense}
          speed={props.speed}
          closeCard={closeCard}
        />
      ) : null}
      <div className="cardContainer">{loading ? "Loading..." : pokemon}</div>
    </div>
  );
}

export default AllPokemon;
