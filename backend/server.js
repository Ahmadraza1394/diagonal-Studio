import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import emailjs from "@emailjs/browser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend server is running" });
});

app.post("/api/send-email", async (req, res) => {
  try {
    const { firstName, lastName, email, org, region, subject, message } =
      req.body;

    if (!firstName || !lastName || !email || !region || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error("EmailJS configuration is missing");
      return res.status(500).json({
        success: false,
        error: "Email service is not configured properly",
      });
    }

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      from_email: email,
      organization: org || "N/A",
      region: region,
      subject: subject,
      message: message,
      to_email: email,
    };

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

    res.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send email. Please try again later.",
    });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
  console.log(
    `Accepting requests from: ${
      process.env.FRONTEND_URL || "http://localhost:5173"
    }`
  );
});
