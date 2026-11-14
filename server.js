
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("GSP VORTEX Backend is Running!");
});

app.get("/api/player", (req, res) => {
  res.json({
    success: false,
    message: "Free Fire API is not connected yet."
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("GSP VORTEX Backend Started");
});
