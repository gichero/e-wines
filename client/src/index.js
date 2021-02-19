/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

ReactDOM.render(app, document.getElementById("root"));

reportWebVitals();
