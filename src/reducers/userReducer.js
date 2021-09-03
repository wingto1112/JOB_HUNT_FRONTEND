import loginService from '../services/login'
import jobService from '../services/jobs'
import employerService from '../services/employer'
import imageService from '../services/image'


const userLogin = (state = null, action) => {
    switch (action.type) {
        case 'ANYUSER':
            return action.data
        case 'LOGIN':
            return action.data
        case 'LOGOUT':
            return null
        case 'ADD':
            const newState = { ...state, jobs: state.jobs.concat(action.data) }
            return newState
        case 'REMOVE':
            const removeState = { ...state, jobs: state.jobs.filter(a => a.id !== action.data) }
            return removeState
        case 'EDIT':
            const editState = {
                ...state,
                jobs: state.jobs
                    .map(job => job.id === action.data.id ? action.data : job)
            }
            return editState
        case 'ADD_PHOTO':
            const newS = { ...state, photo: action.data }
            return newS
        case 'UPDATE_EMP':
            const newE = {
                ...state,
                companyName: action.data.companyName,
                companyWebSite: action.data.companyWebSite,
                contact: action.data.contact,
                companyProfile: action.data.companyProfile,
            }
            return newE
    }
    return state
}

export const anyUser = () => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    const user = JSON.parse(loggedUserJSON)
    if (loggedUserJSON) {
        jobService.setToken(user.token)
        return async dispatch => {
            const id = user.id
            const employer = await employerService.getEmployerById({ id })
            user.jobs = employer.jobs
            console.log(user)
            dispatch(
                {
                    type: 'ANYUSER',
                    data: user
                }
            )
        }
    }
    return dispatch => {
        dispatch({
            type: 'ANYUSER',
            data: null
        })
    }
}
export const login = ({ username, password }) => {
    return async dispatch => {
        const res = await loginService.login({
            username, password
        })
        console.log(res)
        window.localStorage.setItem(
            'loggedBlogUser', JSON.stringify(res)
        )
        jobService.setToken(res.token)
        dispatch({
            type: 'LOGIN',
            data: res
        })
    }
}
export const logoutUser = () => {
    window.localStorage.clear()

    return dispatch => {
        dispatch(
            {
                type: 'LOGOUT',
            }
        )
    }
}
export const addJob = (newJob) => {
    return async dispatch => {
        const newJ = await jobService.create(newJob)
        dispatch({
            type: 'ADD',
            data: newJ
        })
    }
}

export const editJob = ({ id, edit }) => {
    return async dispatch => {
        const updated = await jobService.putEdit({ id, edit })
        console.log(updated)
        dispatch({
            type: 'EDIT',
            data: updated
        })
    }
}

export const removejob = ({ id }) => {
    return async dispatch => {
        await jobService.remove({ id })
        dispatch({
            type: 'REMOVE',
            data: id
        })
    }
}

export const addPhoto = (photo) => {
    return async dispatch => {
        const res = await imageService.postImage(photo)
        dispatch({
            type: 'ADD_PHOTO',
            data: res
        })
    }
}

export const editProfile = ({ newUpdate, id, token }) => {

    return async dispatch => {
        const res = await employerService.updateEmployer({ newUpdate, id, token })
        dispatch({
            type: 'UPDATE_EMP',
            data: res
        })
    }
}
export default userLogin