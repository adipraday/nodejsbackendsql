import express from "express";
import {
  getUsers,
  Login,
  Register,
  Logout,
  updateUser,
  getAvailableTechnician,
} from "../controllers/Users.js";
import {
  getAbsensi,
  AddAbsensi,
  getAbsensiById,
  deleteAbsensiById,
} from "../controllers/Absensi.js";
import {
  getWorkOrders,
  getRiwayatWorkOrders,
  getWorkOrdersById,
  addWorkOrder,
  updateWorkOrder,
  updateProgressWo,
  deleteWorkOrderById,
  addTeknisiWo,
  getTeknisiWo,
  deleteTeknisiWo,
} from "../controllers/WorkOrders.js";
import {
  getFat,
  getAvailableFat,
  getFatById,
  addFat,
  updateFat,
  deleteFatById,
} from "../controllers/Fat.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { dashboardAct } from "../controllers/ActivityLog.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
router.put("/updateuser", updateUser);
router.get("/getavailabletechnician", getAvailableTechnician);
/////////////////////////////////////////////
router.get("/absensi", verifyToken, getAbsensi);
router.post("/addabsensi", AddAbsensi);
router.get("/absensiuser", verifyToken, getAbsensiById);
router.delete("/deleteabsensi/:id", deleteAbsensiById);
/////////////////////////////////////////////
router.get("/workorders", verifyToken, getWorkOrders);
router.get("/riwayatworkorder", verifyToken, getRiwayatWorkOrders);
router.get("/workorder/:id", getWorkOrdersById);
router.post("/addworkorder", addWorkOrder);
router.put("/updateworkorder", updateWorkOrder);
router.put("/updateprogresswo", updateProgressWo);
router.put("/deleteworkorder/:id/:userId", deleteWorkOrderById);
router.post("/addteknisiwo", addTeknisiWo);
router.get("/getteknisiwo/:id", getTeknisiWo);
router.delete("/deleteteknisiwo/:id/:teknisiId", deleteTeknisiWo);
/////////////////////////////////////////////
router.get("/getdashboardact", dashboardAct);
/////////////////////////////////////////////
router.get("/getfat", getFat);
router.get("/getavailablefat", getAvailableFat);
router.get("/getfat/:id", getFatById);
router.post("/addfat", addFat);
router.patch("/updatefat/:id", updateFat);
router.delete("/deletefat/:id", deleteFatById);

export default router;
