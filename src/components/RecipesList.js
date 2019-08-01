import React, { Fragment } from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

import Recipe from "./Recipe";

class RecipesList extends React.Component {
  state = {
    userIngredients: {},
  }

  componentDidMount() {
    this.props.fetchRecipes();
  };

  uniqueIngredients = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  onInputChange = (e) => {
    const user = e.value
    console.log(user)
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
    console.log(this.state.userIngredients)
    return (
      <Fragment>
        <ReactMultiSelectCheckboxes
          options={options}
          getDropdownButtonLabel={(e) => this.onInputChange(e)}
        />
        <Recipe />
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
