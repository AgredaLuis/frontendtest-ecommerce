import React, { FC, MouseEvent} from "react";
import {ModalProps} from '../types/modal'
const Modal: FC<ModalProps> = ({ isVisible, onClose, children }) => {

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLDivElement).id === 'wrapper') onClose();
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[600px] h-[600px] flex flex-col">
        <button
          className="text-neutral-dark-grayish-blue text-xl place-self-end duration-300 hover:text-primary-orange"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
