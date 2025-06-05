import React from "react";

export default function Modal() {
  return (
    <div className="hmodal">
      <button
        className="hmodal__cta btn btn-neutral"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Click Me!
      </button>
      <dialog
        id="my_modal_2"
        className="modal"
      >
        <div className="modal-box">
          <h3 className="text-lg text-info">Modal Agency</h3>
          <p className="py-4 text-primary">
            Press ESC key or click outside to close
          </p>
        </div>
        <form
          method="dialog"
          className="modal-backdrop"
        >
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
