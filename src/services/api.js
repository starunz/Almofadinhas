import axios from "axios";

const api = axios.create({ baseURL: 'http://localhost:5000' })

const postDonation = (body) => {
    const promise = api.post('/donation', body);

    return promise;
}

export {
    postDonation,
}