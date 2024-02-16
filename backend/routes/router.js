const mongoose = require("mongoose");
const express = require("express");

const sisindri = require("../modals/modal");

const router = express.Router();

router.post("/user",async (req, res) => {
  try {
    const { fname, password } = req.body;
    const data = {
      fname: fname,
      password: password,
    };

    const user = new sisindri(data);

    //const user=await  sisindri(data);
    await user.save();

    console.log("user saved successfully");
    return res.json("user saved succesfully");
  } catch (e) {
    console.log(e.message);
    return res.json("Failed to register user");
  }
});

module.exports = router;
