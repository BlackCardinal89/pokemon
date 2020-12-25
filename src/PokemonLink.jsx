import React from "react";

const PokemonLink = (pokemon) => {
  return <a href={pokemon.link}>{pokemon.name}</a>;
};

export default PokemonLink;
