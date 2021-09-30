import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";

const InputSelect = (props) => {
  const { controlId, label, options, onBlur, onChange, name, value } = props;

  return (
    <>
      <FloatingLabel controlId={controlId} label={label}>
        <Form.Select
          aria-label="Floating label select example"
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
        >
          {options.map((option) => {
            return (
              <option key={option.key} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </Form.Select>
      </FloatingLabel>
    </>
  );
};

export default InputSelect;
