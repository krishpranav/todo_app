const express = require('express')
const Task = require('../models/task_models')

const router = express.Router()

// GET: get all tasks available at the db or posted.
router.get('/allTask', async (req, res) => {
    try {
        const allTask = await Task.find({})
        res.status(200).send(allTask)
    } catch (e) {
        res.status(400).send({ "status": false })
    }
})

// POST: post new tasks.
router.post('/postTask', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(200).send({ "status": true })
    } catch (e) {
        res.status(400).send({ "status": false })
    }
})

// DELETE: delete a particular task by ID.
router.delete('/deleteTaskByID/:id', async (req, res) => {
    try {
        await Task.findOneAndDelete({ _id: req.params.id })
        res.status(200).send({ "status": true })
    } catch (e) {
        res.status(404).send({ "status": false })
    }
})

// DELETE: delete all tasks which is added by the user.
router.delete('/deleteAllTask', async (req, res) => {
    try {
        await Task.deleteMany(req.body)
        return res.status(200).send({ "status": true })
    } catch (e) {
        res.status(400).send({ "status": false })
    }
})

// PATCH: updated the already available task.
router.patch('/updateTask/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body)
        if (!task) {
            return res.status(404).send({ "status": false })
        }
        updates.forEach((update) => task[update] = req.body[update])
        task.save()
        res.status(201).send({ "status": true })
    } catch (e) {
        res.status(400).send({ "status": false })
    }
})

module.exports = router