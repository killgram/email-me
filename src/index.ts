import express, { Application } from "express";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 9987;
import bodyParser from "body-parser";

// configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// listener
app.listen(PORT, (): void => {
    console.log(`Email me running on port here 👉 ${PORT}`);
});
