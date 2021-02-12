const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const nodemailer = require('nodemailer');

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
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const comments = req.body.comments;

  const queryText = `INSERT INTO "contact" (firstName, lastName, email, phoneNumber, comments)
    VALUES ($1, $2, $3, $4, $5) RETURNING id`;
  pool
    .query(queryText, [firstName, lastName, email, phoneNumber, comments])
    .then((dbResponse) => {
      res.sendStatus(201);
    })
    //   const transportConfig = {
    //     service: 'gmail',
    //     auth: {
    //       user: process.env.MAILER_EMAIL,
    //       pass: process.env.MAILER_EMAIL_PASS,
    //     },
    //   };

    //   let transporter = nodemailer.createTransport(transportConfig);

    //   // let registerLinkBase = process.env.HOST_ENV;
    //   // const registerLink = `${registerLinkBase}/#/register/${tempRegId}`;

    //   const mailOptions = {
    //     from: process.env.MAILER_EMAIL,
    //     to: process.env.MAILER_EMAIL,
    //     subject: 'New Contact from Portfolio!',
    //     html: `<div>
    //     <h1>Welcome to Alex Campbell's Portfolio</h1>
    //     <p>Please finalize registration</p>
    //     <a href="${registerLink}" target="_blank">Continue</a>
    //     </div>`,
    //   };

    //   transporter.sendMail(data, (err, info) => {
    //     if (err != null) {
    //       res.sendStatus(500);
    //       return;
    //     }
    //     res.sendStatus(201);
    //   });
    // })
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;
