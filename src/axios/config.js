import axios from 'axios';

const linkFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default linkFetch;