/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product/Product";
import Message from "../components/Message/Message";
import Loader from "../components/Loader/Loader";
import { listProductsAction } from "../actions/productActions";

const Home = () => {
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);

	const { loading, products, error } = productList;

	useEffect(() => {
		dispatch(listProductsAction());
	}, [dispatch]);

	return (
		<>
			<h1>Products</h1>
			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<Row>
					{products.map((product) => (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					))}
				</Row>
			)}
		</>
	);
};

export default Home;