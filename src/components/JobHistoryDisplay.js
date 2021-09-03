import React, { useState } from 'react'
import Moment from 'react-moment';
import { makeStyles } from '@material-ui/core/styles'
import { Container, Card, CardActions, CardContent, Typography, Button } from '@material-ui/core'
import { useSelector } from 'react-redux'
const JobHistoryDisplay = ({ j }) => {
    //const display = jobs
    //const user = useSelector(i => i.user)
    //const find = useSelector(o => o.jobs)
    //const jobs = find.filter(w => w.employer.id === user.id)
    /*{find.filter(w => w.employer.id === user.id).map(j =>*/
    const [state, setstate] = useState(null)
  
    return (
        <div onMouseEnter={()=>setstate('Over')} onMouseLeave={()=>setstate(null)}>
            <Card variant= {state === null ? "outlined" :''}
                style={{  backgroundColor: state === null ? "transparent" : "whitesmoke" , minWidth: "200px" }} >
                
                    <CardContent>
                        <Typography variant="subtitle1" color="textPrimary" gutterBottom>
                            {j.jobTitle}
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" >
                            {j.company}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" >
                            {j.district}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" >
                            ${j.salary}
                        </Typography>
                        <Typography variant="caption" color="textSecondary" >
                            <Moment format="YYYY/MM/DD">
                                {j.created_at}
                            </Moment>
                        </Typography>
                    </CardContent>
            </Card>
        </div>
    )
}

export default JobHistoryDisplay
