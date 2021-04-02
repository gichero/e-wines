/** @format */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message/Message";
import Loader from "../components/Loader/Loader";
import FormContainer from "../components/FormContainer/FormContainer";
import { listProductsAction } from "../actions/productActions";

const ProductEditPage = ({ match, history }) => {
	const productId = match.params.id;
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [image, setImage] = useState();
	const [brand, setBrand] = useState("");
	const [category, setCategory] = useState("");
	const [countInStock, setCountInStock] = useState(0);
	const [description, setDescription] = useState("");

	const dispatch = useDispatch();

	const productDetails = useSelector((state) => state.productDetails);
	const { loading, error, product } = productDetails;

	useEffect(() => {
		if (!product.name || product._id !== productId) {
			dispatch(listProductsAction(productId));
		} else {
			setName(product.name);
			setPrice(product.price);
			setImage(product.image);
			setBrand(product.brand);
			setCategory(product.category);
			setCountInStock(product.countInStock);
			setDescription(product.description);
		}
	}, [dispatch, history, productId, product]);

	const submitHandler = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<Link to="/admin/productlist" className="btn btn-light my-3">
				Back
			</Link>

			<FormContainer>
				<h1>Edit Product</h1>

				{loading ? (
					<Loader />
				) : error ? (
					<Message variant="danger">{error}</Message>
				) : (
					<Form onSubmit={submitHandler}>
						<Form.Group controlId="name">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="name"
								placeholder="enter name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="price">
							<Form.Label>Price</Form.Label>
							<Form.Control
								type="price"
								placeholder="enter price"
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="brand">
							<Form.Label>Brand</Form.Label>
							<Form.Control
								type="brand"
								placeholder="enter brand"
								value={brand}
								onChange={(e) => setPrice(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="image">
							<Form.Label>Image</Form.Label>
							<Form.Control
								type="image"
								placeholder="enter image"
								value={image}
								onChange={(e) => setImage(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="category">
							<Form.Label>Category</Form.Label>
							<Form.Control
								type="category"
								placeholder="enter price"
								value={category}
								onChange={(e) => setCategory(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Form.Group controlId="countIn Stock">
							<Form.Label>Count in Stock</Form.Label>
							<Form.Check
								type="count in stock"
								placeholder="count in stock"
								value={countInStock}
								onChange={(e) => setCountInStock(e.target.checked)}
							></Form.Check>
						</Form.Group>

						<Form.Group controlId="description">
							<Form.Label>Description</Form.Label>
							<Form.Control
								type="description"
								placeholder="enter description"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							></Form.Control>
						</Form.Group>

						<Button type="submit" variant="primary">
							Edit
						</Button>
					</Form>
				)}
			</FormContainer>
		</>
	);
};

export default ProductEditPage;
