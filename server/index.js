require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const authRouter = require('./routes/authRouter')

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use("/auth", authRouter)

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.DB_CONNECT + process.env.DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log(err));


  app.listen(port, () => console.log(`server running at http://localhost:${port}`))
