import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

const MyAccount = ({ setShowEditAcc }) => {
    const [state, setstate] = useState('')
    const user = useSelector(s => s.user)

    const handleEdit = () => {
        setShowEditAcc(true)
    }

    return (
        <Card style={{ minWidth: 400 }}>
            {user.photo? 
            <CardMedia
                component="img"
                alt="Company Logo"
                height="140"
                image={`http://127.0.0.1:8887/${user.photo.photo}`}
                title="Company Logo"
            /> :''}
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {user.companyName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Web Site:
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                    <a href={user.companyWebSite}>{user.companyWebSite}</a>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Contact:
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                    {user.contact}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    About {user.companyName}:
                </Typography>
                <Typography variant="body1" color="textPrimary" component="p">
                    {user.companyProfile}
                </Typography>
            </CardContent>
            <CardActions>
                <Button id="cancel" color="primary" style={{ float: "right" }} onClick={handleEdit}>EDIT</Button>
            </CardActions>
        </Card>
    )
}

export default MyAccount
