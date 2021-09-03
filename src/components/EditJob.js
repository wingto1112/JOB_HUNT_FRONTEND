import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { editJob } from "../reducers/userReducer"
import { noticeChange } from '../reducers/noticeReducer'
import { Button, TextField, Container, Card, CardContent, CardActions } from '@material-ui/core'

export const EditJob = ({ job, setShowEdit }) => {
    const [jobTitle, setJobTitle] = useState(job.jobTitle)
    const [district, setDistrict] = useState(job.district)
    const [company, setCompany] = useState(job.company)
    const [salary, setSalary] = useState(job.salary)
    const [jobD, setjobD] = useState(job.jobDescription)
    const [jobR, setjobR] = useState(job.jobRequirement)
    const dispatch = useDispatch()
    const handleEdit = (e) => {
        e.preventDefault()
        const id = job.id
        const edit = { jobTitle, district, company, salary, jobD, jobR }
        dispatch(editJob({ id, edit }))
        dispatch(noticeChange('Job Updated!'))
        setShowEdit(false)
    }
    const handleCancel = () => {
        setShowEdit(false)
    }
    return (
        <Container fixed>
            <form style={{ marginBottom: 10 }} onSubmit={handleEdit}>
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
                            style={{ width: 300 }}
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
                                style={{ width: 300 }}
                                onChange={({ target }) => setjobR(target.value)}
                            />
                        </div>
                        <div style={{ float: "right", marginTop: 20 }}>
                            <Button color="primary" id="edit" type="submit">Save</Button>
                            <Button color="primary" id="edit" onClick={handleCancel}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </form>
        </Container>
    )
}
