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
      <div className="flex flex-col gap-1 w-2.4 ">
        <button
          className="text-neutral-dark-grayish-blue text-xl  place-self-end px-3 duration-300 hover:text-primary-orange"
          onClick={() => onClose()}
        >
          <svg className="fill-current duration-300 hover:text-primary-orange" width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"/></svg>
        </button>
        <div className="bg-transparent p-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
