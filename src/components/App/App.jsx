import { useState, useEffect } from 'react';
import { fetchPhotosNature } from "../../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMasagge/ErrorMassage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from 'react-hot-toast';
import React from 'react';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}



const App = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [visible, setVisible] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalData, setModalData] = useState(null);
 
    let subtitle;

    useEffect(() => {
        if (!query) return;
        async function fetchPhotos() {
          
            try {
                setLoading(true);
                setError(null);
                const { results, total_Pages } = await fetchPhotosNature(query, page);
                setImages(prevImages => [...prevImages, ...results]);
                setVisible(page < total_Pages);
            
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

  
  


  function openModal(image) {
    setIsOpen(true);
    setModalData(image);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
    
    
return (
        <div>
            {modalIsOpen && <ImageModal data={modalData} modalIsOpen={modalIsOpen} openModal={openModal} afterOpenModal={afterOpenModal} closeModal={closeModal} customStyles={customStyles} />}
            <SearchBar onSubmit={addImage} toast={toast} visible = {visible} />
            {images.length > 0 && <ImageGallery photos={images} openModal={openModal} />} 
            {error && <ErrorMessage toast={toast } /> }
            {loading && <Loader/> }
            {visible && !loading && images.length > 0 && <LoadMoreBtn onClick={addImageLoadMore}/>}
            <Toaster />
        </div>
    )
}

export default App;

