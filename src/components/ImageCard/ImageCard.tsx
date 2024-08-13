
import css from "./ImageCard.module.css";

const ImageCard = ({ data: { urls, slug },openModal }) => { 
    return (

        <div>
            <img className={css.img} onClick={() => { openModal({ urls, slug })}}  src={urls.small} alt={slug} />
        
        </div>

    )
};
export default ImageCard;