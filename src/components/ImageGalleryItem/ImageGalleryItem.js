import React, { Component } from "react";
import Modal from "components/Modal/Modal";
import s from "./ImageGalleryItem.module.css"

class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    }

    handleToggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }))
    }

    render() { 
        const { item } = this.props;
        const { showModal } = this.state
        return (
            <li className={s.ImageGalleryItem}>
                <img src={item.webformatURL} alt="img" className={s.ImageGalleryItemImage} onClick={this.handleToggleModal} />
                {showModal && <Modal onClose={this.handleToggleModal} largeImg={item.largeImageURL} />}
            </li>
        );
    }
}
 
export default ImageGalleryItem;