import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import Users from "./models/UserModel.js";
import Absensi from "./models/AbsensiModels.js";
import WorkOrders from "./models/WOModels.js";
import LogActivity from "./models/LogActivityModels.js";
import router from "./routes/index.js";

dotenv.config();

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected...');
    await Users.sync();
    await Absensi.sync();
    await WorkOrders.sync();
    await LogActivity.sync();
} catch (error) {
    console.log(error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5000, ()=> console.log('Server running at port 5000'));