const noticeM = (state = null, action) => {
    switch (action.type) {
        case 'SET_NOTICE':
            return action.data
        default:
            return state
    }
}
let timeout
export const noticeChange = message => {
    return async dispatch => {
      dispatch({
        type: 'SET_NOTICE',
        data: message
      })
      clearTimeout(timeout)
      timeout = setTimeout(()=>
      dispatch({
          type: 'SET_NOTICE',
          data: null
      }), 5000
      )
    }
}

export default noticeM