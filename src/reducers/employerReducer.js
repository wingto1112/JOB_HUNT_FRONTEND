import employerService from '../services/employer'

const employerList = (state = [], action) => {
  switch(action.type) {
      case 'INIT_EM':
          return action.data
  }
  return state
}
export const initEmployer = () => {
    return async dispatch => {
        const all = await employerService.getEmployer()
        dispatch({
            type: 'INIT_EM',
            data: all
        })
    }
}
export default employerList