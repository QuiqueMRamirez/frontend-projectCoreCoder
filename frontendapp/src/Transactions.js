import React from 'react'
import './Transactions.css';
import CustomCard from "./Components/Card/Card";
import Input from "./Components/Input/Input";
import Buton from "./Components/Button/Button";
import Select from "./Components/Select/Select";
import {Formik} from 'formik';
import * as yup from "yup";
import NavMenu from './Components/NavMenu/NavMenu';

const transactionSchema = yup.object().shape({
    debitAccount: yup.number().positive().required(),
    creaditAccount: yup.number().positive().required(),
    amount: yup.number().positive().required(),
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

const styleInput = {
    'flex': '1 1 45%',
    'margin': 'auto',
    'marginTop': '10px',
    'marginLeft': '5px',
    'marginRight': '5px'
  }

const Transactions = () => {

    const onSubmit = (valores,{resetForm}) =>{
        console.log(valores);
        resetForm();
    };

    const initialValues = {
        debitAccount: 0,
        creaditAccount: 0,
        amount: 0
    }

    let optionsDebit = [
        { key: 1, value:12, label: 'Account GTQ-MON-123123123'},
        { key: 2, value:23, label: 'Account USD-MON-443333422'}
    ]

    let optionsCredit = [
        { key: 1, value:56, label: 'Account GTQ-MON-123123123'},
        { key: 2, value:76, label: 'Account USD-MON-443333422'}
    ]
    return (
        <>
            <div className="containerTransactions">
                <NavMenu />
                <CustomCard headerText="Transactions" headerStyle={styleHeaderCard} cardStyle={styleCard} bodyStyle={styleBody}>
                    <Formik validationSchema={transactionSchema} initialValues={initialValues} onSubmit={onSubmit}>
                        {({handleSubmit,values, handleChange, handleBlur, errors, touched}) => (
                            <form onSubmit={handleSubmit} style={styleBody}>
                                <div style={styleInput}>
                                    <Select label='Debit Account' name="debitAccount" options={optionsDebit} value={values.debitAccount} onChange={handleChange} onBlur={handleBlur}/>
                                    {touched.debitAccount && errors.debitAccount && <div className="error">{errors.debitAccount}</div>}
                                </div>
                                <div style={styleInput}>
                                    <Select label='Credit Account' name="creaditAccount" options={optionsCredit} value={values.creaditAccount} onChange={handleChange} onBlur={handleBlur}/>
                                    {touched.creaditAccount && errors.creaditAccount && <div className="error">{errors.creaditAccount}</div>}
                                </div>
                                <div style={styleInput}>
                                    <Input type="number" name="amount" value={values.amount} label="Amount" onChange={handleChange} onBlur={handleBlur}/>
                                    {touched.amount && errors.amount && <div className="error">{errors.amount}</div>}
                                </div>
                                <div className="containerButtons">
                                    <Buton type="submit" variant="success" styles={styleInput} text="Save"/>
                                </div> 
                            </form>
                        )} 
                    </Formik>
                </CustomCard>
            </div>
        </>
    )
}

export default Transactions
