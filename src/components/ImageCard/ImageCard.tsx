import css from "./ImageCard.module.css";
import { Photo } from "../../types";
interface ImageCardProps {
  data: Photo;
  openModal: (image: Photo) => void;
}
const ImageCard: React.FC<ImageCardProps> = ({
  data: { urls, slug, ...restData },
  openModal,
}) => {
  return (
    <div>
      <img
        className={css.img}
        onClick={() => {
          openModal({ urls, slug, ...restData });
        }}
        src={urls.small}
        alt={slug}
      />
    </div>
  );
};
export default ImageCard;
