import React from 'react'
import { FloatingLabel, Form } from "react-bootstrap";
import { useController } from 'react-hook-form';

const Input = (props) => {
    const {label, controlId, classname, type, required} = props;
    const {field} = useController(props);
    return (
        <>
            <FloatingLabel
              controlId={controlId}
              label={label}
              className={classname}
            >
              <Form.Control {...field} type={type} placeholder={label}/>
            </FloatingLabel>
        </>
    )
}

export default Input
