import { useState, useEffect } from "react";
import { fetchPhotosNature } from "../../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import ErrorMessage from "../ErrorMasagge/ErrorMassage";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import toast, { Toaster } from "react-hot-toast";
import React from "react";
import { Photo } from "../../types";
import { boolean, string } from "yup";

const App = () => {
  const [images, setImages] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(null);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [visible, setVisible] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);
  const [modalData, setModalData] = useState<null>(null);

  useEffect(() => {
    if (!query) return;
    async function fetchPhotos() {
      try {
        setLoading(true);
        setError(null);
        const { results, total_pages } = await fetchPhotosNature(query, page);
        setImages((prevImages) => [...prevImages, ...results]);
        setVisible(page < total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, [query, page]);

  const addImage = (value: string): void => {
    setQuery(value);
    setPage(1);
    setImages([]);
  };

  const addImageLoadMore = () => {
    setPage(page + 1);
  };

  function openModal(image: Photo): void {
    setIsOpen(true);
    setModalData(image);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  return (
    <div>
      {modalIsOpen && (
        <ImageModal
          data={modalData}
          modalIsOpen={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
      <SearchBar onSubmit={addImage} toast={toast} visible={visible} />
      {images.length > 0 && (
        <ImageGallery photos={images} openModal={openModal} />
      )}
      {error && <ErrorMessage toast={toast} />}
      {loading && <Loader />}
      {visible && !loading && images.length > 0 && (
        <LoadMoreBtn onClick={addImageLoadMore} />
      )}

      <Toaster />
    </div>
  );
};

export default App;
