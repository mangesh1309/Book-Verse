import User from "../models/user_model.js";
import bcrypt from "bcrypt";

import dotenv from "dotenv";
dotenv.config();

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User Already Exists" });
        }

        // Hash the password
        const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user with hashed password
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword,
        });

        // Save new user to the database
        await newUser.save();

        return res.status(200).json({ message: "User Created Successfully!",
            user: {
                _id: newUser._id,
                fullname: newUser.fullname,
                email: newUser.email,
            }
         });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "INTERNAL SERVER ERROR" });
    }
};

export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        const flag = await bcrypt.compare(password, user.password);

        if(!flag || !user) {
            return res.status(400).json({message: "Invalid Username or Password"});
        } else {
            res.status(200).json({
                message: "Logged in Successfully!",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                }
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});
    }
};