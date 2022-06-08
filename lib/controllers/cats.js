const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/', (req, res) => {
    const matchingKitties = cats.map((cat) => {
      return {
        id: cat.id,
        name: cat.name,
      };
    });
    res.json(matchingKitties);
  })

  .get('/:id', (req, res) => {
    const id = req.params.id;
    const singleKitty = cats.find((cat) => cat.id === id);
    res.json(singleKitty);
  });
