function Modal({ setOpenModal }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center transition-all">
      <div className="bg-white w-11/12 lg:w-1/2">
        <h3>modal content</h3>
        <button onClick={() => setOpenModal(false)}>close</button>
      </div>
    </div>
  );
}

export default Modal;
