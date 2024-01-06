const express = require("express");
const { createUser, getUser, getsingleUser, updateUser, deleteUser } = require("../Controller/userControler");

// routes router Objects
const router = express.Router();

// CREATE NEW USER
router.post("/createNew-user", createUser);

// GET All user
router.get("/get-user", getUser);

// GET single user
router.get("/get-singleuser/:id", getsingleUser);

// UPDATE USER
router.put("/update-user/:id", updateUser);

// DELETE USER
router.delete("/delete-user/:id",deleteUser)
// Export router
module.exports = router;
