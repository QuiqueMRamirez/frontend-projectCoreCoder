import React from 'react'
import {Button} from 'react-bootstrap';

const Buton = (props) => {
    const {variant, styles, text, type, operation} = props;

    return (
        <>
        {type==="submit" ? 
        <Button variant={variant} style={styles} type={type}>{text}</Button> : 
        <Button variant={variant} style={styles} type={type} onClick={()=>{operation();}}>{text}</Button>}
        </>
    )
}

export default Buton
