import axios from  'axios'
import Header from '../components/Header'

const http = axios.create({
    
    baseURL: 'http://localhost:4010',
    headers: {
        authorization: 'Bearer 123'
    }
})

export default http