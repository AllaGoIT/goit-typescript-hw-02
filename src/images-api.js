import axios from 'axios';
export  const fetchPhotosNature = async ()=>{
    axios.defaults.baseURL = "https://api.unsplash.com/photos/?client_id=GeFITrV8DFeWscaKxGsNnTSljHaWCimvtyFeqkLzvgI";
    const response = await axios.get(`/search?collections/:page/photos`);
return response.data.hits;
}

// axios.baseUrl = "https://api.unsplash.com/photos/?client_id=GeFITrV8DFeWscaKxGsNnTSljHaWCimvtyFeqkLzvgI";
     // const response = await axios.get(`/search?query=${nature}`);