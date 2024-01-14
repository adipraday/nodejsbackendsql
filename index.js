import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import Users from "./models/UserModel.js";
import Absensi from "./models/AbsensiModels.js";
import WorkOrders from "./models/WOModels.js";
import ActivityLog from "./models/ActivityLogModels.js";
import router from "./routes/index.js";
import Fat from "./models/FatModels.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";

try {
  await db.authenticate();
  console.log("Database Connected...");
  await Users.sync();
  await Absensi.sync();
  await WorkOrders.sync();
  await ActivityLog.sync();
  await Fat.sync();
} catch (error) {
  console.error("Database connection error:", error);
}

app.use(cors({ credentials: true, origin: CORS_ORIGIN }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

// Define a route for the root path
app.get("/", (req, res) => {
  res.send("Kujang API Services");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
