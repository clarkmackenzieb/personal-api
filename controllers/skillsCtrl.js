const {skills} = require("../skills.js")

const getSkills = (req, res, next) => {
    if(req.query.exp){
        res.json(skills.filter(skill => {
            return skill.experience === req.query.exp;
        }))
    }
    else{
        return res.json(skills);}
}

const addSkill = (req, res, next) => {
    if(req.query.name && req.query.experience){
        let id = skills.length+1;
        skills.push({
            "id": id,
            "name": req.query.name,
            "experience": req.query.experience
        })
        res.json(skills)
    }
    else{ 
        skills.push(req.body)
        res.json(user.skills)
    }
}


module.exports = {
    getSkills,
    addSkill
}