import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import App from './App';
import './assets/css/index.css';

ReactDOM.render(
	<Provider store={store} >
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</Provider>,
  document.getElementById('root')
);
