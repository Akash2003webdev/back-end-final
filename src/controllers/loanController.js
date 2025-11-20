const LoanApplication = require("../models/LoanApplication");

exports.createLoan = async (req, res) => {
  const loan = await LoanApplication.create({
    userId: req.user.id
  });
  res.json(loan);
};

exports.getLoan = async (req, res) => {
  const loan = await LoanApplication.findById(req.params.id);
  res.json(loan);
};
