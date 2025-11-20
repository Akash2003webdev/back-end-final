const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const { createLoan, getLoan } = require("../controllers/loanController");

router.post("/create", auth, createLoan);
router.get("/:id", auth, getLoan);

module.exports = router;
