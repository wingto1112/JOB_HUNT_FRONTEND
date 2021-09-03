import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { likeBlog, removeBlog } from '../reducers/blogReducer'
import { useParams } from 'react-router'
import BlogService from '../services/blogs'
import { Button, IconButton } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
const Blog = ({ blog }) => {
  //const [blogVisible, setBlogVisible] = useState(false)
  //const hideWhenVisible = { display: blogVisible ? 'none' : '' }
  //const showWhenVisible = { display: blogVisible ? '' : 'none' }
  const [comment, setComment] = useState('')
  const [commentList, setCommentList] = useState([])
  const dipatch = useDispatch()
  /*const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }*/
  const blogID = useParams().id
  const blogFind = blog.find(s => s.id === blogID)
  //blogFind.comments.map(c => setCommentList(c.comment))
  useEffect(()=>{
  const list = blogFind.comments
  setCommentList(commentList.concat(list))
  console.log(list)
  },[])
  
  console.log(commentList)
  const newLike = () => {
    let newLike = { likes: blogFind.likes + 1 }
    let id = blogFind.id
    dipatch(likeBlog({ newLike, id }))
  }

  const remove = () => {
    let id = blogFind.id
    window.confirm(`Remove blog ${blogFind.title} by ${blogFind.author}`) ?
      dipatch(removeBlog({ id })) : ''
  }
  const addComment = async (e) => {
    e.preventDefault()
    let newComment = { comment: comment }
    let id = blogFind.id
    const res = await BlogService.comment({ newComment, id })
    console.log(res)
    let addToState = {...newComment, id:res.id}
    setCommentList(commentList.concat(addToState))
    setComment('')
  }
  if (!blogFind) {
    return null
  }
  return (
    <div>
      <h2>{blogFind.title}</h2>
      <div> {blogFind.url}</div>
      <div> {blogFind.likes} likes{' '}
      <IconButton 
        variant="outlined"
        color="secondary" 
        id="like" 
        onClick={newLike}
      ><ThumbUpIcon/>
      </IconButton>
      </div>
      <div> added by {blogFind.author}</div>
      <button id="remove" onClick={remove} >remove</button>
      <h3>Comments</h3>
      <form onSubmit={addComment}>
        <input
          id="comment"
          type="text"
          value={comment}
          name="Comment"
          onChange={({ target }) => setComment(target.value)}
        />{' '}
        <button type="submit">Add comment</button>
      </form>
      <p>
      {commentList.map(c => <li key={c.id}>{c.comment}</li>)}
      </p>
    </div>
  )
}

export default Blog