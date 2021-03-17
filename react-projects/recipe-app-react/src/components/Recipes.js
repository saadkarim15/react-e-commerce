import React from "react";

const Recipes = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipes">
      <h1>{title}</h1>
      <p>Calories: {calories.toFixed(2)}</p>
      <img src={image} alt="" />
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipes;
