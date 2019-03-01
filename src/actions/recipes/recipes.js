export function showRecipeForm() {
    return {
        type: 'SHOW_FORM'
    }
}

export function hideForm() {
    return {
        type: 'HIDE_FORM'
    }
}

export function updateRecipes(recipes) {
    return {
        type: 'UPDATE_RECIPES',
        recipes: recipes
    }
}

export function updateRecipe(recipe) {
    return {
        type: 'UPDATE_RECIPE',
        recipe: recipe
    }
}