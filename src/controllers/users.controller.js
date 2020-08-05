const bcrypt = require('bcrypt')
const { DataTypes } = require('sequelize')
const database = require('../database');
const Users = require('../models/user')(database, DataTypes);

async function register( req, res ) {
    const { email, password, name } = req.body
    const saltRounds = 10
    bcrypt.hash(password, saltRounds, async function(err, hash) {
        if(err) res.status(500).end()
        try{
            const User = new Users({
                email,
                password: hash,
                name
            })
            const data = await User.save()
            res.json( data )
        }catch{
            res.status(500).end()
        }
        
    });
}

async function login( req, res ) {
    const { email, password } = req.body
    const user = await Users.findOne({ where: { email }})
    bcrypt.compare(password , user.password, function(err, result) {
        if(result) res.json(user)
        else res.status(404).end()
    });

}

module.exports = {
    register,
    login
}