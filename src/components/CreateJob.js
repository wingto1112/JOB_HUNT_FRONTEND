import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { addJob } from "../reducers/userReducer"
import { createjob } from "../reducers/jobReducer"
import { noticeChange } from '../reducers/noticeReducer'
import { Button, TextField, Container } from '@material-ui/core'

const CreateJob = () => {
    const [jobTitle, setJobTitle] = useState('')
    const [district, setDistrict] = useState('')
    const [company, setCompany] = useState('')
    const [salary, setSalary] = useState('')
    const [jobD, setjobD] = useState('')
    const [jobR, setjobR] = useState('')
    const dispatch = useDispatch()

    const handleCreate = (e) => {
        e.preventDefault()
        dispatch(addJob({ jobTitle, district, company, salary, jobD, jobR }))
        setJobTitle('')
        setDistrict('')
        setCompany('')
        setSalary('')
        setjobD('')
        setjobR('')
        dispatch(noticeChange('New Job Created!'))
    }
    return (
        <Container fixed>
            <form style={{ marginBottom: 10 }} onSubmit={handleCreate}>
                <div style={{ marginTop: 10 }}>
                    <div style={{ float: "left" }}>
                        <TextField
                            label="Job Title"
                            variant="outlined"
                            id='title'
                            type="text"
                            value={jobTitle}
                            name="Title"
                            onChange={({ target }) => setJobTitle(target.value)}
                        />
                        <div style={{ marginTop: 10 }}>
                            <TextField
                                label="Company"
                                variant="outlined"
                                id='company'
                                type="text"
                                value={company}
                                name="Company"
                                onChange={({ target }) => setCompany(target.value)}
                            />
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <TextField
                                label="District"
                                variant="outlined"
                                id='district'
                                type="text"
                                value={district}
                                name="district"
                                onChange={({ target }) => setDistrict(target.value)}
                            />
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <TextField
                                label="Salary"
                                variant="outlined"
                                id='salary'
                                type="text"
                                value={salary}
                                name="salary"
                                onChange={({ target }) => setSalary(target.value)}
                            />
                        </div>
                    </div>
                    <div style={{ float: "left", marginLeft: 10 }}>
                        <TextField
                            label="Job Description"
                            variant="outlined"
                            id='jobD'
                            type="text"
                            value={jobD}
                            name="jobD"
                            multiline
                            rows={5}
                            style={{width: 300}}
                            onChange={({ target }) => setjobD(target.value)}
                        />
                        <div style={{ marginTop: 10 }}>
                            <TextField
                                label="Job Requirement"
                                variant="outlined"
                                id='jobR'
                                type="text"
                                value={jobR}
                                name="jobR"
                                multiline
                                rows={5}
                                style={{width: 300}}
                                onChange={({ target }) => setjobR(target.value)}
                            />
                        </div>
                        <div style={{ float:"right", marginTop:20 }}>
                        <Button variant="contained" color="primary" id="create" type="submit">create</Button>
                    </div>
                    </div>
                </div>
            </form>
        </Container>
    )
}

export default CreateJob
