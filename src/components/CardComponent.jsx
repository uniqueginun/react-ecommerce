import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

export default class CardComponent extends Component {
  render() {
    const { name, description, image } = this.props.product;
    return (
      <div>
        <Card>
          <CardImg top width="100%" src={image} alt={name} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
            {this.props.children}
          </CardBody>
        </Card>
      </div>
    );
  }
}
