import Axios from 'axios'

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default axios

const axiosBlog = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_WORDPRESS_URL,
})

export { axiosBlog }
