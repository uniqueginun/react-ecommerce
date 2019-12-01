import React, { Component } from "react";
import CardComponent from "./CardComponent";
import { ProductConsumer } from "../ProductContext";

export default class ProductsMain extends Component {
  renderProducts = () => {
    return (
      <ProductConsumer>
        {value => {
          if (value.products.length === 0) {
            return (
              <div className="row">
                <div>No Products were found</div>
              </div>
            );
          } else {
            return (
              <div className="row">
                {value.products.map(product => (
                  <CardComponent product={product} key={product.id}>
                    <div>
                      <button
                        title="add to cart"
                        className="btn btn-success btn-sm"
                        onClick={() => value.addToCart(product.id)}
                      >
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
          }
        }}
      </ProductConsumer>
    );
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
