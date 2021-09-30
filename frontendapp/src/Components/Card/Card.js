import React from "react";
import { Card } from "react-bootstrap";

const CustomCard = (props) => {
  const { headerStyle, cardStyle, headerText, children, bodyStyle } = props;
  return (
    <>
      <Card style={cardStyle}>
        <Card.Header style={headerStyle}>{headerText}</Card.Header>
        <Card.Body style={bodyStyle}>{children}</Card.Body>
      </Card>
    </>
  );
};

export default CustomCard;
