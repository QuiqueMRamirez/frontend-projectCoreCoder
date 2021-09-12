import React from 'react'
import {Button} from 'react-bootstrap';

const Buton = (props) => {
    const {variant, styles, text, type} = props;

    return (
        <>
            <Button variant={variant} style={styles} type={type}>
                {text}
              </Button>
        </>
    )
}

export default Buton
