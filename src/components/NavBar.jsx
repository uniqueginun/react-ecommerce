import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, Badge } from "reactstrap";
import logo from "../logo.svg";
import { ProductConsumer } from "../ProductContext";

export default class NavBar extends Component {
  render() {
    const style = {
      backgroundColor: "#3f51b5",
      color: "cornsilk",
      borderTopRightRadius: 5,
      borderTopLeftRadius: 5
    };
    return (
      <div className="my-3">
        <Navbar style={style} expand="md">
          <NavbarBrand to="/">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="shopping site using ReactJs"
            ></img>
          </NavbarBrand>
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="btn btn-secondary" to="/">
                  <i className="fa fa-home" aria-hidden="true"></i> Home
                </Link>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem className="ml-2">
                <Link className="btn btn-secondary" to="/myCart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i> My
                  Cart{" "}
                  <Badge color="danger">
                    <ProductConsumer>
                      {value => {
                        return value.cart.length;
                      }}
                    </ProductConsumer>
                  </Badge>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
