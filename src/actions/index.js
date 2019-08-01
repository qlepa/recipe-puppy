import recipePuppy from "../apis/recipePuppy";

export const fetchRecipes = () => async dispatch => {
  const response = await recipePuppy.get("/api");

  dispatch({ type: "FETCH_RECIPES", payload: response.data.results });
};
