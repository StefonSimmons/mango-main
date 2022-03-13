// Environment Vars
require('dotenv').config();
const {USERNAME, TOKEN} = process.env
// SETUP SERVER
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

// SETUP SERVER (ADDITIONAL)
const cors = require('cors')
const bodyParser = require('body-parser');
const logger = require('morgan')

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))


// SETUP NODEMAILER
const nodemailer = require('nodemailer');

// ----------------------------------------------------------------
//                      NODE-MAILER TRANSPORTER
// ----------------------------------------------------------------

let transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: USERNAME,
    pass: TOKEN // set-up via 2-factor & App Password
  }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify(error => {
  if (error) {
    console.log('Transporter ERROR ', error);
  } else {
    console.log('All looks good for mailing, Yay!');
  }
});

// ----------------------------------------------------------------
//                          CONTROLLERS / ACTIONS
// ----------------------------------------------------------------

// LISTENING on PORT
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

// GET controller
app.get('/send-email', (req, res) => {
  res.send({ express: 'NOTHING HERE. EXPRESS IS CONNECTED TO REACT' });
});

// POST controller
app.post('/send-email', (req, res) => {
  const { data } = req.body

  const name = data.name
  const email = data.fromEmail
  const subject = data.subject
  const message = `${data.message}
  --------
  ${name}
  (${email})`

  let mail = {
    from: email,
    to: USERNAME,
    subject: subject,
    html: message
  }

  transporter.sendMail(mail, err => {
    if (err) {
      res.json({ msg: 'fail' })
    } else {
      res.json({ msg: 'success' })
    }
  })

})