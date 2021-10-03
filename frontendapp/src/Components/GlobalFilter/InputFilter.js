import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const InputFilter = (props) => {
  const { label , type, onChange, value } =
    props;

  return (
    <>
      <FloatingLabel label={label}>
        <Form.Control
          type={type}
          placeholder={label}
          value={value}
          onChange={onChange}
        />
      </FloatingLabel>
    </>
  );
};

export default InputFilter;
