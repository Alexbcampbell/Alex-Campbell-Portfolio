const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const nodemailer = require('nodemailer');

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  const newContact = req.body;
  const queryText = `INSERT INTO "contact" (first_name, last_name, email, phone_number, comments)
    VALUES ($1, $2, $3, $4, $5)`;
  const queryValues = [
    newContact.firstName,
    newContact.lastName,
    newContact.email,
    newContact.phoneNumber,
    newContact.comments,
  ];
  pool
    .query(queryText, queryValues)
    .then((dbResponse) => {
      console.log('HERE IS THE POST CONTACT ROUTE', dbResponse);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('POST_CONTACT FAILED ', err);
      res.sendStatus(500);
    });
});

module.exports = router;
