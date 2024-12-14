/* eslint-disable react/prop-types */
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-black/50 rounded-lg shadow-lg w-96 max-w-full p-6 border bg-white text-gray-800"
    >
      <div className="flex flex-col items-center">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => dialog.current.close()}
        >
          &times;
        </button>

        {/*Modal Content */}
        <div className="mt-4 text-center">{children}</div>
        {/* Footer Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600"
            onClick={() => dialog.current.close()}
          >
            OK
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={() => dialog.current.close()}
          >
            Cancel
          </button>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
