import React, { useEffect, useRef, useState } from 'react'
import Blog from './components/Blog'
import Container from '@material-ui/core/Container'
import { AppBar, Button, Toolbar, Paper } from '@material-ui/core'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Login from './components/Login'
import CreateBlogForm from './components/CreateBlog'
import Header from './components/Header'
import Notifi from './components/Notification'
import Employer from './components/Employer'
import Togglable from './components/Togglable'
import UserView from './components/UserView'
import { User } from './components/User'
import BlogList from './components/BlogList'
import JobList from './components/jobList'
import AllJobDisplay from './components/AllJobDisplay'
import { Register } from './components/Register'

import { useSelector, useDispatch } from 'react-redux'
import { initBlogList } from './reducers/blogReducer'
import { anyUser, logoutUser } from './reducers/userReducer'
import { userList } from './reducers/userViewReducer'
import { initJobList } from './reducers/jobReducer'
import { initEmployer } from './reducers/employerReducer'

const App = () => {
  const user = useSelector(s => s.user)
  const userListState = useSelector(s => s.userView)
  const blogCreateRef = useRef()
  const blog = useSelector(s => s.blogs.sort((a, b) => b.likes - a.likes))
  const job = useSelector(s => s.jobs)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initJobList())
  }, [user])

  useEffect(() => {
    dispatch(initEmployer())
  }, [])

  useEffect(() => {
    dispatch(anyUser())
  }, [])

  useEffect(() => {
    dispatch(userList())
  }, [blog])



  return (
    
    <Container maxWidth="lg" >
      <Paper elevation={3} style={{height: 1080}}>
      <Router>
        <div>
          <Header />
        </div>
        <div><Notifi /></div>
        <Switch>
          <Route path="/blogs/:id">
            <Blog blog={blog} />
          </Route>
          <Route path="/users/:id">
            <User userState={userListState} />
          </Route>
          <Route path="/login">
            <div style={{ marginTop: 20 }}>
              <Login /></div>
          </Route>
          <Route path="/users">
            <UserView />
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/employer">
            <Employer />
          </Route>
          <Route path="/">
            <AllJobDisplay/>
          </Route>
        </Switch>
      </Router>
      </Paper>
    </Container>
    
  )
}

export default App