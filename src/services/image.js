import axios from 'axios'
const baseUrl = '/api/images'

const getImage = async (id) => {
  const res = await axios.get(`${baseUrl}/${id}`)
  return res.data
}

const postImage = async (data) => {
    const res = await axios.post(baseUrl, data)
    return res.data
}

export default { getImage, postImage }