import axios from 'axios';
    const BASE_URL = "https://api.unsplash.com/";
    axios.defaults.baseURL = BASE_URL;
    export const PER_PAGE = 12;
    export const fetchPhotosNature = async (query,page) => {

   
    const {data} = await axios.get(`search/photos?client_id=GeFITrV8DFeWscaKxGsNnTSljHaWCimvtyFeqkLzvgI&query=${query}&page=${page}&per_page=${PER_PAGE}&orientation=landscape`);
    return data;
}
