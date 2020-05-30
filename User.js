const colors = require('colors')

const listFollowers =  (name) =>  {
    name.follows.forEach((element) => {console.log(`${colors.red(name.name)} ${colors.yellow(element.name)}  following you `);
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
module.exports = User