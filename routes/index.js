import express from "express";
import { getUsers, Login, Register, Logout, updateUser, getAvailableTechnician } from "../controllers/Users.js";
import { getAbsensi, AddAbsensi, getAbsensiById, deleteAbsensiById } from "../controllers/Absensi.js";
import { getWorkOrders, getWorkOrdersById, addWorkOrder, updateWorkOrder, deleteWorkOrderById } from "../controllers/WorkOrders.js";
import { LogActivityWO, LogGetTeknisiWO, DeleteLogTeknisi, GetLogActivity } from "../controllers/LogActivity.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
router.put('/updateuser', updateUser);
router.get('/getavailabletechnician', getAvailableTechnician);
/////////////////////////////////////////////
router.get('/absensi', verifyToken, getAbsensi);
router.post('/addabsensi', AddAbsensi);
router.get('/absensiuser', verifyToken, getAbsensiById);
router.delete('/deleteabsensi/:id', deleteAbsensiById);
/////////////////////////////////////////////
router.get('/workorders', verifyToken, getWorkOrders);
router.get('/workorder/:id', getWorkOrdersById);
router.post('/addworkorder', addWorkOrder);
router.put('/updateworkorder', updateWorkOrder);
router.delete('/deleteworkorder/:id', deleteWorkOrderById);
/////////////////////////////////////////////
router.post('/logactivitywo', LogActivityWO);
router.get('/loggetteknisiwo/:id', LogGetTeknisiWO);
router.delete('/deletelogworkorder', DeleteLogTeknisi);
router.get('/getlogactivity', GetLogActivity);

export default router;