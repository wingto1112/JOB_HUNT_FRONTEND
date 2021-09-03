import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { jobImage } from '../reducers/jobReducer'
import { Card, CardContent, Container, Typography, Box, CardActions, Button, CardMedia } from '@material-ui/core'
import Moment from 'react-moment'
import { Link } from "react-router-dom"
import ImageService from '../services/image'

const JobSpecific = ({ j }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(jobImage(j.employer.id))
      }, [])

    const anyUser = useSelector(state => state.user)
    console.log(anyUser)

    return (
        <Box>
            <Card variant="outlined"
                style={{
                    backgroundColor: "transparent",
                    minWidth: 600, maxWidth: 800
                }}>
                <CardContent>
                    
                        <CardMedia
                            component="img"
                            alt="Company Logo"
                            height="140"
                            image={`http://127.0.0.1:8887/${j.employer.photo}`}
                            title="Company Logo"
                        />
                        : 
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
                    {anyUser.type === 'seeker' ?
                        <Button size="medium" color="primary" component={Link} to={!anyUser ? "/login" : "/employer"}>{!anyUser ? 'login to APPLY' : 'APPLY'}</Button>
                        : ''}
                </CardActions>
            </Card>
        </Box>
    )
}
export default JobSpecific
