import React, { useState } from 'react'

const Blog = ({ blog, handleLike, handleRemove }) => {
  const [blogVisible, setBlogVisible] = useState(false)
  const hideWhenVisible = { display: blogVisible ? 'none' : '' }
  const showWhenVisible = { display: blogVisible ? '' : 'none' }
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const newLike = async () => {
    let newLike = { likes: blog.likes + 1 }
    let id = blog.id
    handleLike({ newLike, id })
  }

  const remove = async () => {
    let id = blog.id
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}`)) {
      handleRemove({ id })
    }
  }
  return (
    <div style={blogStyle} className='blogTest'>
      <div style={hideWhenVisible} >
        {blog.title} {blog.author} <button id="view" onClick={() => setBlogVisible(true)}>view</button>
      </div>
      <div style={showWhenVisible} className='show'>
        <div> {blog.title} <button onClick={() => setBlogVisible(false)}>hide</button></div>
        <div> {blog.url}</div>
        <div> likes {blog.likes} <button id="like" onClick={newLike}>like</button></div>
        <div> {blog.author}</div>
        <button id="remove" onClick={remove}>remove</button>
      </div>
    </div>
  )
}

export default Blog