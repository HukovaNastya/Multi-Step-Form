import "../Modal/Modal.css";
import React, {type ReactNode, useRef} from "react";

interface ModalProps {
    toggleModal: (value:boolean) => void;
    isActive?:boolean;
    children?:ReactNode;
}


const Modal:React.FC<ModalProps> = ({isActive, toggleModal, children}) => {
    const overlayRef = useRef(null);

    const onOverlayClick = (e:any) => {
        if (overlayRef.current === e.target) {
            toggleModal(false);
        }
    }

    return ( isActive ? (
        <div className="pop-up__overlay d-flex justify-content-center align-items-center" onClick={onOverlayClick} ref={overlayRef}>
            <div className='pop-up__container'>
                {children}
            </div>
        </div>
    ) : null )

}

export default Modal;