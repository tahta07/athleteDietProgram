class Meal {
    constructor(name) {
        this.name = name
        this.ingredients = []
        this.calori = 0
    }
    addIngredients(ingredients) {
        this.ingredients.push(ingredients.name)
        this.calori = this.calori + ingredients.calori
    }
    addRecipe(recipe) {
        this.ingredients.push(recipe.ingredients)
        this.calori = this.calori + recipe.totalCalories
    }
}

module.exports = Meal