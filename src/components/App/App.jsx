import { useState, useEffect } from 'react'
import axios from 'axios';
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMasagge/ErrorMassage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageCard from "../ImageCard";


const App = () => { 
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            const responce = await axios.get("https://api.unsplash.com/v1/search?query=nature");
            setArticles(responce.data.hits);
        }
        fetchArticles();
    }, []);
    return (
        <div>
            <ImageGallery articles={articles} />
            <ImageModal />
            <ErrorMessage />
            <Loader />
            <LoadMoreBtn />
            <SearchBar />
            <ImageCard/>
            
        </div>
    )
}

export default App;

