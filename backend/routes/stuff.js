const express = require("express");
const router = express.Router();

const controller = require("../controllers/stuff");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.post("/", auth, multer, controller.createThing);
router.put("/:id", auth, controller.modifyThing);
router.delete("/:id", auth, controller.deleteThing);
router.get("/:id", auth, controller.readOneThing);
router.get("/", auth, controller.readThing);

module.exports = router;