import adminModel from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
// import dotenv from "dotenv";

// dotenv.config();


// export const getAdmin = async (req, res) => {
//     try {
//         const content = await adminModel.find().select("-password");
//         res.status(200).json({ message: "Get data successfully", content });
//     } catch (error) {
//         res.status(500).json({ message: error.message });     
//     }
// }

// export const registerAdmin = async (req, res) => {
//     try {
//         const { username, password } = req.body;    
//         const checkUsername = await adminModel.findOne({ username });
//         if (checkUsername) {
//           return res.status(409).json({ message: "Username already used" });
//         }
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const { _id } = await new adminModel({ username, password: hashedPassword }).save();
//         res.status(201).json({messaage: "Admin registered successfully", content: { _id, username }});
//     } catch (error) {
//         res.status(500).json({ message: error.message });     
//     }
// }

export const loginAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await adminModel.findOne({ username });
        if(!admin){
            return res.status(404).json({message: "Admin not found"});
        }
        const comparePassword = await bcrypt.compare(password, admin.password);
        if(!comparePassword){
            return res.status(401).json({message: "Invalid credentials"});
        }
        // const accesToken = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: "20s" });
        const accesToken = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET);
        console.log("SECRET : ", process.env.JWT_SECRET);
        res.status(200).json({ message: "Admin successfully login", token: accesToken });
    } catch (error) {
        res.status(500).json({ message: error.message });     
    }   
}

