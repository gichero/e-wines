/** @format */

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import UserLoginPage from "./pages/UserLoginPage";
import UserRegisterPage from "./pages/UserRegisterPage";
import CartPage from "./pages/CartPage";
import UserProfilePage from "./pages/UserProfilePage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";
import UserListPage from "./pages/UserListPage";
import UserEditPage from "./pages/UserEditPage";
import ProductListPage from "./pages/ProductListPage";

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route path="/admin/productlist" component={ProductListPage} />
					<Route path="/admin/user/:id/edit" component={UserEditPage} />
					<Route path="/admin/userlist" component={UserListPage} />
					<Route path="/order/:id" component={OrderPage} />
					<Route path="/placeorder" component={PlaceOrderPage} />
					<Route path="/payment" component={PaymentPage} />
					<Route path="/shipping" component={ShippingPage} />
					<Route path="/profile" component={UserProfilePage} />
					<Route path="/cart/:id?" component={CartPage} />
					<Route path="/register" component={UserRegisterPage} />
					<Route path="/login" component={UserLoginPage} />
					<Route path="/product/:id" component={ProductPage} />
					<Route path="/" exact component={Home} />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
