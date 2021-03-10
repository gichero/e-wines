/** @format */

import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @route GET /api/products
// @desc Fetch all products
// @access public
export const getProducts = asyncHandler(async (req, res) => {
	const products = await Product.find({});
	res.json(products);
});

// @route GET /api/products/:id
// @desc Fetch a single product
// @access public
export const getProductById = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		res.json(product);
	} else {
		res.status(404).json({ message: "product not found" });
	}
});
