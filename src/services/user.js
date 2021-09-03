import axios from "axios"
const baseurl = '/api/users'

const getAll = async () => {
    const res = await axios.get(baseurl)
    return res.data
}

export default { getAll }