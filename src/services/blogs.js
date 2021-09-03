import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}
const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

const create = async newBlog => {
  const config = {
    headers: { Authorization: token },
  }
  const res = await axios.post(baseUrl, newBlog, config)
  return res.data
}

const put = async ({ newLike, id }) => {
  const config = {
    headers: { Authorization: token },
  }
  const url = `/api/blogs/${id}`
  const res = await axios.put(url, newLike, config)
  console.log(res.data)
  return res.data
}

const comment = async({ newComment, id }) => {
  const config = {
    headers: { Authorization: token },
  }
  const url = `/api/blogs/${id}/comments`
  const res = await axios.post(url, newComment, config)
  return res.data
}

const remove = async ({ id }) => {
  const config = {
    headers: { Authorization: token },
  }
  const url = `/api/blogs/${id}`
  await axios.delete(url, config)
}

export default { getAll, setToken, create, put, remove, comment }