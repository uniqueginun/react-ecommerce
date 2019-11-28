import React, { Component } from "react";
import CardComponent from "./CardComponent";

export default class ProductsMain extends Component {
  renderProducts = () => {
    if (this.props.products.length > 0) {
      return this.props.products.map(product => (
        <CardComponent product={product} key={product.id} />
      ));
    } else {
      return (
        <h1 className="text-canter text-danger">
          No products were added yet...
        </h1>
      );
    }
  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">{this.renderProducts()}</div>
        </div>
      </div>
    );
  }
}
