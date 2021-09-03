import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { noticeChange } from '../reducers/noticeReducer'
import { login } from '../reducers/userReducer'
import { TextField, Button, Container } from '@material-ui/core'
import { Link, useHistory } from "react-router-dom"


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(s => s.user)
  const history = useHistory()

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(login({ username, password }))
      .catch((e)=>dispatch(noticeChange('Wrong username or password')))
    setUsername('')
    setPassword('')
  }
  user ? history.push('/') : ''
  user ? dispatch(noticeChange(`${user.username} logged in`)) : ''
  return (
    <Container>
    <form onSubmit={handleLogin}>
      <div style={{ marginBottom: 10 }}>
        <TextField
          id='username'
          label="Username"
          variant="outlined"
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <TextField
          id='password'
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          name="Passqord"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <Button
        id="login-Button"
        type="submit"
        variant="outlined"
        color="primary"
        style={{ marginRight: 5, width: 99 }}
      >Login
      </Button>
      <Button
        id="Create-Button"
        variant="outlined"
        color="primary"
        component={Link} to="/register"
      >Register
    </Button>     
    </form>
    </Container>
  )
}
export default Login