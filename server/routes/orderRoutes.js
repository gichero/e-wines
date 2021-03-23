/** @format */

import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
	addOrderItems,
	getOrderById,
	updateOrderToPaid,
	getMyOrders,
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/").post(protect, addOrderItems);

router.route("/:id").get(protect, getOrderById);

router.route("/:id/pay").put(protect, updateOrderToPaid);

router.route("/myorders").get(protect, getMyOrders);

export default router;
