import React from "react";
import { connect } from "react-redux";

class Recipes extends React.Component {
  state = {
    recipesToDisplay: []
  };
  componentDidUpdate(prevProps) {
    // console.log(this.props.recipes[0].ingredients.split(', '));
    if (prevProps.userIngredients !== this.props.userIngredients) {
      this.setState({
        recipesToDisplay: this.props.recipes.filter(recipe => {
          return recipe.ingredients.split(', ').some(r => this.props.userIngredients.indexOf(r) >= 0);
        })
      });
    }
  }

  renderList() {
    return  this.state.recipesToDisplay.map((recipe, index) => {
      return(
        <div className="item" key={index}>
          <img src={recipe.thumbnail}></img>
          <div className="content">
            <div className="description">
              <h2>{recipe.title}</h2>
              <p>{recipe.ingredients}</p>
              <a href={recipe.href}>Check full recipe</a>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    const { userIngredients, recipes } = this.props;
    console.log(this.state.recipesToDisplay);
    
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps)(Recipes);
