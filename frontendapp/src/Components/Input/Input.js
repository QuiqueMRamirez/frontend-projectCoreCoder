import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const Input = (props) => {
  const {
    label,
    controlId,
    classname,
    type,
    styleInput,
    onChange,
    onBlur,
    value,
    name,
  } = props;
  return (
    <>
      <FloatingLabel controlId={controlId} label={label} className={classname}>
        <Form.Control
          type={type}
          name={name}
          placeholder={label}
          value={value}
          style={styleInput}
          onChange={onChange}
          onBlur={onBlur}
        />
      </FloatingLabel>
    </>
  );
};

export default Input;
