import React from "react";

export default function Recipe(props) {
  return props.recipesToDisplay.map((recipe, index) => {
    return (
      <div className="item" key={index}>
        <div className="content">
          <div className="description">
            <h2>{recipe.title}</h2>
            <img
              className="ui right floated middle aligned rounded image"
              src={recipe.thumbnail}
              alt={`recipe ${recipe.title}`}
            />
            <p>{`Ingredients: ${recipe.ingredients}`}</p>
            <a href={recipe.href} target="_blank" rel="noopener noreferrer">
              Check full recipe
            </a>
          </div>
        </div>
      </div>
    );
  });
}
