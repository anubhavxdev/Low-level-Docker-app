import express from 'express';
import FormData from '../models/FormData.js';


const router = express.Router();

router.post("/", async (req, res) => {
    const data = await FormData.create(req.body);
    res.json({message: "Form data submitted successfully", data});
});

router.get("/", async (req, res) => {
    const data = await FormData.find();
    res.json(data);
});

export default router;