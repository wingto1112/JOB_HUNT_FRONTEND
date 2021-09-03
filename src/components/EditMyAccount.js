import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addPhoto, editProfile } from '../reducers/userReducer'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton, TextField } from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import SaveIcon from '@material-ui/icons/Save';

const EditMyAccount = ({setShowEditAcc}) => {
    const user = useSelector(s => s.user)

    const [state, setstate] = useState('')
    const [website, setwebsite] = useState(user.companyWebSite)
    const [profile, setprofile] = useState(user.companyProfile)
    const [contact, setcontact] = useState(user.contact)
    const [name, setname] = useState(user.companyName)

    const dispatch = useDispatch()

    const handlePhoto = (e) => {
        setstate({ photo: e.target.files[0] })
    }
    const handleSubmitPhoto = async (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('photo', state.photo)
        formData.append('id', user.id)
        dispatch(addPhoto(formData))
    }

    const handleSave = (e) => {
        e.preventDefault()
        const token = user.token
        const newUpdate = {
            companyName: name,
            companyWebSite: website,
            contact: contact,
            companyProfile: profile,
        }
        const id = user.id
        dispatch(editProfile({newUpdate, id, token}))
        setShowEditAcc(false)
    }

    const handleCancel = () => {
        setShowEditAcc(false)
    }

    return (
        <Card style={{ minWidth: 600, marginLeft: 10 }}>
            {user.photo?
            <CardMedia style={{ height: 140 }}
                image={`http://127.0.0.1:8887/${user.photo.photo}`}
            />:''}
            <form onSubmit={handleSubmitPhoto} encType='multipart/form-data' style={{ float: "right" }}>
                <input
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    name="photo"
                    id="photoInput"
                    onChange={handlePhoto}
                    style={{ display: 'none' }}
                />
                <label htmlFor="photoInput">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <PhotoCamera />
                    </IconButton>
                </label>
                <button id="upload" style={{ display: 'none' }} type="submit">Submit</button>
                <label htmlFor="upload">
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <SaveIcon />
                    </IconButton>
                </label>
            </form>

            <form style={{ marginTop: 50 }} onSubmit={handleSave}>
                <div>
                    <div style={{ float: "left" }}>
                        <TextField
                            style={{ marginTop: 10 }}
                            label="Company Name"
                            variant="outlined"
                            id='name'
                            type="text"
                            value={name}
                            name="Name"
                            onChange={({ target }) => setname(target.value)}
                        />
                        <div>
                            <TextField
                                style={{ marginTop: 10 }}
                                label="Company Website"
                                variant="outlined"
                                id='web'
                                type="text"
                                value={website}
                                name="Web"
                                
                                onChange={({ target }) => setwebsite(target.value)}
                            />
                        </div>
                        <div>
                            <TextField
                                style={{ marginTop: 10 }}
                                label="Contact"
                                variant="outlined"
                                id='contact'
                                type="text"
                                value={contact}
                                name="Contact"
                                onChange={({ target }) => setcontact(target.value)}
                            />
                        </div>
                    </div>
                    <div style={{ float: "left", marginTop: 10, marginLeft: 10, width: "60%" }}>
                        <TextField
                            label="Profile"
                            variant="outlined"
                            id='profile'
                            type="text"
                            value={profile}
                            name="Profile"
                            multiline
                            rows={8}
                            style={{ width: "100%", float: "right" }}
                            onChange={({ target }) => setprofile(target.value)}
                        />
                    </div>
                    <Button id="cancel" color="secondary" style={{ float: "right" }} onClick={handleCancel}>cancel</Button>
                    <Button id="save" color="primary" style={{ float: "right" }} type="submit">Save</Button>
                </div>
            </form>

        </Card>
    )
}

export default EditMyAccount

