import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './Login.css';

import Input from "./Components/Input/Input";
import Buton from "./Components/Button/Button";
import CustomCard from "./Components/Card/Card";

const loginSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().min(8).max(32).required()
});

const styleButtons = {
  'flex': '1 1 45%',
  'margin': 'auto',
  'marginTop': '10px',
  'marginLeft': '5px',
  'marginRight': '5px'
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
  'boxShadow': '3px 4px 5px 0px rgba(0, 0, 0, 0.38)'
}

const Login = () => {
    const { control, handleSubmit, reset, formState: {errors} } = useForm({
        resolver: yupResolver(loginSchema),
        defaultValues: {
          username: "",
          password: "",
        },
      });
      const onSubmit = (data) => {
        console.log(data);
        reset();
      }
    return (
        <>
    <div className="containerIndex">
      <CustomCard headerText="Login" headerStyle={styleHeaderCard} cardStyle={styleCard}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input className="mb-3" type="text" name="username" label="Enter your username" control={control}/>
        <p style={{color: 'red'}}>{errors.username?.message}</p>
        <Input type="password" name="password" label="Enter your password" control={control}/>
        <p style={{color: 'red'}}>{errors.password?.message}</p>
        <div className="containerButtons">
          <Buton type="submit" variant="primary" styles={styleButtons} text="Login"/>
          <Buton variant="secondary" styles={styleButtons} text="Register"/>
        </div>
      </form>
      </CustomCard>
    </div>
    </>
    )
}

export default Login
