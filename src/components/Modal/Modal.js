import { useEffect, useRef } from "react";
import {createPortal} from 'react-dom'
import s from "./Modal.module.css"


function Modal({ largeImg, onClose }) {
    const modalRoot = useRef(null);
    modalRoot.current = document.querySelector('#modal-root');

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        };
    };

    const handleClickBackdrop = e => {
        if (e.target.nodeName !== 'IMG') {
            onClose();
        };
    };

    return createPortal(
        <div className={s.Overlay} onClick={handleClickBackdrop}>
            <div className={s.Modal}>
                <img src={largeImg} alt="Big" />
            </div>
        </div>
        , modalRoot);
};

export default Modal;






 
