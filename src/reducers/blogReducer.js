import blogsService from '../services/blogs'

const blogList = (state = [], action) => {
    switch (action.type) {
        case 'INIT_BLOG':
            return action.data
        case 'NEW_BLOG':
            return state.concat(action.data)
        case 'NEW_LIKE':
            const findBlog = state.map(s => s.id === action.data.id ? action.data : s)
            return findBlog
        case 'REMOVE':
            const afterRemove = state.filter(s => s.id !== action.data)
            return afterRemove
    }
    return state
}

export const initBlogList = () => {
    return async dispatch => {
        const blogs = await blogsService.getAll()
        console.log(blogs)
        dispatch({
            type: 'INIT_BLOG',
            data: blogs
        })
    }
}

export const createBlog = (newblog) => {
    return async dispatch => {
        const newB = await blogsService.create(newblog)
        dispatch({
            type: 'NEW_BLOG',
            data: newB
        })
    }
}

export const likeBlog = ({ newLike, id }) => {
    return async dispatch => {
        const res = await blogsService.put({ newLike, id })
        dispatch({
            type: 'NEW_LIKE',
            data: res
        })
    }
}
export const removeBlog = ({ id }) => {
    return async dispatch => {
        await blogsService.remove({ id })
        dispatch({
            type: 'REMOVE',
            data: id
        })
        
    }
}
export default blogList