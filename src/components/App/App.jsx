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
                const data = await fetchPhotosNature(images);
                setImages(data);
            } catch(error) {
                // setError(true);
            } finally {
                // setLoading(false);
             }
        }
        fetchPhotos();
    }, [images]);

    const addImage = (newImage) => {
        setImages((prevImages) => {
        return[...prevImages, JSON.parse (newImage)]
    })
     };
    return (
        <div>
       {images > 0 &&<ImageGallery photos={images} onAdd={addImage}/>} 
            <ImageModal />
            <ErrorMessage />
            <Loader />
            <LoadMoreBtn />
            <SearchBar onClick={addImage} />
            
        </div>
    )
}

export default App;

