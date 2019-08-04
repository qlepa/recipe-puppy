import React from "react";
import { connect } from "react-redux";

import Recipe from './Recipe';

class Recipes extends React.Component {
  state = {
    recipesToDisplay: []
  };
  componentDidUpdate(prevProps) {
    if (prevProps.userIngredients !== this.props.userIngredients) {
      this.setState({
        recipesToDisplay: this.props.recipes.filter(recipe => {
          return recipe.ingredients.split(', ').some(r => this.props.userIngredients.indexOf(r) >= 0);
        })
      });
    }
  }

  render() {
    return <div className="ui relaxed divided list"><Recipe recipesToDisplay={this.state.recipesToDisplay} /></div>;
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps)(Recipes);
