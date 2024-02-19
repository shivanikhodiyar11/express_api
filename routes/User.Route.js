const router = require("express").Router();
const Usercontroller = require("../controller/User.Contoller");

router.post("/register", Usercontroller.addData);
router.get("/getUser", Usercontroller.getData);
router.put("/updateUser/:id", Usercontroller.updateData);
router.delete("/deleteUser/:id", Usercontroller.deleteData);

module.exports = router;
