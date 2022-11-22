import { useState } from "react";

import Modal from "components/Modal";
import { Item, ItemImage, ModalImage } from "./ImageGalleryItemStyled";

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
    
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <>
            <Item onClick={toggleModal}>
                <ItemImage src={webformatURL} alt={tags} />
            </Item>
            {showModal && <Modal onClose={toggleModal}>
                    <ModalImage src={largeImageURL} alt={tags} />
            </Modal>}
        </>
    )
}

export default ImageGalleryItem;