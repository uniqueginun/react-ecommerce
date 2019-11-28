import React, { Component } from "react";
import CardComponent from "./CardComponent";

export default class ProductsMain extends Component {
  renderProducts = () => {
    if (this.props.products.length > 0) {
      return (
        <div className="row">
          {this.props.products.map(product => (
            <CardComponent product={product} key={product.id}>
              <div>
                <button title="add to cart" className="btn btn-success btn-sm">
                  <i className="fa fa-cart-plus" aria-hidden="true"></i>
                </button>
                <button
                  title="remove from cart"
                  className="btn btn-danger float-right btn-sm"
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </div>
            </CardComponent>
          ))}
        </div>
      );
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
