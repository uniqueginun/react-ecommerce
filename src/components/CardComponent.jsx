import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default class CardComponent extends Component {
  render() {
    const { name, description, image, price } = this.props.product;
    return (
      <div className="col-md-4 p-2 my-1">
        <Card>
          <CardImg top width="5o" height="250" src={image} alt={name} />
          <CardBody>
            <CardTitle>
              <span className="badge badge-primary">{name} </span>
              <span className="float-right badge badge-primary">{price} $</span>
            </CardTitle>
            <CardText>{description}</CardText>
            {this.props.children}
          </CardBody>
        </Card>
      </div>
    );
  }
}
