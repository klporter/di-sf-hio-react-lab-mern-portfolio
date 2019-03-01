import recipeModel from "../../models/recipe";

let initialState = {
    recipes: [],
    recipe: recipeModel,
    showForm: false
};

const recipes = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_FORM':
            return Object.assign({}, state, {
                showForm: true
            });
        case 'HIDE_FORM':
            return Object.assign({}, state, {
                showForm: false,
                recipe: recipeModel
            });
        case 'UPDATE_RECIPES':

            return Object.assign({}, state, {
                recipes: action.recipes
            });
        case 'UPDATE_RECIPE':
            return Object.assign({}, state, {
                recipe: action.recipe
            });

        default:
            return state;
    }
};
export default recipes;