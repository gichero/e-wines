/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product/Product";
import Message from "../components/Message/Message";
import Loader from "../components/Loader/Loader";
import Paginate from "../components/Paginate/Paginate";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import { listProductsAction } from "../actions/productActions";

const HomePage = ({ match }) => {
	const keyword = match.params.keyword;
	const pageNumber = match.params.pageNumber || 1;
	const dispatch = useDispatch();

	const productList = useSelector((state) => state.productList);
	const { loading, products, error, pages, page } = productList;

	useEffect(() => {
		dispatch(listProductsAction(keyword, pageNumber));
	}, [dispatch, keyword, pageNumber]);

	return (
		<>
			{!keyword && <ProductCarousel />}

			{loading ? (
				<Loader />
			) : error ? (
				<Message variant="danger">{error}</Message>
			) : (
				<>
					<Row>
						{products.map((product) => (
							<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
								<Product product={product} />
							</Col>
						))}
					</Row>
					<Paginate
						pages={pages}
						page={page}
						keyword={keyword ? keyword : ""}
					/>
				</>
			)}
		</>
	);
};

export default HomePage;
