const express = require("express");
const router = express.Router();
const membersController = require("../controllers/membersController");

router.get("/", membersController.getAllMembers);
router.post("/", membersController.createMember);
router.get("/:id", membersController.getMemberById);
router.put("/:id", membersController.updateMember);
router.delete("/:id", membersController.deleteMember);

module.exports = router;
