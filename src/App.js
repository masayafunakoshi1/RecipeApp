import React, { useState, useEffect } from "react"
import Recipe from "./components/Recipe"
import './App.css';

function App() {

  const APP_ID = "f8e358dc";
  const APP_KEY = "7d5d269c33684dbd8c5becd398ff88e5";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")

  //Only runs when server starts, but with "query" it runs when search input is submitted
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form onSubmit={getSearch}
        className="search-form">

        <input className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch} />

        <button className="search-button"
          type="submit">
          Search
        </button>

      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  );
}

export default App;
