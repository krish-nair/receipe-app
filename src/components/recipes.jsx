import React from "react";

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map(recipe => {
        return (
          <div key={recipe.recipe_id}>
            <img src={recipe.image_url} alt={recipe.title} />
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;
