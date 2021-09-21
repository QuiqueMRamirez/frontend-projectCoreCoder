import React, {useState} from 'react'
import Input from "./Components/Input/Input";
import Buton from "./Components/Button/Button";
import CustomCard from "./Components/Card/Card";
import * as yup from "yup";
import './Register.css'
import {Formik} from 'formik';
import Select from "./Components/Select/Select";
import {useHistory} from 'react-router-dom';

const registerSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    celular: yup.number().required(),
    gender: yup.string().required(),
    city: yup.string().required(),
    password: yup.string().min(8).max(32).required(),
    confirm_password: yup.string().min(8).max(32).required()
});

const styleHeaderCard = {
    'textAlign': 'center',
    'marginTop': '10px',
    'fontFamily': 'Arial, Helvetica, sans-serif'
  }
  
const styleCard = {
    'width': '500px',
    'maxWidth': '90%',
    'borderRadius':'3%',
    'boxShadow': '3px 4px 5px 0px rgba(0, 0, 0, 0.38)'
  }

const styleBody = {
    'display': 'flex',
    'flexFlow': 'row wrap',
    'alignContent': 'center'
}

const styleInput = {
    'flex': '1 1 45%',
    'margin': 'auto',
    'marginTop': '10px',
    'marginLeft': '5px',
    'marginRight': '5px'
  }

const Register = () => {
    const history = useHistory();
    const [formEnviado, setFormEnviado] = useState(false);

    let optionsGender = [
        { key: 1, value:'M', label: 'Masculino'},
        { key: 2, value:'F', label: 'Femenino'}
    ]

    let optionsCity = [
        { key: 1, value:'GUA', label: 'Guatemala'},
        { key: 2, value:'MEX', label: 'Mexico'}
    ]

    function handleClick(){
        history.push('/')
    }

    return (
        <>
            <div className="containerIndex">
                <CustomCard headerText="Register" headerStyle={styleHeaderCard} cardStyle={styleCard} bodyStyle={styleBody}>
                    <Formik 
                    validationSchema={registerSchema} 
                    initialValues={{
                        firstName:'',
                        lastName:'',
                        email: "",
                        celular: "",
                        city: "",
                        gender: "",
                        password: "",
                        confirm_password: ""
                    }}
                    onSubmit={(valores,{resetForm}) =>{
                        console.log(valores);
                        resetForm();
                        setFormEnviado(true);
                        setTimeout(() => setFormEnviado(false),3000);
                    }}
                    >
                    {({handleSubmit,values, handleChange, handleBlur, errors, touched}) => (
                        <form onSubmit={handleSubmit} style={styleBody}>
                            <div style={styleInput}>
                                <Input type="text" name="firstName" value={values.firstName} label="First name" onChange={handleChange} onBlur={handleBlur}/>
                                {touched.firstName && errors.firstName && <div className="error">{errors.firstName}</div>}
                            </div>
                            <div style={styleInput}>
                                <Input type="text" name="lastName" value={values.lastName} label="Last name" onChange={handleChange} onBlur={handleBlur}/>
                                {touched.lastName && errors.lastName && <div className="error">{errors.lastName}</div>}
                            </div>
                            <div style={styleInput}>
                                <Input type="email" name="email" value={values.email} label="Email" onChange={handleChange} onBlur={handleBlur}/>
                                {touched.email && errors.email && <div className="error">{errors.email}</div>}
                            </div>
                            <div style={styleInput}>
                                <Input type="text" name="celular" value={values.celular} label="Celular" onChange={handleChange} onBlur={handleBlur}/>
                                {touched.celular && errors.celular && <div className="error">{errors.celular}</div>}
                            </div>
                            <div style={styleInput}>
                                <Select label='Gender' name="gender" options={optionsGender} value={values.gender} onChange={handleChange} onBlur={handleBlur}></Select>
                                {touched.gender && errors.gender && <div className="error">{errors.gender}</div>}
                            </div>
                            <div style={styleInput}>
                                <Select label='City' name="city" options={optionsCity} value={values.city} onChange={handleChange} onBlur={handleBlur}></Select>
                                {touched.city && errors.city && <div className="error">{errors.city}</div>}
                            </div>
                            <div style={styleInput}>
                                <Input type="password" name="password" label="Password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.password && errors.password && <div className="error">{errors.password}</div>}
                            </div>
                            <div style={styleInput}>
                                <Input type="password" name="confirm_password" label="Confirm password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}/>
                                {touched.confirm_password && errors.confirm_password && <div className="error">{errors.confirm_password}</div>}
                            </div>
                            <div className="containerButtons">
                                <Buton type="submit" variant="success" styles={styleInput} text="Save"/>
                                <Buton variant="primary" styles={styleInput} text="Login" operation={handleClick}/>
                            </div>
                            {formEnviado && <p className="exito">Formulario enviado con exito!</p>}
                        </form>
                    )}
                    </Formik>
                </CustomCard>
            </div>
        </>
    )
}

export default Register