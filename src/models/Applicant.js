const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
  loanApplicationId: { type: mongoose.Schema.Types.ObjectId, ref: "LoanApplication" },
  name: String,
  email: String,
  phone: String
});

module.exports = mongoose.model("Applicant", applicantSchema);
