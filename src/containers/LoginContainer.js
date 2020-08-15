import React, { useReducer } from "react";
import LoginComponent from "../components/LoginComponent";
import * as yup from 'yup';
import apiHelper from "../api/apiHelper"
import loginReducer from '../reducers/loginReducer'

const LoginContainer = () => {
  const initialState = { username: '', password:'', usernameError: null, passwordError: null};
  const [state, dispatch] = useReducer(loginReducer, initialState)

  let schema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const validateData = () => {
    const {username, password} = state
    schema.validate({ username, password }, { abortEarly: false })
    .then(() => {
      apiHelper('post', 'https://api.taiga.io/api/v1/auth', {username, password, type: 'normal'}).then((response) => {
        console.log(response)
      }).catch(error => {
        console.log("Login Failed")
      })
    })
    .catch((err) => {
      console.log(err)
      err.inner.forEach((ele) => {
        if (ele.path === 'username') dispatch({type: "setUsernameError", playload: ele.message});
        if (ele.path === 'password') dispatch({type:"setPasswordError", playload: ele.message});
      });
    });
  };

  return (
    <LoginComponent state={state} dispatch={dispatch}
      validateData={validateData} />
  );
}

export default LoginContainer;