const ImageCard = ({data:{urls, alt_description }}) => { 
    return (

        <div>
    <img src={urls.full} alt={alt_description} />
        </div>

    )
};
export default ImageCard;