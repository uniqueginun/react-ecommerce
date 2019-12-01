import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProductsMain from "./components/ProductsMain";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/itemDetails">
            <ProductDetails />
          </Route>
          <Route path="/myCart">
            <Cart />
          </Route>
          <Route path="/">
            <ProductsMain />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
