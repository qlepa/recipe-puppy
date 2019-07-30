import React from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../actions";

class RecipeList extends React.Component {
  componentDidMount() {
    this.props.fetchRecipes();
  }
  render() {
    return <div>LIST</div>;
  }
}   
export default connect(null, { fetchRecipes })(RecipeList);
