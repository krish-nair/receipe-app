import React, { Component } from "react";
import "./App.css";
import Form from "./components/form";

const API_KEY = "374aa627a2fe58102b78d411c628725d";

class App extends Component {
  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const api_call = await fetch(
      `https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=5`
    );
    const data = await api_call.json();
    console.log(data);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;
