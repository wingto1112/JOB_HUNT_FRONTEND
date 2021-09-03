import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles';
import CreateJob from './CreateJob';
import { EditJob } from './EditJob';
import { MenuItem, MenuList, Button, Container, Box } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import JobHistoryDisplay from './JobHistoryDisplay';
import employerService from '../services/employer'
import { useSelector } from 'react-redux';
import { JobModifiy } from './JobModifiy';
import MyAccount from './MyAccount';
import EditMyAccount from './EditMyAccount';

const Employer = () => {
    const user = useSelector(i => i.user)
    //const find = useSelector(i => i.jobs.filter(w => w.employer === user.id))
    const [state, setstate] = useState(user.jobs[0])
    const [showEdit, setShowEdit] = useState(false)
    const [showEditAcc, setShowEditAcc] = useState(false)
    /*const theOne = (id) => {
        setstate(find.filter(i => i.id === id))
    }*/
    console.log(user)

    useEffect(() => {
        setstate(user.jobs[0])
    }, [user])

    return (
        <Container >
            <div style={{ display: "flex", marginTop: 10, maxHeight: "80%" }}>
                <Router>
                    <Paper elevation={3} style={{ height: 400 }} >
                        <MenuList style={{ height: 400 }}>
                            <MenuItem><Button fullWidth variant="outlined" size="small"
                                component={Link} to="/"
                            >My account</Button></MenuItem>
                            <MenuItem>
                                <Button fullWidth variant="outlined" size="small"
                                    component={Link} to="/create"
                                >Create Job</Button></MenuItem>
                            <MenuItem style={{ display: user.jobs.length > 0 ? '' : "none" }}><Button fullWidth variant="outlined" size="small"
                                component={Link} to="/history"
                            >HISTORY</Button></MenuItem>
                        </MenuList>
                    </Paper>
                    <Switch>
                        <Route path='/history'>
                            <div style={{
                                overflowY: "scroll",
                                //maxWidth: "100%",
                                maxHeight: "600px",
                            }}>
                                {user.jobs
                                    .map(j => <div key={j.id} onClick={() => setstate(j)}><JobHistoryDisplay j={j} /></div>)}
                            </div>
                            {showEdit ?
                                <div><EditJob job={state} setShowEdit={setShowEdit} /></div>
                                : <div><JobModifiy j={state} setShowEdit={setShowEdit} /></div>}
                        </Route>
                        <Route path='/create'>
                            <CreateJob />
                        </Route>

                        <Route path='/'>
                            {showEditAcc? <EditMyAccount setShowEditAcc={setShowEditAcc}/>: <MyAccount setShowEditAcc={setShowEditAcc}/>}
                        </Route>
                    </Switch>
                </Router>
            </div>
        </Container>
    )
}
export default Employer