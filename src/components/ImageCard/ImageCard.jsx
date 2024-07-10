import css from "./ImageCard.module.css";

const ImageCard = ({ data: { urls, slug }, }) => { 
    return (

        <div>
            <img className={ css.img} src={urls.small} alt={slug}/>
        </div>

    )
};
export default ImageCard;