import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import ImageModal from "../ImageModal/ImageModal";

const ImageGallery = ({ photos }) => { 
    return (
        <ul className={css.list} >
            {photos.map((photo) => {
                console.log(photo)
                return (
                    <li key={photo.id}>
                        <ImageCard data={photo} /> 
                        <ImageModal data={photo}/>
                    </li> 
                )
             }
            )}
    </ul>
    )
}
export default ImageGallery;
