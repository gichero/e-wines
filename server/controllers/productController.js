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

// @route DELETE /api/products/:id
// @desc delete a product
// @access Private / Admin
export const deleteProduct = asyncHandler(async (req, res) => {
	const product = await Product.findById(req.params.id);

	if (product) {
		await product.remove();
		res.json({ message: "product removed" });
	} else {
		res.status(404).json({ message: "product not found" });
	}
});

// @route POST /api/products
// @desc create a product
// @access Private / Admin
export const createProduct = asyncHandler(async (req, res) => {
	const product = new Product({
		name: "Sample name",
		price: 1,
		user: req.user._id,
		image: "/images/sample.jpg",
		brand: "Sample brand",
		category: "Sample category",
		countInStock: 0,
		numReviews: 0,
		description: "Sample description",
	});

	const createdProduct = await product.save();
	res.status(201).json(createdProduct);
});

// @route PUT /api/products/:id
// @desc update a product
// @access Private / Admin
export const updateProduct = asyncHandler(async (req, res) => {
	const {
		name,
		price,
		description,
		image,
		brand,
		category,
		countInStock,
	} = req.body;

	const product = await Product.findById(req.params.id);

	if (product) {
		product.name = name;
		product.price = price;
		product.description = description;
		product.image = image;
		product.brand = brand;
		product.category = category;
		product.countInStock = countInStock;

		const updatedProduct = await product.save();
		res.status(201).json(updatedProduct);
	} else {
		res.status(404);
		throw new Error("Product not found");
	}
});
