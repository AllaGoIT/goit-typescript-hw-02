import { useState, useEffect } from 'react';
import { fetchPhotosNature } from "../../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMasagge/ErrorMassage";
// import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import { Audio } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

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
    
    
return (
        <div>
        
            <ImageModal />
           {error && <ErrorMessage onClick={notify} />}
            {/* <Loader loading={loading} /> */}
           
            <SearchBar onSubmit={addImage} />
            {images.length > 0 && <ImageGallery photos={images} />} 
           
        <Toaster />
         {loading &&<Audio
        
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
        />
        }
         <LoadMoreBtn visible={ visible} />
        </div>
    )
}

export default App;

