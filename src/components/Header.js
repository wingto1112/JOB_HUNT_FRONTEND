import React, { useState } from 'react'
import { AppBar, Button, Toolbar, Menu, MenuItem } from '@material-ui/core'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../reducers/userReducer'
import { useHistory } from 'react-router'

const Header = () => {
    const user = useSelector(s => s.user)
    const dispatch = useDispatch()
    const history = useHistory()
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" component={Link} to="/">JOBS</Button>
                    <Button color="inherit" component={Link} to="/users">Employers</Button>
                    {
                        user ? 
                            <>
                            <Button color="inherit" component={Link} to="/employer">{`${user.username}`}</Button>
                            <Button color="inherit" onClick={() => {
                                dispatch(logoutUser())
                                history.push('/')
                            }
                            }>
                                logout
                            </Button>
                            </>
                            : <Button color="inherit" component={Link} to="/login">Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
