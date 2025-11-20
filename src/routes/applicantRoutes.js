const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const { createApplicant, getApplicants } = require("../controllers/applicantController");

router.post("/", auth, createApplicant);
router.get("/:loanAppId", auth, getApplicants);

module.exports = router;
