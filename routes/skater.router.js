const skater = require("../controllers/skater.controller");
const router = require("express").Router();
const auth = require("../auth/authorization");

router.get("/", auth, skater.findAll);
router.get("/:id", auth, skater.findOne);
router.patch("/", auth, skater.update);
router.delete("/:id", auth, skater.delete);

module.exports = router;