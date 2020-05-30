
function listFollowers(name){
    name.follows.forEach(element => {
        console.log(`${name.name} ${element.name} seni takip ediyor `)
    });
}
module.exports = listFollowers