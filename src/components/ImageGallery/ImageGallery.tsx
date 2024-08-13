import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Photo } from "../../types";

interface ImageGalleryProps {
  photos: Photo;
  openModal: (image: Photo) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, openModal }) => {
  return (
    <ul className={css.list}>
      {photos.map((photo: Photo) => {
        console.log(photo);
        return (
          <li key={photo.id}>
            <ImageCard data={photo} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;
