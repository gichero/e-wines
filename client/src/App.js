/** @format */

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import UserLoginPage from "./pages/UserLoginPage";
import UserRegisterPage from "./pages/UserRegisterPage";

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/product/:id" component={ProductPage} />
					<Route path="/login" component={UserLoginPage} />
					<Route path="/register" component={UserRegisterPage} />
					<Route path="/cart/:id?" component={CartPage} />
					<Route path="/" exact component={Home} />
				</Container>
			</main>

			<Footer />
		</Router>
	);
};

export default App;
