import React, { Fragment } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

import Recipes from "./Recipes";

class RecipesList extends React.Component {
  state = {
    userIngredients: [],
  }

  componentDidMount() {
    this.props.fetchRecipes();
  };

  uniqueIngredients = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  onInputChange = (value) => {
    this.setState({
      userIngredients: value.map(ingredient => ingredient.label)
    })
  }
  
  render() {
    const { recipes } = this.props;
    const ingredients = recipes
      .map(item => {
        return item.ingredients;
      })
      .join(", ")
      .split(", ")
      .sort();
    const options = ingredients
      .filter(this.uniqueIngredients)
      .map((item, index) => {
        return { label: item, value: index };
      });
    // console.log(this.state.userIngredients);

    return (
      <Fragment>
        <ReactMultiSelectCheckboxes
          options={options}
          placeholderButtonLabel="Select ingredients..."
          onChange={this.onInputChange}
        />
        <Recipes userIngredients={this.state.userIngredients} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { recipes: state.recipes };
};

export default connect(
  mapStateToProps,
  { fetchRecipes }
)(RecipesList);
