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
              alt="recipe"
            />
            <p>`ingredients ${recipe.ingredients}`</p>
            <a href={recipe.href}>Check full recipe</a>
          </div>
        </div>
      </div>
    );
  });
};
