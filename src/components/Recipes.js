import React from "react";
import { connect } from "react-redux";

class Recipes extends React.Component {
  state = {
    recipesToDisplay: []
  };
  componentDidUpdate(prevProps) {
    console.log(this.props.recipes[0].ingredients.split(', '));
    if (prevProps.userIngredients !== this.props.userIngredients) {
      this.setState({
        recipesToDisplay: this.props.recipes.filter(recipe => {
          return recipe.ingredients.split(', ').some(r => this.props.userIngredients.indexOf(r) >= 0);
        })
      });
    }
  }

  render() {
    const { userIngredients, recipes } = this.props;
    console.log(this.state.recipesToDisplay);
    
    return <div>HELLLLLO</div>;
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps)(Recipes);
