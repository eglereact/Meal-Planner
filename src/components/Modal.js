import Bmr from "./Bmr";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ setOpenModal, apply }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center transition-all">
      <div className="bg-white w-11/12 lg:w-1/2 relative rounded-lg p-5">
        <button
          onClick={() => setOpenModal(false)}
          className="text-2xl flex right-1 top-1 absolute hover:text-[#FF8377]"
        >
          <AiOutlineClose />
        </button>
        <Bmr apply={apply} />
      </div>
    </div>
  );
}

export default Modal;
