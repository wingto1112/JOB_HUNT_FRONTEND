import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removejob } from '../reducers/userReducer'
import { Card, CardContent, Container, Typography, Box, CardActions, Button } from '@material-ui/core'
import Moment from 'react-moment'
import { Redirect } from "react-router-dom"
import { EditJob } from './EditJob'
import { Link } from 'react-router-dom'

export const JobModifiy = ({ j, setShowEdit }) => {
    if (!j){
        return(
            <Redirect to="/"/>
        )
    }

    const id = j.id
    const dispatch = useDispatch()
    const handleRemove = () =>{
      console.log(j)
      dispatch(removejob({id}))
    }
    const handleEdit = () => {
     setShowEdit(true)
    }
    
    return (
        <div>
            <Box>
                <Card variant="outlined"
                    style={{
                        backgroundColor: "transparent",
                        minWidth: 600, maxWidth: 800
                    }}>
                    <CardContent>
                    <Typography variant="body2" color="textPrimary" >
                            Job Title:
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" >
                            {j.jobTitle}
                        </Typography>
                        <Typography variant="body2" color="textPrimary" >
                            Company:
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" >
                            {j.company}
                        </Typography>
                        <Typography variant="body2" color="textPrimary" >
                            District:
                        </Typography>
                        <Typography variant="body1" color="textSecondary" >
                            {j.district}
                        </Typography>
                        <Typography variant="body2" color="textPrimary" >
                            Salary:
                        </Typography>
                        <Typography variant="body1" color="textSecondary" >
                            ${j.salary}
                        </Typography>
                        <Typography variant="body2" color="textPrimary" >
                            Job Description:
                        </Typography>
                        <Typography variant="body1" color="textSecondary" >
                            {j.jobDescription}
                        </Typography>
                        <Typography variant="body2" color="textPrimary" >
                            Job Requirement:
                        </Typography>
                        <Typography variant="body1" color="textSecondary" >
                            {j.jobRequirement}
                        </Typography>
                        <Typography variant="caption" color="textSecondary" >
                            <Moment format="YYYY/MM/DD">
                                {j.created_at}
                            </Moment>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium" color="primary" onClick={handleRemove}>END</Button>
                        <Button size="medium" color="primary" onClick={handleEdit}>EDIT</Button>
                    </CardActions>
                </Card>
            </Box>
        </div>
    )
}
