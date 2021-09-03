import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, Container, Button } from '@material-ui/core'
import JobHistoryDisplay from './JobHistoryDisplay'
import JobSpecific from './JobSpecific'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const AllJobDisplay = () => {
    const jobs = useSelector(state => state.jobs)
    const [open, setOpen] = useState(false);
    //let find
    const [job, setJob] = useState(null)

    const handleClickOpen = (id) => {
        const find = jobs.filter(job => job.id === id)
        setJob(find[0])
        setOpen(true);
        console.log(job)
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container>
            <div style={{ overflowY: "scroll", maxHeight: "800px", marginTop: 20 }}>
                <Grid container spacing={1}>
                    {jobs
                        .map(job =>
                            <Grid item xs={3} key={job.id}>
                                <div onClick={() => handleClickOpen(job.id)} ><JobHistoryDisplay j={job} /></div>
                            </Grid>

                        )}
                </Grid>
                {!job ? '' :
                    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                        <DialogTitle id="simple-dialog-title">{job.jobTitle}</DialogTitle>
                        <JobSpecific j={job} />
                    </Dialog>}
            </div>

        </Container>
    )
}
export default AllJobDisplay
