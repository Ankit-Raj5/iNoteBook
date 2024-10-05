import express from "express";
import { body, validationResult } from "express-validator";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from "../models/User.js";

const JWT_SECRET = 'Innooooo';
const router = express.Router();

// Create a User using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      // Create a new user
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const authtoken = jwt.sign(
        { user_id: user._id.toString() },
        JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.json(authtoken);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured");
    }
  }
);

// Authenticate a User using: POST "/api/auth/login". 
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password can't be blank").exists(),
  ],async (req, res) => {
    // If there are errors, return Bad request and the errors
     // If there are errors, return Bad request and the errors
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }

     try {
      let user = await User.findOne({ email: req.body.email });
      const password = req.body.password;
      if (!user) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if(!passwordCompare) {
        return res.status(400).json({ error: "Incorrect password" });
      }

      const payload = {
        user_id: user._id.toString(),
      }
      const authtoken = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h"});
      res.json(authtoken);

    }catch(error){
      console.error(error.message);
      res.status(500).send("Internal server Error occured");
    }
  });
export default router;
