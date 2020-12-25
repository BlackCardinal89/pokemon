import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function poke(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    setPokemons(data.results)
  }
  useEffect(() => {
    poke();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Pokemon
        </a>
        {pokemons.map((pokemon) => {
          return <a href={pokemon.url}>{pokemon.name}</a>;
        })}
      </header>
    </div>
  );
}

export default App;
