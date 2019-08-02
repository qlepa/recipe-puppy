import React from 'react';
import { connect } from "react-redux";

class Recipes extends React.Component {
  state = {
    recipesToDisplay: [],
  }
  componentDidMount() {
    console.log('props nie działa :(', this.props.recipes)
    console.log('inne działają')
    this.setState({
      recipesToDisplay: this.props.userIngredients
    })
  }
  
  render() {
    const { userIngredients, recipes } = this.props;
    console.log(recipes)
    console.log(this.state.recipesToDisplay)
    return <div>HELLLLLO</div>;
  }
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  };
};

export default connect(mapStateToProps) (Recipes);