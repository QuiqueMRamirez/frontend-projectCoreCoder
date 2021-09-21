import React from 'react'
import NavMenu from './Components/NavMenu/NavMenu';
import Table from './Components/Table/Table';
import CustomCard from "./Components/Card/Card";
import Input from "./Components/Input/Input";
import Buton from "./Components/Button/Button";
import Select from "./Components/Select/Select";

import {Formik} from 'formik';
import * as yup from "yup";

import './ExpenseIncome.css';

const incomeExpenseSchema = yup.object().shape({
  name: yup.string().required(),
  type: yup.string().required(),
});

export const tableConstants = (handleEdit) => {
    return [
      {
        title: 'ID',
        render: rowData => {
          return <span>{rowData.id}</span>;
        },
      },
      {
        title: 'Name',
        render: rowData => {
          return <span>{rowData.name}</span>;
        },
      },
      {
        title: 'Type',
        render: rowData => {
          return <span>{rowData.type}</span>;
        },
      },
      {
        title: 'Create Date',
        render: rowData => {
          return <span>{rowData.date}</span>;
        },
      },
      {
        title: 'Action',
        render: rowData => {
          return <button className='btn btn-warning' onClick={handleEdit(rowData)}>Edit</button>
        },
      },
    ];
  };

  export const data = [
    {
      "id": 1,
      "name": "Income1",
      "type": "Income",
      "date": "29-apr-2021",
    },
    {
      "id": 2,
      "name": "Expense1",
      "type": "Expense",
      "date": "29-apr-2021",
    },
    {
      "id": 3,
      "name": "Expense2",
      "type": "Expense",
      "date": "29-apr-2021",
    },
    {
      "id": 4,
      "name": "Income3",
      "type": "Income",
      "date": "29-apr-2021",
    },
    {
      "id": 5,
      "name": "Income4",
      "type": "Income",
      "date": "29-apr-2021",
    }
  ]

  const styles = {
    'margin': 'auto',
    'width': '50% !important',
    'marginLeft': '20px',
    'marginRight': '20px'
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

const initialValues = {
  name:'',
  type:''
}

const styleInput = {
  'flex': '1 1 45%',
  'margin': 'auto',
  'marginTop': '10px',
  'marginLeft': '5px',
  'marginRight': '5px'
}

  
const ExpenseIncome = () => {
    const handleEdit = (item) => () => {
        // write your logic
        alert(JSON.stringify(item))
      }
    
    const onSubmit = (valores,{resetForm}) => {
      console.log(valores);
      resetForm();
    }

    let optionsType = [
      { key: 1, value:'Inc', label: 'Income'},
      { key: 2, value:'Exp', label: 'Expense'}
  ]

    return (
        <>
        <div className="containerIE">
            <NavMenu />
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

export default ExpenseIncome
