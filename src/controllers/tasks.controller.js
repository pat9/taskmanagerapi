const { DataTypes, json } = require('sequelize')
const database = require('../database');
const Tasks = require('../models/task')(database, DataTypes);

async function create(req, res) {
    const { title, description, status, userId } = req.body
    const task =  new Tasks({
        title,
        description,
        status,
        userId 
    })

    const data = await task.save()

    res.status(201).json(data)
}

async function findByUser(req, res){
    //Id user
    const { id } = req.params
    const tasks = await Tasks.findAll({ where: { userId: id } })
    res.status(200).json(tasks)

}

async function update(req, res) {
    const { id } = req.params
    const { title, description, status } = req.body

    const task = await Tasks.findByPk(id);
    task.title = title
    task.description = description
    task.status = status

    const data = await task.save()

    res.status(200).json(data)
}

async function destroy(req, res) {
    const { id } = req.params

    await Tasks.destroy({where:{id}});

    res.status(200).end()
}

module.exports ={ 
    create,
    update,
    findByUser,
    destroy
}