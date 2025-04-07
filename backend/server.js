const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();

const DOMAIN = process.env.DOMAIN;

app.use(express.json());
app.use(
  cors({
    origin: `${DOMAIN}`,
    credentials: true,
  })
);

app.use(cookieParser());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });