import { useEffect, useRef } from "react";
import {createPortal} from 'react-dom'
import s from "./Modal.module.css"


function Modal({ largeImg, onClose }) {
    const modalRoot = useRef(document.querySelector('#modal-root'));

    

    useEffect(() => {
        const handleKeyDown = e => {
        if (e.code === 'Escape') {
            onClose();
        };
        };
        
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    

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
        , modalRoot.current);
};

export default Modal;






 
