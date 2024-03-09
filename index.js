import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { databaseConnection } from "./utils/database/connection.js";
import articleRouter from "./routes/articleRoute.js";
import suggestionRouter from "./routes/suggestionRoute.js";
import adminRouter from "./routes/adminRoute.js";
import { options } from "./apiDocs/swaggerOption.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import mediaRouter from "./routes/mediaRoute.js";
import socialRouter from "./routes/socialRoute.js";
import staffRouter from "./routes/staffRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded());

databaseConnection();

const specs = swaggerJSDoc(options);

app.get("/", (req, res) => {
  return res.redirect("/apidocs");
})
app.use("/apidocs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/articles", articleRouter);
app.use("/suggestion", suggestionRouter);
app.use("/admin", adminRouter);
app.use("/media", mediaRouter);
app.use("/social", socialRouter);
app.use("/staff", staffRouter);
app.get("/mediaStorage/:filename", (req, res) => {
  console.log(`${process.env.LOCALHOST_URL}/mediaStorage/:filename/${req.params.filename}`);
  res.send(`${process.env.LOCALHOST_URL}/mediaStorage/:filename/${req.params.filename}`)
});

app.listen(process.env.PORT, () => {
  console.log(`Running on http://localhost:${process.env.PORT}`);
});
