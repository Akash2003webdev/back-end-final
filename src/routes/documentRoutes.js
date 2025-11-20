const router = require("express").Router();
const upload = require("../middlewares/uploadMiddleware");
const auth = require("../middlewares/authMiddleware");
const {
  uploadDocument,
  getDocuments,
  deleteDocument
} = require("../controllers/documentController");

router.post("/upload/:applicantId", auth, upload.single("file"), uploadDocument);
router.get("/:applicantId", auth, getDocuments);
router.delete("/:docId", auth, deleteDocument);

module.exports = router;
