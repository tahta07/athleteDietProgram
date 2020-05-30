const colors = require('colors')
function listFollowers(name){
    name.follows.forEach(element => {
        console.log(`${colors.red(name.name)} ${colors.yellow(element.name)} seni takip ediyor `)
    });
}
module.exports = listFollowers