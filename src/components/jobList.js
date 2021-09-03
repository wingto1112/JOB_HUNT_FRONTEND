import React from 'react'
import { Link } from 'react-router-dom'

const JobList = ({job}) => {
    const jobStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
      }
    return (
        <div style={jobStyle}>
            <Link to={`/jobs/${job.id}`}>{job.jobTitle}</Link>
        </div>
    )
}

export default JobList
