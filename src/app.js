const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const loanRoutes = require("./routes/loanRoutes");
const applicantRoutes = require("./routes/applicantRoutes");
const documentRoutes = require("./routes/documentRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("src/uploads"));

app.use("/api/auth", authRoutes);
app.use("/api/loan", loanRoutes);
app.use("/api/applicants", applicantRoutes);
app.use("/api/documents", documentRoutes);

module.exports = app;
