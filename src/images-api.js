import axios from 'axios';
export async function fetchPhotosNature() {
    const response = await axios.get("https://api.unsplash.com/photos/?client_id=GeFITrV8DFeWscaKxGsNnTSljHaWCimvtyFeqkLzvgI");
return response.data.hits;
}

// axios.baseUrl = "https://api.unsplash.com/photos/?client_id=GeFITrV8DFeWscaKxGsNnTSljHaWCimvtyFeqkLzvgI";
     // const response = await axios.get(`/search?query=${nature}`);