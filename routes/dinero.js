const routes = require('express').Router()

const {
  findAll,
  save, 
  update, 
  deleteD,
  findById
} = require('./../controllers/controll-dinero')

routes.get('/',findAll)
routes.get('/:id',findById)
routes.post('/',save)
routes.put('/:id', update)
routes.delete('/:id',deleteD)

module.exports = routes