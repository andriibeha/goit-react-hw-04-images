import { useState } from "react";
import Modal from "components/Modal/Modal";
import s from "./ImageGalleryItem.module.css"


function ImageGalleryItem({item}) {
    const [showModal, setShowModal] = useState(false);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <li className={s.ImageGalleryItem}>
            <img src={item.webformatURL} alt="img" className={s.ImageGalleryItemImage} onClick={handleToggleModal} />
            {showModal && <Modal onClose={handleToggleModal} largeImg={item.largeImageURL} />}
        </li>
    );
};

export default ImageGalleryItem;





