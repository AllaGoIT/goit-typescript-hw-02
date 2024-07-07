import { useState, useEffect } from 'react';
import { fetchPhotosNature } from "../../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMasagge/ErrorMassage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";



const App = () => { 
    const [images, setImages] = useState([]);
    // const [loading, setLoading] = useState([false]);
    // const [error, setError] = useState([false]);

    useEffect(() => {
        async function fetchPhotos() {
            try {
                // setLoading(true);
                const data = await fetchPhotosNature("nature");
                setImages(data);
            } catch(error) {
                // setError(true);
            } finally {
                // setLoading(false);
             }
        }
        fetchPhotos();
    }, []);
    return (
        <div>
        <ImageGallery photos={images} />
            <ImageModal />
            <ErrorMessage />
            <Loader />
            <LoadMoreBtn />
            <SearchBar />
            
        </div>
    )
}

export default App;

