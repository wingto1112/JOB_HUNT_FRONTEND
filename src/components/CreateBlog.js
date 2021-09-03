import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { createBlog } from '../reducers/blogReducer'
import { noticeChange } from '../reducers/noticeReducer'
import { Button, TextField } from '@material-ui/core'


const CreateBlogForm = ({ blogCreateRef }) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const dispatch = useDispatch()

  const handleCreate = async (e) => {
    e.preventDefault()
    blogCreateRef.current.toggleVisible()
    dispatch(createBlog({ title, author, url }))
    dispatch(noticeChange(`a new blog ${title} by ${author} added`))

    setTitle('')
    setAuthor('')
    setUrl('')
  }
  return (
    <div>
      <h2>create new</h2>
      <form style={{ marginBottom: 10 }} onSubmit={handleCreate} className='form'>
        <span>
          <TextField
            label="Title"
            variant="outlined"
            id='title'
            type="text"
            value={title}
            name="Title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </span>
        <span>
          <TextField
            label="Author"
            variant="outlined"
            id='author'
            type="text"
            value={author}
            name="Author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </span>
        <span>
          <TextField
            label="URL"
            variant="outlined"
            id='url'
            type="text"
            value={url}
            name="url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </span>
        <div style={{marginTop: 10}}>
          <Button variant="contained" color="primary" id="create" type="submit">create</Button>
        </div>
      </form>

    </div>
  )
}

export default CreateBlogForm

