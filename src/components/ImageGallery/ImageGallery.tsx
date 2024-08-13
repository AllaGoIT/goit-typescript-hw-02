import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ photos, openModal} ) => { 
    return (
        <ul className={css.list} >
            {photos.map((photo) => {
                console.log(photo)
                return (
                    <li key={photo.id}>
                        <ImageCard data={photo} openModal={openModal}/>
                     
                    </li> 
                )
             }
            )}
    </ul>
    )
}
export default ImageGallery;
