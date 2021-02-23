/** @format */

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home";
import ProductPage from "./containers/ProductPage";
import CartPage from "./containers/CartPage";

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/" exact component={Home} />
					<Route path="/product/:id" component={ProductPage} />
					<Route path="/cart/:id?" component={CartPage} />
				</Container>
			</main>

			<Footer />
		</Router>
	);
};

export default App;
