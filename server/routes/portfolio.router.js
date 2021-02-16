const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET PROJECT BY ID
 */
router.get('/:id', (req, res) => {
  // GET route code here
  pool
    .query(`SELECT * FROM "portfolio" ORDER BY "id" ASC;`)
    .then((dbResponse) => {
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
