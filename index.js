function listFollowers(name){
    name.follows.forEach(element => {
        console.log(`${name.name} ${element.name} seni takip ediyor `)
    });
}

class User {
    constructor(name, age, mail) {
        this.name = name
        this.age = age
        this.mail = mail
        this.followers = []
        this.follows = []
        this.recipe = []
        this.dailyPrograms = []
    }
    followUser(user) {
        user.followers.push(this)
        this.follows.push(user)
        // console.log(`${this.name}: ${user.name} adlı kullanıcıyı takip ediliyor. listesinde takip ettiği ${this.follows.length} kişi bulunmaktadır.`)
    }
    postRecipie(recipe) {
        this.recipe.push(recipe)
    }
    createDailyProgram(dailyPrograms) {
        this.dailyPrograms.push(dailyPrograms)
    }
    listFollower(){
        listFollowers(this)
    }
  
}

class Ingredients {
    constructor(name, calori, protein, carb, fat) {
        this.name = name
        this.calori = calori
        this.protein = protein
        this.carb = carb
        this.fat = fat
    }
}


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

const yumurta = new Ingredients('Yumurta', 100, 10, 5, 3)
const sut = new Ingredients('Süt', 125, 2, 12, 20)
const sabah = new Meal('Sabah')
const sutluYumurta = new Recipe('Sütlü Yumurta')
const diyet1 = new DailyPrograms('1.Hafta')


sutluYumurta.addIngredients(sut)
sutluYumurta.addIngredients(yumurta)
sabah.addIngredients(yumurta)
sabah.addIngredients(sut)
// sabah.addRecipe(sutluYumurta)
diyet1.addMeal(sabah)

const yunus = new User('Yunus', 30, 'yunus@yunus.com')
const naciye = new User('Naciye', 25, 'naciye@naciye.com')
const armagan = new User('Armağan', 30, 'armagan@armagan.com')

armagan.followUser(yunus)
naciye.followUser(yunus)
yunus.followUser(naciye)
yunus.followUser(armagan)
yunus.createDailyProgram(diyet1)
naciye.createDailyProgram(diyet1)

// console.log(sabah)
// console.log(sutluYumurta)
// console.log(yumurta)
// yunus.postRecipie(sutluYumurta)
// console.log(sabah)
// console.log(yunus)
yunus.listFollower()
naciye.listFollower()
// listFollowers(yunus)