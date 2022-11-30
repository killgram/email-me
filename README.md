# Email me

## _Intro_

Small email service for sending custom messages

## _Tech_

The following technologies and libraries were used in the development:

- [node.JS](https://github.com/nodejs)
- [cors](https://github.com/expressjs/cors)
- [express](https://github.com/expressjs/express) 
- [fs](https://github.com/npm/security-holder)
- [handlebars](https://github.com/handlebars-lang/handlebars.js)
- [nodemailer](https://github.com/nodemailer/nodemailer)
- [prettier](https://github.com/prettier/prettier)
- [body-parser](https://github.com/expressjs/body-parser)
- [ts-node](https://github.com/TypeStrong/ts-node)
- [ts-node-dev](https://github.com/wclr/ts-node-dev)
- [typescript](https://github.com/Microsoft/TypeScript)
- [axios](https://github.com/axios/axios)

## _Installation_

Email service requires [Node.js](https://nodejs.org/) v10+ to run.

```sh
git clone git@github.com:killgram/email-me.git
```

Then you need to configure the service. Create `src/configurations/TransporterConfig.ts`:

```sh
const TransporterConfig = {
  transporterHost: "ADD-YOUR-TRANSPORTER-HOST-HERE", // e.g. smtp.yandex.com
  transporterPort: "ADD-YOUR-TRANSPORTER-PORT-HERE", // e.g. 465
  transporterSecure: "ADD-YOUR-TRANSPORTER-SECURE-HERE", // e.g. true
  mailOptionsFrom: "ADD-YOUR-MAIL-OPTIONS-FROM-HERE", // You need to specify the mail 
};
```

Then create `src/configurations/EmailAuthConfig.ts`:

```sh
const EmailAuthConfig = {
  EMAIL_USERNAME=ADD-YOUR-EMAIL-USERNAME-HERE, //put correct username
  EMAIL_PASSWORD=ADD-YOUR-EMAIL-PASSWORD-HERE, //put correct password
};
```

Then in directory:

```sh
cd email-me
npm i
npm start
```

## _Features_

The service provides 2 api:
> `/status` gives information about the status of the service

> `/send` API for sending email

`/send` takes the following parameters:

| variable | type                 | description                            |
|----------|----------------------|----------------------------------------|
| emailTo  | String               | mail to whom you want to send a letter |
| subject  | String               | letter subject                         |
| name     | String               | sender's name                          |
| email    | String               | sender's mail                          |
| message  | String               | sender's message                       |
| data     | Object, { key:value} | additional information                 |

## _License_

Can be used by anyone for anything
