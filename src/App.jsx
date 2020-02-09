import React from 'react';
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import {ToastContainer} from "react-toastify";

import "./config/ReactotronConfig";

import Header from "./components/Header";
import Routes from "./routes";
import './App.css';

import history from "./services/history";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
