const Document = require("../models/Document");

exports.uploadDocument = async (req, res) => {
  const doc = await Document.create({
    applicantId: req.params.applicantId,
    fileName: req.file.filename,
    filePath: req.file.path
  });

  res.json(doc);
};

exports.getDocuments = async (req, res) => {
  const docs = await Document.find({ applicantId: req.params.applicantId });
  res.json(docs);
};

exports.deleteDocument = async (req, res) => {
  await Document.findByIdAndDelete(req.params.docId);
  res.json({ msg: "Document deleted" });
};
