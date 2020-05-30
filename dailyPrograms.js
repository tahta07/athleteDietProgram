class DailyPrograms {
    constructor(name) {
        this.name = name
        this.meal = []
        this.dailyTotalCalori = 0
    }
    addMeal(name) {
        this.meal.push(name)
        this.dailyTotalCalori = this.dailyTotalCalori + name.calori
    }
}
module.exports = DailyPrograms