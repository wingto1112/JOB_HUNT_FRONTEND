import { createStore, combineReducers, applyMiddleware } from 'redux'
import noticeM from './reducers/noticeReducer'
import blogList from './reducers/blogReducer'
import jobList from './reducers/jobReducer'
import employerList from './reducers/employerReducer'
import userLogin from './reducers/userReducer'
import userView from './reducers/userViewReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({ 
  notice: noticeM,
  blogs: blogList,
  user: userLogin,
  userView: userView,
  jobs: jobList,
  employer: employerList
 })
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
  ))

export default store