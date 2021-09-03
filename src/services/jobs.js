import axios from 'axios'
const baseUrl = '/api/jobs'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

const create = async newJob => {
    const config = {
        headers: { Authorization: token },
    }
    const res = await axios.post(baseUrl, newJob, config)
    return res.data
}

const put = async ({ id }) => {
    const config = {
        headers: { Authorization: token },
    }
    const url = `/api/jobs/${id}/apply`
    const res = await axios.put(url, config)
    console.log(res.data)
    return res.data
}

const putEdit = async ({ id, edit }) => {
    const config = {
        headers: { Authorization: token },
    }
    const url = `/api/jobs/${id}`
    const res = await axios.put(url, edit, config)
    console.log(res.data)
    return res.data
}

const remove = async ({id}) => {
    const config = {
      headers: { Authorization: token },
    }
    const url = `/api/jobs/${id}`
    await axios.delete(url, config)
  }

export default { getAll, create ,setToken, remove, putEdit}