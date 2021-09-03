import axios from 'axios'
const baseUrl = '/api/seekers'

const seeker = async newSeeker => {
  const res = await axios.post(baseUrl, newSeeker)
  return res.data
}

export default { seeker }