import React, {useState} from 'react'
import Alert from 'react-bootstrap/Alert'

const AlertMessage = ({variant, heading, text}) => {
    const [show, setShow] = useState(true)
    return (
        <>
            {show ? <Alert variant={variant} onClose={()=> setShow(false)} dismissible style={{marginTop:'10px', width:'100%'}}>
                {text}
            </Alert>: null}
            
        </>
    )
}

export default AlertMessage
