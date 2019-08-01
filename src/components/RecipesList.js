import React from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions";

import Recipe from './Recipe';

class RecipesList extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }
  render() {
    console.log(this.props.recipes)
    return <Recipe />
  }
};

const mapStateToProps = state => {
  return { recipes: state.recipes };
};

export default connect(
  mapStateToProps,
  { fetchRecipes }
)(RecipesList);
