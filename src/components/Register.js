import React, { useState } from "react"
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { Button, TextField, Container } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import InputAdornment from '@material-ui/core/InputAdornment'
import seekerService from '../services/seeker'
import employerService from '../services/employer'
import { useHistory } from "react-router"
import { useDispatch } from "react-redux"
import { noticeChange } from "../reducers/noticeReducer"
import { initEmployer } from "../reducers/employerReducer"

export const Register = () => {
    const [type, setType] = useState('')
    const [username, setUsername] = useState('')
    const [pw, setPw] = useState('')
    const [fullName, setFullName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()
    const handleReg = async (e) => {
        e.preventDefault()
        if (type === 'seeker'){
        const newSeeker = { username: username, password: pw, fullName: fullName, type:type }
        try {
            await seekerService.seeker(newSeeker)
            dispatch(noticeChange('Register success'))
            setFullName('')
            setPw('')
            setUsername('')
            setType('')
            history.push('/login')
        }
        catch (e) { 
            dispatch(noticeChange(e.response.data.error)) 
            setPw('')
        }
        } else if (type === 'employer'){
            const newEmployer = {username: username, password: pw, companyName: companyName, type:type}
            try {
                await employerService.employer(newEmployer)
                dispatch(noticeChange('Register success'))
                dispatch(initEmployer())
                setCompanyName('')
                setPw('')
                setUsername('')
                setType('')
                history.push('/login')
            }
            catch (e) { 
                dispatch(noticeChange(e.response.data.error)) 
                setPw('')
            }
        } else {
        dispatch(noticeChange('who are you?'))
        }
    }
    return (
        <Container>
            <form style={{ marginTop: 10 }} onSubmit={handleReg}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">You are..</FormLabel>
                    <RadioGroup aria-label="type" name="type1" value={type} onChange={(e) => setType(e.target.value)}>
                        <FormControlLabel value="seeker" control={<Radio />} label="Job Seeker" />
                        <FormControlLabel value="employer" control={<Radio />} label="Employer" />
                    </RadioGroup>
                </FormControl>
                <div style={{ marginTop: 10, width:180 }}>
                    <TextField
                        label="Username"
                        id='username'
                        type="text"
                        value={username}
                        name="UserName"
                        onChange={(e) => setUsername(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>
                <div style={{ marginTop: 10 }}>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                    />
                </div>
                <div style={{ marginTop: 10 }} style={{ display: type ? '' : 'none' }}>
                    {type === 'seeker' ?
                        <TextField
                            label="Full Name"
                            id='fullname'
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        /> :
                        <TextField
                            label="Company Name"
                            id='companyname'
                            type="text"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                        />}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button variant="contained" color="primary" id="create" type="submit">register</Button>
                </div>
            </form>
        </Container>
    )
}
