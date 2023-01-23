var express = require("express");
var router = express.Router();
var { google } = require("googleapis");
const dotenv = require("dotenv").config();
var nodemailer = require("nodemailer");

/* GET users listing. */
router.post("/dhaval", async function (req, res, next) {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URIS
  );
  oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  var email = req.body.email_id;
  var message = req.body.message_id;
  var subject = req.body.subject;

  if (
    email == undefined ||
    email == "" ||
    message == undefined ||
    message == "" ||
    subject == undefined ||
    subject == ""
  ) {
    return res.send({
      status: false,
      error: {
        code: 1806,
        error: "Invalid Params Passed.",
      },
    });
  }

var htmlFormate = `<table style="border-collapse: collapse; width: 100%;">
    <tr style="border: 1px solid #ccc;">
    <th style="padding: 8px; border: 1px solid #ccc;">Email</th>
    <th style="padding: 8px; border: 1px solid #ccc;">Message</th>
    <th style="padding: 8px; border: 1px solid #ccc;">Subject</th>
  </tr>
  <tr style="border: 1px solid #ccc;">
    <td style="padding: 8px; border: 1px solid #ccc;">${email}</td>
    <td style="padding: 8px; border: 1px solid #ccc;">${message}</td>
    <td style="padding: 8px; border: 1px solid #ccc;">${subject}</td>
  </tr>
</table>`


  //Gmail API mailer
  async function sendMail(email, htmlFormate) {
    try {
      const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "dhavaldubariya70@gmail.com",
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: ACCESS_TOKEN,
        },
      });
      console.log(transport);
      const mailOptions = {
        from: `"Dhaval" <dhavaldubariya70@gmail.com>`,
        to: email, //emailTo
        subject: "Verifies Email Address",
        html: htmlFormate,
      };

      try {
        const result = await transport.sendMail(mailOptions);
        console.log("Result:::::::::::::::::::::::::::::::::", result);
        return result;
      } catch (err) {
        console.log(
          "Error - 1 ::::::::::::::::::::::::::::::::::",
          err.message
        );
        return {
          status: false,
          error: err.message,
        };
      }
    } catch (err) {
      console.log(
        "Error - 2 ::::::::::::::::::::::::::::::::::::",
        err.message
      );
      return {
        status: false,
        error: err.message,
      };
    }
  }

  var data = await sendMail("dhavaldubaroya35@gmail.com", htmlFormate);

  if (data.status == false) {
    return res.send({
      status: false,
      error: {
        code: 681,
        error: "Somting Goes Wrong",
      },
    });
  }

  return res.send(data);
});


/* GET users listing. */
router.post("/paras", async function (req, res, next) {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URIS
  );
  oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  var email = req.body.email_id;
  var message = req.body.message_id;
  var subject = req.body.subject;

  if (
    email == undefined ||
    email == "" ||
    message == undefined ||
    message == "" ||
    subject == undefined ||
    subject == ""
  ) {
    return res.send({
      status: false,
      error: {
        code: 1806,
        error: "Invalid Params Passed.",
      },
    });
  }

var htmlFormate = `<table style="border-collapse: collapse; width: 100%;">
    <tr style="border: 1px solid #ccc;">
    <th style="padding: 8px; border: 1px solid #ccc;">Email</th>
    <th style="padding: 8px; border: 1px solid #ccc;">Message</th>
    <th style="padding: 8px; border: 1px solid #ccc;">Subject</th>
  </tr>
  <tr style="border: 1px solid #ccc;">
    <td style="padding: 8px; border: 1px solid #ccc;">${email}</td>
    <td style="padding: 8px; border: 1px solid #ccc;">${message}</td>
    <td style="padding: 8px; border: 1px solid #ccc;">${subject}</td>
  </tr>
</table>`


  //Gmail API mailer
  async function sendMail(email, htmlFormate) {
    try {
      const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "dhavaldubariya70@gmail.com",
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: ACCESS_TOKEN,
        },
      });
      console.log(transport);
      const mailOptions = {
        from: `"Paras" <dhavaldubariya70@gmail.com>`,
        to: email, //emailTo
        subject: "Verifies Email Address",
        html: htmlFormate,
      };

      try {
        const result = await transport.sendMail(mailOptions);
        console.log("Result:::::::::::::::::::::::::::::::::", result);
        return result;
      } catch (err) {
        console.log(
          "Error - 1 ::::::::::::::::::::::::::::::::::",
          err.message
        );
        return {
          status: false,
          error: err.message,
        };
      }
    } catch (err) {
      console.log(
        "Error - 2 ::::::::::::::::::::::::::::::::::::",
        err.message
      );
      return {
        status: false,
        error: err.message,
      };
    }
  }

  var data = await sendMail("parasdalsaniya8@gmail.com", htmlFormate);

  if (data.status == false) {
    return res.send({
      status: false,
      error: {
        code: 681,
        error: "Somting Goes Wrong",
      },
    });
  }

  return res.send(data);
});


module.exports = router;
