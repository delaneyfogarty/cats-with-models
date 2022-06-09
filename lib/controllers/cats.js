const { Router } = require('express');
const Cat = require('../models/CartoonCat');

module.exports = Router()
  .get('/', async (req, res) => {
    const matchingKitties = await Cat.getAll();
    res.json(matchingKitties);
  })

  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const singleKitty = await Cat.getById(id);
    res.json(singleKitty);
  });
