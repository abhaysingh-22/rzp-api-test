import express from "express";
import Razorpay from "razorpay";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// serve static frontend
app.use(express.static(path.join(__dirname, "public")));

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// create order (₹1 = 100 paise)
app.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: 100, // 100 paise = ₹1
      currency: "INR",
      receipt: "rcpt_" + Date.now(),
    };
    const order = await razorpay.orders.create(options);
    return res.json({
      success: true,
      key: process.env.RAZORPAY_KEY_ID, // frontend ko key bhej do
      order,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Error creating order",
      error: err.message,
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
