import bodyParser from "body-parser";
import express from "express";
import path from "path";
import dirname from "./utils/dirname.js";
import userRouter from "./routes/user.js";
import mongooseConnection from "./config/mongoose-connection.js";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');

const __dirname = dirname(import.meta);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render("index");
})

app.use('/user', userRouter);

app.listen(3000,
  () => console.log('Server started running at http://localhost:3000')
);
