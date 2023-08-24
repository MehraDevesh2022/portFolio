const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));


const __dirname1 = path.resolve();
app.use(express.static(path.join(__dirname1, "/frontend/dist")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname1, "/frontend/dist/index.html"))
);



//config =>
dotenv.config({ path: "backend/config/.env" });
const PORT = process.env.PORT || 5000;

 function server() {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

server();

