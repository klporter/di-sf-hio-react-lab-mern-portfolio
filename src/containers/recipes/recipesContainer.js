import {connect} from "react-redux";
import Recipes from "../../components/recipes/manageRecipes";
import {hideForm, showRecipeForm, updateRecipe, updateRecipes} from "../../actions/recipes/recipes";

const mapStateToProps = state => {
    return {
        recipes: state.recipes.recipes,
        recipe: state.recipes.recipe,
        showForm: state.recipes.showForm
    };
};
const mapDispatchToProps = dispatch => {
    return {
        showRecipeForm: () => dispatch(showRecipeForm()),
        hideForm: () => dispatch(hideForm()),
        updateRecipes: (recipes) => dispatch(updateRecipes(recipes)),
        updateRecipe: (recipe) => dispatch(updateRecipe(recipe))
    }
};

const RecipesContainer = connect(mapStateToProps, mapDispatchToProps)(Recipes);
export default RecipesContainer;