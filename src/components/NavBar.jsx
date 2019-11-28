import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, Badge } from "reactstrap";

export default class NavBar extends Component {
  render() {
    return (
      <div className="my-3">
        <Navbar color="light" light expand="md">
          <NavbarBrand to="/">E-commerce</NavbarBrand>
          <Collapse isOpen={true} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="btn btn-secondary" to="/">
                  <i className="fa fa-home" aria-hidden="true"></i> Home
                </Link>
              </NavItem>
            </Nav>
            <Nav classNameName="ml-auto" navbar>
              <NavItem>
                <Link className="btn btn-primary" to="/myCart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i> My
                  Cart <Badge color="danger">4</Badge>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
