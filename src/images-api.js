import axios from 'axios';
    const BASE_URL = "https://api.unsplash.com/search/photos?page=1&query=nature/?client_id=GeFITrV8DFeWscaKxGsNnTSljHaWCimvtyFeqkLzvgI";
    axios.defaults.baseURL = BASE_URL;
    export const PER_PAGE = 12;
    export const fetchPhotosNature = async (query = "nature", imagePage = 1) => {

    const searchParams = new URLSearchParams ({
        q: query,
        image_type: "photo",
        orientation: "landscape",
        // page: "Optional; default: 1",  
        per_page: PER_PAGE,
        page: imagePage

    })
   
    const response = await axios.get(`${BASE_URL}?${searchParams}`);
    return response.data.hits;
}
