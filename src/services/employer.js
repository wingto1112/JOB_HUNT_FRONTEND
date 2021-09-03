import axios from 'axios'
const baseUrl = '/api/employers'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const employer = async newEmployer => {
  const res = await axios.post(baseUrl, newEmployer)
  return res.data
}
const getEmployer = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}
const getEmployerById = async ({ id }) => {
  const res = await axios.get(`${baseUrl}/${id}`)
  return res.data
}
const updateEmployer = async ({ newUpdate, id, token }) => {
  const config = {
    headers: { Authorization: `bearer ${token}` },
  }
  const res = await axios.put(`${baseUrl}/${id}`, newUpdate, config)
  return res.data
}

export default { employer, getEmployer, getEmployerById, updateEmployer }