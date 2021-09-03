const commentList = (state = [], action) => {
    switch (action.type){
        case 'LOAD':
            return state
        case 'ADD':
            return state.concat(action.data)
    }
    return state
}
export const loadComment = () => {
    
}
export default commentList