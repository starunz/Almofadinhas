import axios from "axios";

const api = axios.create({ baseURL: process.env.REACT_APP_API_SERVER})

const postDonation = (body) => {
    const promise = api.post('/donation', body);

    return promise;
}

export {
    postDonation,
}