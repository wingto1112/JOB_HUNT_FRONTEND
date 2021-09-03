import jobService from '../services/jobs'
import ImageService from '../services/image'

const jobList = (state = [], action) => {
    switch (action.type) {
        case 'INIT_JOBS':
            return action.data
        case 'CREATE_JOB':
            return state.concat(action.data)
        case 'REMOVE_JOB':
            const afterRemove = state.filter(s => s.id !== action.data)
            return afterRemove
        case 'EDIT_JOB':
            const edit = action.data.edit
            const newEdit = state.map(s => s.id === action.data.id? {...s, s:edit} : s)
            return newEdit
        case 'JOB_IMAGE':
            const newS = state.map(s => s.employer === action.data.id? {...s, image:action.data.photo}:s)
            return newS
        }
    return state
}

export const initJobList = () => {
    return async dispatch => {
        const jobs = await jobService.getAll()
        dispatch({
            type: 'INIT_JOBS',
            data: jobs
        })
    }
}

export const createjob = (newJob) => {
    return async dispatch => {
        const newJ = await jobService.create(newJob)
        dispatch({
            type: 'CREATE_JOB',
            data: newJ
        })
    }
}

export const removejob = ({ id }) => {
    return async dispatch => {
        await jobService.remove({ id })
        dispatch({
            type: 'REMOVE_JOB',
            data: id
        })
    }
}

export const editJob = ({ id, edit }) => {
    return async dispatch => {
        await jobService.putEdit({ id, edit })
        dispatch({
            type: 'EDIT_JOB',
            data: {id, edit}
        })
    }
}

export const jobImage = (id) => {
    return async dispatch => {
        const image = await ImageService.getImage(id)
        const photo = image[0].photo
        dispatch({
            type: 'JOB_IMAGE',
            data: {id, photo}
        })
    }
}

export default jobList
