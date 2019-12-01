import React, { Component } from "react";

import { products } from "./products";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: products,
    cart: []
  };

  increaseCount = id => {
    let exists = this.state.cart.find(item => item.id === id);
    if (exists !== undefined) {
      const itemInCartToBeUpdated = { ...exists };
      itemInCartToBeUpdated["count"] += 1;
      this.setState({
        cart: [...this.state.cart].map(item => {
          if (item.id === id) {
            item = itemInCartToBeUpdated;
          }
          return item;
        })
      });
    }
  };

  descreaseCount = id => {
    let exists = this.state.cart.find(item => item.id === id);
    if (exists !== undefined && exists.count > 0) {
      const itemInCartToBeUpdated = { ...exists };
      itemInCartToBeUpdated["count"] -= 1;
      this.setState({
        cart: [...this.state.cart].map(item => {
          if (item.id === id) {
            item = itemInCartToBeUpdated;
          }
          return item;
        })
      });
    }
  };

  addToCart = id => {
    const product = this.state.products.find(pro => pro.id === id);
    const itemToBeAdded = { ...product };
    let exists = this.state.cart.find(item => item.id === id);
    if (exists === undefined) {
      itemToBeAdded["count"] = 1;
      this.setState({ cart: [...this.state.cart, itemToBeAdded] });
    } else {
      let itemInCartToBeUpdated = { ...exists };
      itemInCartToBeUpdated["count"] += 1;
      this.setState({
        cart: [...this.state.cart].map(item => {
          if (item.id === id) {
            item = itemInCartToBeUpdated;
          }
          return item;
        })
      });
    }
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          addToCart: this.addToCart,
          increaseCount: this.increaseCount,
          descreaseCount: this.descreaseCount
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
