const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./src/routes/authRoutes");
const loanRoutes = require("./src/routes/loanRoutes");
const applicantRoutes = require("./src/routes/applicantRoutes");
const documentRoutes = require("./src/routes/documentRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("src/uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/loan", loanRoutes);
app.use("/api/applicants", applicantRoutes);
app.use("/api/documents", documentRoutes);

module.exports = app;
