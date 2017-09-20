const express = require('express');

const cors = require('cors');

const {json} = require('body-parser');

const port = 3005;

const app = express();

const userCtrl = require("./controllers/userCtrl")
const skillsCtrl = require("./controllers/userCtrl")

app.use(json());

app.use(cors());

app.listen(port, () => {
    console.log(`I'll be right by your side till ${3005}`)
})
//user
app.get("/api/name", userCtrl.getName)
app.get("/api/location", userCtrl.getLocation)
app.get("/api/occupations", userCtrl.getOccupations)
app.get("/api/occupations/latest", userCtrl.getOccupationsLatest)
app.get("/api/hobbies", userCtrl.getHobbies)
app.get("/api/hobbies/:type", userCtrl.getHobbiesType)
app.get("/api/family", userCtrl.getFamily)
app.get("/api/family/:gender", userCtrl.getFamilyGender)
app.get("/api/restaurants", userCtrl.getRestaurants)
app.get("/api/restaurants/:name", userCtrl.getRestaurantsName)

app.put("/api/name", userCtrl.changeName)
app.put("/api/location", userCtrl.changeLocation)

app.post("/api/hobbies", userCtrl.addHobbies)
app.post("/api/occupation", userCtrl.addOccupation)
app.post("/api/family", userCtrl.addFamily)
app.post("/api/restaurants", userCtrl.addRestaurants)

//skills
app.get("/api/skills")