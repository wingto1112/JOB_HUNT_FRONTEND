import loadUser from '../services/user'

const userView = (state = [], action) => {
    switch (action.type){
        case 'LOAD':
            return action.data
    }
    return state
}
export const userList = () => {
    return async dispatch => {
        const list = await loadUser.getAll()
        dispatch({
            type: 'LOAD',
            data: list
        })
    }
}

export default userView