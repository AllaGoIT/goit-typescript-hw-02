import { useState, useEffect } from 'react';
import { fetchPhotosNature } from "../../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMasagge/ErrorMassage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from 'react-hot-toast';




const App = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(false);

  
   
    useEffect(() => {
        if (!query) return;
        async function fetchPhotos() {
          
            try {
                setLoading(true);
                setError(null);
                const { results, totalPages } = await fetchPhotosNature(query, page);
                setImages(prevImages => [...prevImages, ...results]);
                setVisible(page < totalPages);
            
            }
            catch (error) {
                setError(true);
                
                
            }
            finally {
                setLoading(false);
            }
        }
        fetchPhotos();
    }, [query,page])



    const addImage = (value) => {
        setQuery(value);
        setPage(1);
        setImages([]);
    }

    const addImageLoadMore = () => {
       
        setPage(page + 1);
    }
    
    
return (
        <div>
        
            <ImageModal />
        <SearchBar onSubmit={addImage} toast={toast} visible = {visible} />
            {images.length > 0 && <ImageGallery photos={images} />} 
            {error && <ErrorMessage toast={toast } /> }
            {loading && <Loader/> }
            {/* {images.length > 0 && !loading && (<LoadMoreBtn onClick={addImageLoadMore} />)} */}
            {visible && !loading && images.length > 0 && <LoadMoreBtn onClick={addImageLoadMore}/>}
            <Toaster />
        </div>
    )
}

export default App;

