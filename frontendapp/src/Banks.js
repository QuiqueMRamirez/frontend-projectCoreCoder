import React from 'react'
import NavMenu from './Components/NavMenu/NavMenu';
import Table from './Components/Table/Table';
import CustomCard from "./Components/Card/Card";
import Input from "./Components/Input/Input";
import Buton from "./Components/Button/Button";
import Select from "./Components/Select/Select";
import {Formik} from 'formik';
import * as yup from "yup";
import './Banks.css';

const bankSchema = yup.object().shape({
    account: yup.number().positive().required(),
    type: yup.string().required(),
    coin: yup.string().required(),
    bankname: yup.string().required(),
    name: yup.string().required()
})

export const tableConstants = (handleEdit) => {
    return [
      {
        title: 'ID',
        render: rowData => {
          return <span>{rowData.id}</span>;
        },
      },
      {
        title: 'Account',
        render: rowData => {
          return <span>{rowData.account}</span>;
        },
      },
      {
        title: 'Type',
        render: rowData => {
          return <span>{rowData.type}</span>;
        },
      },
      {
        title: 'Bank',
        render: rowData => {
          return <span>{rowData.bank}</span>;
        },
      },
      {
        title: 'Name',
        render: rowData => {
          return <span>{rowData.name}</span>;
        },
      },

      {
        title: 'Coin',
        render: rowData => {
          return <span>{rowData.coin}</span>;
        },
      },
      {
        title: 'Amount',
        render: rowData => {
          return <span>{rowData.amount}</span>;
        },
      },
      {
        title: 'Action',
        render: rowData => {
          return <>
          <button className='btn btn-warning' style={{marginLeft: '4px'}} onClick={handleEdit(rowData)}>Edit</button>
          <button className='btn btn-danger' style={{marginLeft: '4px'}} onClick={handleEdit(rowData)}>Delete</button>
          </>
        },
      },
    ];
  };

  export const data = [
    {
      "id": 1,
      "account": "12312323423",
      "type": "Ahorro",
      "coin": "GTQ",
      "bank": "Banco Industrial",
      "name": "Cuenta de ahorros",
      "amount": 1000
    },
    {
      "id": 2,
      "account": "12312323423",
      "type": "Ahorro",
      "coin": "GTQ",
      "bank": "Banrural",
      "name": "Cuenta de ahorros",
      "amount": 1000
    },
    {
      "id": 3,
      "account": "12312323423",
      "type": "Monetaria",
      "coin": "USD",
      "bank": "Banco G&T",
      "name": "Cuenta monetaria personal",
      "amount": 1000
    },
    {
      "id": 4,
      "account": "23423555",
      "type": "Monetaria",
      "coin": "USD",
      "bank": "Banco Industrial",
      "name": "Cuenta monetaria Quique",
      "amount": 1000
    },
    {
      "id": 5,
      "account": "4564564",
      "type": "Ahorro",
      "coin": "GTQ",
      "bank": "Banco Industrial",
      "name": "Cuenta de ahorros",
      "amount": 1000
    }
  ]

const styles = {
    'margin': 'auto',
    'width': '50% !important',
    'marginLeft': '20px',
    'marginRight': '20px',
    'textAlign': 'center',
  }

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

const initialValues = {
    account: 0,
    type: '',
    coin: '',
    bankname: '',
    name: '',
}
const Banks = () => {

    const onSubmit = (valores,{resetForm}) => {
        console.log(valores);
        resetForm();
    }

    let optionsType = [
        { key: 1, value:'Mon', label: 'Monetaria'},
        { key: 2, value:'Aho', label: 'Ahorro'}
    ]

    let optionsCoin = [
        { key: 1, value:'GTQ', label: 'Quetzales'},
        { key: 2, value:'USD', label: 'Dolares'}
    ]

    let optionsBank = [
        { key: 1, value:'BI', label: 'Banco Industrial'},
        { key: 2, value:'BAC', label: 'Bango Agromercantil'}
    ]

    const handleEdit = (item) => () => {
        // write your logic
        alert(JSON.stringify(item))
      }

    return (
        <>
            <div className="containerBank">
                {/*<NavMenu/>*/}
                <CustomCard headerText="Bank Account" headerStyle={styleHeaderCard} cardStyle={styleCard} bodyStyle={styleBody}>
                    <Formik
                    validationSchema={bankSchema}
                    initialValues={initialValues}
                    onSubmit={onSubmit}>
                        {({handleSubmit,values, handleChange, handleBlur, errors, touched}) => (
                        <form onSubmit={handleSubmit} style={styleBody}>
                        <div style={styleInput}>
                            <Input type="number" name="account" value={values.account} label="Account" onChange={handleChange} onBlur={handleBlur}/>
                            {touched.account && errors.account && <div className="error">{errors.account}</div>}
                        </div>
                        <div style={styleInput}>
                            <Select label='Type' name="type" options={optionsType} value={values.type} onChange={handleChange} onBlur={handleBlur}></Select>
                            {touched.type && errors.type && <div className="error">{errors.type}</div>}
                        </div>
                        <div style={styleInput}>
                            <Select label='Coin' name="coin" options={optionsCoin} value={values.coin} onChange={handleChange} onBlur={handleBlur}></Select>
                            {touched.coin && errors.coin && <div className="error">{errors.coin}</div>}
                        </div>
                        <div style={styleInput}>
                            <Select label='Bank' name="bankname" options={optionsBank} value={values.bankname} onChange={handleChange} onBlur={handleBlur}></Select>
                            {touched.bankname && errors.bankname && <div className="error">{errors.bankname}</div>}
                        </div>
                        <div style={styleInput}>
                            <Input type="text" name="name" value={values.name} label="Name" onChange={handleChange} onBlur={handleBlur}/>
                            {touched.name && errors.name && <div className="error">{errors.name}</div>}
                        </div>
                        <div className="containerButtons">
                            <Buton type="submit" variant="success" styles={styleInput} text="Save"/>
                        </div>                 
                        </form>
                    )
                    }  
                    </Formik>
                </CustomCard>
                <Table cols={tableConstants(handleEdit)} data={data} bordered striped hoverable styles={styles} />
            </div>
        </>
    )
}

export default Banks
