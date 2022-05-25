import { useState } from "react";
import Modal from "./Modal";

function Input() {
  const [openModal, setOpenModal] = useState(false);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [calories, setCalories] = useState(0);

  const apply = (cal) => {
    setCalories(cal);
    setOpenModal(false);
  };

  const generateNutrition = () => {
    // 10-35% Protein
    setProtein(calories * 0.25);
    // 20-35% Fat
    setFat(calories * 0.25);
    // 45-65% Carbohydrates
    setCarbs(calories * 0.5);
  };
  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
        Your meal products planner
      </h1>
      <p className="text-gray-600 my-5 text-center">
        The program counts how much your need carbs, fat and protein and offer
        you some products to choose from.
      </p>
      <div className="flex flex-col sm:flex-row items-center text-gray-800 space-x-2">
        <h3 className="">Enter your calories</h3>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className="pl-3 outline-none"
        />
        <button onClick={() => setOpenModal(true)} className="text-[#FF8377]">
          Not Sure?
        </button>
      </div>
      <button
        onClick={generateNutrition}
        className="my-5 rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer
       border-b-4 border-l-2 active:border-[#e27065] active:shadow-none shadow-lg bg-gradient-to-tr from-[#FF8377]
        to-[#f36659] border-[#d3665c] text-white"
      >
        <span
          className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 
        group-hover:h-32 opacity-10"
        ></span>
        <span className="relative">Generate</span>
      </button>
      <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-4 text-gray-600">
        <h1 className="bg-purple-100 border border-purple-300 rounded-full px-3 mb-2">
          Protein <span className="text-purple-500 font-bold">{protein}</span>{" "}
          (25%)
        </h1>
        <h1 className="bg-yellow-100 border border-yellow-300 rounded-full px-3 mb-2">
          Fat <span className="text-yellow-500 font-bold">{fat}</span> (25%)
        </h1>
        <h1 className="bg-green-100 border border-green-300 rounded-full px-3 mb-2 ">
          Carbs <span className="text-green-500 font-bold">{carbs}</span> (50%)
        </h1>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} apply={apply} />}
    </div>
  );
}

export default Input;
