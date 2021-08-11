import axios from 'axios';

const KEY = 'AIzaSyD7W54Ns7ng4R1QFAzxf9jpc5H_YLjfhDI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})