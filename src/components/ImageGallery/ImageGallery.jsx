import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = (photos) => { 
    return (
        <ul>
            {/* Набір елементів списку із зображеннями */}
            
	{photos.map((photo) => {
               <li key={photo.id}>
                   <ImageCard data={photo}  /> 
             </li> 
           })}
</ul>
    )
};

export default ImageGallery;
