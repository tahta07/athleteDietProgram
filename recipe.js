
class Recipe {
    constructor(name) {
        this.name = name
        this.totalCalories = 0
        this.ingredients = []
    }
    addIngredients(recipeIngredients) {
        this.totalCalories = recipeIngredients.calori + this.totalCalories
        this.ingredients.push(recipeIngredients.name)
    }
}

module.exports = Recipe