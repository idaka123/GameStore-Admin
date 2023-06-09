import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components/macro'
import InputField from '~/component/template/InputField.template'
import Button from '~/component/template/Button.template'
import isEmpty from 'validator/lib/isEmpty'
import equals from 'validator/lib/equals'
import { auth } from '~/api/auth.api'
import { RegisterService } from '~/redux/auth/auth.service'
import config from '~/config'

const Register = (props) => {
  const { user, toggleForm } = props

  const { dashboard } = config.adminRoutePath
  
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const [validationMsg, setValidationMsg] = useState({})

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { 
    username,
    email,
    password,
    passwordConfirm
  } = state

 

  const handleInput = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }

 
  const validateAll = () => {
    const msg = {}

    if (isEmpty(email)) {
      msg.email = 'Please input your email address'
    }

    if (isEmpty(password)) {
      msg.password = 'Please enter your password'
    }

    if (isEmpty(passwordConfirm)) {
      msg.passwordConfirm = 'Please enter your passwordConfirm'
    }

    if (isEmpty(username)) {
      msg.username = 'Please enter your username'
    }

    if (!equals(passwordConfirm, password)) {
      msg.passwordConfirm = 'Password confirm must match'
    }

    setValidationMsg(msg)
    if (Object.keys(msg).length > 0) return false
    return true
  }

  const onSubmitRegister = async (e) => {
    e.preventDefault()
    const isValid = validateAll()
    if (!isValid) {
      return
    }
   
    const { status, data } = await RegisterService({username, email, password}, dispatch, navigate)

    const { msg } = data
    // validate response status
    switch (status) {
      case 200:
        navigate(dashboard)
        break;
      case 404:
        setValidationMsg({username : msg})
        break;
      default:
    }
  }

  return (
    <RegisterForm>
      <Logo>
        <h1>LOGO</h1>
      </Logo>

      <form onSubmit={onSubmitRegister}>
        <InputField
          type="email"
          name="email"
          placeholder={data.email}
          value={email}
          onInput={handleInput}
          errorState={validationMsg.email !== '' && validationMsg.email !== undefined  ? true : false}
          errorText={validationMsg.email}
          setError={setValidationMsg}
        />

        <InputField
          type="text"
          name="username"
          placeholder={data.username}
          value={username}
          onInput={handleInput}
          errorState={validationMsg.username !== '' && validationMsg.username !== undefined ? true : false}
          errorText={validationMsg.username}
          setError={setValidationMsg}
        />

        <InputField
          type="password"
          name="password"
          placeholder={data.password}
          value={password}
          onInput={handleInput}
          errorState={validationMsg.password !== '' && validationMsg.password !== undefined ? true : false}
          errorText={validationMsg.password}
          setError={setValidationMsg}
        />

        <InputField
          type="password"
          name="passwordConfirm"
          placeholder={data.passwordConfirm}
          value={passwordConfirm}
          onInput={handleInput}
          errorState={validationMsg.passwordConfirm !== '' && validationMsg.passwordConfirm !== undefined ? true : false}
          errorText={validationMsg.passwordConfirm}
          setError={setValidationMsg}
        />

        <Action>
          <Button title={data.button1} active={true} width="250px" />
        </Action>
      </form>
      <Action>
        <Button
          title={data.button2}
          normal={true}
          width="250px"
          onClick={toggleForm}
        />
      </Action>
    </RegisterForm>
  )
}

const data = {
  email: 'Email Address',
  password: 'Your password',
  username: 'Your username',
  passwordConfirm: 'Confirm your password',
  button1: 'Next',
  button2: 'Already have account',
}

export default Register

const Logo = styled.div``

const RegisterForm = styled.div`
  width: 50%;
  max-width: 410px;
  padding: 40px 40px 10px 40px;
`

const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
