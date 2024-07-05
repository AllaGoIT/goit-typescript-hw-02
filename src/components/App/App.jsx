import { useState, useEffect } from 'react'
import axios from 'axios';
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMasagge/ErrorMassage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";



const App = () => { 
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            const responce = await axios.get ("https://api.unsplash.com/photos/?client_id=GeFITrV8DFeWscaKxGsNnTSljHaWCimvtyFeqkLzvgI")
            // const responce = await axios.get("https://api.unsplash.com/v1/search?query=nature");
            console.log(responce);
            setImages(responce.data.hits);
        }
        fetchArticles();
    }, []);
    return (
        <div>
            {images.length>0 &&<ImageGallery photos={images} />}
            <ImageModal />
            <ErrorMessage />
            <Loader />
            <LoadMoreBtn />
            <SearchBar />
            
        </div>
    )
}

export default App;

