import React, { Component } from "react";
import { ProductConsumer } from "../ProductContext";

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          if (value.cart.length === 0) {
            return (
              <h1 className="text-danger text-center">
                your cart is currently empty
              </h1>
            );
          } else {
            let subtotal = 0;
            return (
              <table className="table table-stripped">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {value.cart.map(product => {
                    subtotal += product.price * product.count;
                    return (
                      <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>
                          <button
                            disabled={product.count < 1}
                            onClick={() => value.descreaseCount(product.id)}
                          >
                            <i className="fa fa-minus" aria-hidden="true"></i>
                          </button>
                          <button>{product.count}</button>
                          <button
                            onClick={() => value.increaseCount(product.id)}
                          >
                            <i className="fa fa-plus" aria-hidden="true"></i>
                          </button>
                        </td>
                        <td>{(product.price * product.count).toFixed(2)}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>Subtotal</td>
                    <td></td>
                    <td></td>
                    <td>{subtotal.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
