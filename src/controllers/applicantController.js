const Applicant = require("../models/Applicant");

exports.createApplicant = async (req, res) => {
  const applicant = await Applicant.create(req.body);
  res.json(applicant);
};

exports.getApplicants = async (req, res) => {
  const applicants = await Applicant.find({ loanApplicationId: req.params.loanAppId });
  res.json(applicants);
};
