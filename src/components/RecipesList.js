import React, { Fragment } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

import Recipes from "./Recipes";

class RecipesList extends React.Component {
  state = {
    userIngredients: [],
    options: [],
  };

  componentDidMount() {
    this.props.fetchRecipes();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.recipes !== this.props.recipes) {
      this.getIngredietns();
    }
  }

  uniqueIngredients = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  onInputChange = value => {
    this.setState({
      userIngredients: value.map(ingredient => ingredient.label)
    });
  };

  getIngredietns = () => {
    const { recipes } = this.props;
    const ingredients = recipes
      .map(item => {
        return item.ingredients;
      })
      .join(", ")
      .split(", ")
      .sort();
    this.setState({
      options: ingredients.filter(this.uniqueIngredients).map((item, index) => {
        return { label: item, value: index };
      })
    });
  }

  render() {
    return (
      <Fragment>
        <ReactMultiSelectCheckboxes
          options={this.state.options}
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
