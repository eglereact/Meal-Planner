import { useState } from "react";
import Modal from "./Modal";
import fruits from "./../data/fruit";
import MealList from "./MealList";

function Input() {
  const [openModal, setOpenModal] = useState(false);
  const [calories, setCalories] = useState(0);
  const [mealData, setMealData] = useState(null);
  const [error, setError] = useState("");

  const apply = (cal) => {
    setCalories(cal);
    setOpenModal(false);
  };

  const generateNutrition = () => {
    if (calories === 0) {
      setError("Please enter the calories");
    } else {
      getMealData();
      setError("");
    }
  };

  const getMealData = () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&timeFrame=day&targetCalories=${calories}&diet=vegetarian`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
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
        <p>{error && error}</p>
        <button onClick={() => setOpenModal(true)} className="text-[#FF8377]">
          Not Sure?
        </button>
      </div>
      <button
        onClick={generateNutrition}
        className="my-10 rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer
       border-b-4 border-l-2 active:border-[#e27065] active:shadow-none shadow-lg bg-gradient-to-tr from-[#FF8377]
        to-[#f36659] border-[#d3665c] text-white"
      >
        <span
          className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 
        group-hover:h-32 opacity-10"
        ></span>
        <span className="relative">Generate</span>
      </button>

      {/* List of meals */}
      {mealData && <MealList mealData={mealData} />}

      {openModal && <Modal setOpenModal={setOpenModal} apply={apply} />}
    </div>
  );
}

export default Input;
