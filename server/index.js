const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const dataSchema = new mongoose.Schema({
  name: String,
  price: Number,
  img: String,
  tag: String,
  sale: Boolean,
  sale_price: Number,
});

const Data = mongoose.model("Sata", dataSchema, "data");
const server = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Vraj:U5Kv6IL31AR01xuk@cluster0.pmtgi2q.mongodb.net/products",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("connected");
    })
    .catch((err) => {
      console.error(err);
    });
  app.listen(8080, () => {
    console.log("live on 8080");
  });
};
app.get("/api/v1/data", async (req, res) => {
  try {
    const a = await Data.find();
    res.json(a);
  } catch (err) {
    console.error(err);
  }
});
server();
