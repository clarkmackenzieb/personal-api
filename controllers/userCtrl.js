const user = require("../user.js");


//GET
const getName = (req, res, next) => {
    res.json(user.name);
}
const getLocation = (req, res, next) => {
    res.json(user.location);
}
const getOccupations = (req, res, next) => {
    if(req.query.order){
        if(req.query.order === "asc"){
            res.json(user.occupations.sort())
        }
        else if(req.query.order === "desc"){
            res.json(user.occupations.reverse())
        }
    }
    else{res.json(user.occupations)}
}
const getOccupationsLatest = (req, res, next) => {
    res.json(user.occupations.slice(0,1))
}
const getHobbies = (req, res, next) => {
    res.json(user.hobbies)
}
const getHobbiesType = (req, res, next) => {
    console.log(req.params.type)
    if(req.params.type){
        res.json(user.hobbies.filter(hobbies =>
            hobbies.type === req.params.type
        ));
    }
}

const getFamily = (req, res, next) => {
    res.json(user.family)
}
const getFamilyGender = (req, res, next) => {
    console.log(req.params.gender)
    if(req.params.gender){
        res.json(user.family.filter(family =>
            family.gender === req.params.gender
        ));
    }
}
const getRestaurants = (req, res, next) => {
    res.json(user.restaurants)
}
const getRestaurantsName = (req, res, next) => {
    console.log(req.params.name)
    if(req.params.name){
        res.json(user.restaurants.filter(restaurants =>
            restaurants.name === req.params.name
        ));
    }
}

//PUT

const changeName = (req, res, next) => {
    if(req.query.name){
        user.name = req.query.name;
        res.json(user.name)
    }
    else{
        user.name = req.body;
        red.json(user.name)
    }
    
}
const changeLocation = (req, res, next) => {
    if(req.query.name){
        user.location = req.query.location;
        res.json(user.location)
    }
    else{
        user.location = req.body;
        res.json(user.location)}
}

//POST

const addHobbies = (req, res, next) => {
    if(req.query.name && req.query.type){
        user.hobbies.push({
            "name": req.query.name,
            "type": req.query.type
        })
        res.json(user.hobbies)
    }
    else{
        user.hobbies.push(req.body);
        res.json(user.hobbies)
    }
    
}
const addOccupation = (req, res, next) => {
    if(req.query.name){
        user.occupations.push(req.query.name)
        res.json(user.occupations)
    }
    else{
        user.occupations.push(req.body.occupation)
        res.json(user.occupations)
    }
}
const addFamily = (req, res, next) => {
    if(req.query.name && req.query.relation && req.query.gender){
        user.family.push({
            "name": req.query.name,
            "relation": req.query.relation,
            "gender": req.query.gender
        })
    }
    else{
        user.family.push(req.body)
    }
}
const addRestaurants = (req, res, next) => {
    if(req.query.name && req.query.type && req.query.rating){
        user.resaturants.push({
            "name": req.query.name,
            "type": req.query.type,
            "rating": req.query.rating
        })
    }
    else{
        user.restaurants.push(req.body)
    }
}

module.exports = {
    getName,
    getLocation,
    getOccupations,
    getOccupationsLatest,
    getHobbies,
    getHobbiesType,
    getFamily,
    getFamilyGender,
    getRestaurants,
    getRestaurantsName,

    changeLocation,
    addHobbies,
    addOccupation,
    changeName,
    addFamily,
    addRestaurants
}