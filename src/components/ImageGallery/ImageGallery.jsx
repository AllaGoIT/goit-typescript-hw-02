import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({photos}) => { 
    return (
        <ul>
            {photos.map((photo) => {
                return (
                    <li key={photo.id}>
                    <ImageCard data={photo}  /> 
                    </li> 
                )
             }
            )}
    </ul>
    )
}
export default ImageGallery;
