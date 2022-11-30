import { Request, Response } from "express";
import { dataConverter, requestBodyValidation } from "../utils";
import { TransporterConfig, EmailAuthConfig } from "../configurations";
const nodemailer = require("nodemailer");
const handlebars = require("handlebars");
const fs = require("fs");
const path = require("path");

/**
 * @description sending email api
 * @param {Request} req
 * @param {Response} res
 */
const sendEmail = (req: Request, res: Response) => {
  const valid = requestBodyValidation(req.body);

  if (!valid.status) {
    return res.status(200).send({
      title: valid.message,
      success: false,
    });
  }
  const { emailTo, subject, name, email, message, data } = req.body;

  const transporter = nodemailer.createTransport({
    host: TransporterConfig.transporterHost,
    port: TransporterConfig.transporterPort,
    secure: TransporterConfig.transporterSecure,
    auth: {
      user: EmailAuthConfig.EMAIL_USERNAME,
      pass: EmailAuthConfig.EMAIL_PASSWORD,
    },
  });

  const filePath = path.join(__dirname, "../templates/email.html");
  const source = fs.readFileSync(filePath, "utf-8").toString();
  const template = handlebars.compile(source);

  const replacements = {
    name: name,
    email: email,
    message: message,
    sendTime: new Date(Date.now()),
    data: dataConverter(data),
  };

  const htmlToSend = template(replacements);

  const mailOptions = {
    from: TransporterConfig.mailOptionsFrom,
    to: emailTo,
    subject: subject,
    html: htmlToSend,
  };

  transporter.sendMail(mailOptions, function (error: Error) {
    if (error) {
      res.status(200).send({
        title: error.message,
        success: false,
      });
    } else {
      res.status(200).send({
        title: "Email sent successfully",
        success: true,
      });
    }
  });
};

export { sendEmail };
