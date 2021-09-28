import React, {useState} from 'react'
import CustomCard from "./Components/Card/Card";
import Input from "./Components/Input/Input";
import Buton from "./Components/Button/Button";
import Select from "./Components/Select/Select";
import Alert from './Components/AlertMessage/AlertMessage';
import {Formik} from 'formik';
import * as yup from "yup";

import './ExpenseIncome.css';

const incomeExpenseSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
  debitAccount: yup.number().positive().required(),
  amount: yup.number().positive().required()
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
    'boxShadow': '3px 4px 5px 0px rgba(0, 0, 0, 0.38)',
    'margin': 'auto'
  }

const styleBody = {
    'display': 'flex',
    'flexFlow': 'column wrap',
    'alignContent': 'center',
    'width': '100%',
}

const initialValues = {
  name:'',
  type:'',
  debitAccount: 0,
  amount: 0,
}

const styleInput = {
  'flex': '1 1 45%',
  'margin': 'auto',
  'marginTop': '10px',
  'marginLeft': '5px',
  'marginRight': '5px'
}

  
const ExpenseIncome = ({height, width}) => {

    const [formEnviado, setFormEnviado] = useState(false);

    const styleDiv = {
      'height': height || '100vh',
      'width': width || '100vw'
    }
    
    const onSubmit = (valores,{resetForm}) => {
      console.log(valores);
      resetForm();
      setFormEnviado(true);
      setTimeout(() => setFormEnviado(false),3000);
    }

    let optionsType = [
      { key: 1, value:'Inc', label: 'Income'},
      { key: 2, value:'Exp', label: 'Expense'}
  ]

  let optionsDebit = [
    { key: 1, value:12, label: 'Account GTQ-MON-123123123'},
    { key: 2, value:23, label: 'Account USD-MON-443333422'}
]

    return (
        <>
        <div className="containerIE" style={styleDiv}>
            {/*<NavMenu />*/}
            <CustomCard headerText="Register Income/Expense" headerStyle={styleHeaderCard} cardStyle={styleCard} bodyStyle={styleBody}>
              <Formik
              validationSchema={incomeExpenseSchema}
              initialValues={initialValues}
              onSubmit={onSubmit}>
              {({handleSubmit,values, handleChange, handleBlur, errors, touched}) => (
                <form onSubmit={handleSubmit} style={styleBody}>
                  <div style={styleInput}>
                    <Input type="text" name="name" value={values.name} label="Name" onChange={handleChange} onBlur={handleBlur}/>
                    {touched.name && errors.name && <div className="error">{errors.name}</div>}
                  </div>
                  <div style={styleInput}>
                    <Select label='Type' name="type" options={optionsType} value={values.type} onChange={handleChange} onBlur={handleBlur}></Select>
                    {touched.type && errors.type && <div className="error">{errors.type}</div>}
                  </div>
                  <div style={styleInput}>
                    <Select label='Debit/Credit Account' name="debitAccount" options={optionsDebit} value={values.debitAccount} onChange={handleChange} onBlur={handleBlur}/>
                    {touched.debitAccount && errors.debitAccount && <div className="error">{errors.debitAccount}</div>}
                  </div>
                  <div style={styleInput}>
                    <Input type="number" name="amount" value={values.amount} label="Amount" onChange={handleChange} onBlur={handleBlur}/>
                    {touched.amount && errors.amount && <div className="error">{errors.amount}</div>}
                  </div>               
                  <div className="containerButtons">
                    <Buton type="submit" variant="success" styles={styleInput} text="Save"/>
                  </div>
                  {formEnviado && <Alert variant="success" text="Registration was successful"/>}                 
                </form>
              )
              }  
              </Formik>
            </CustomCard>
        </div>
        </>
        
    )
}

export default ExpenseIncome
