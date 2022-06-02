import { useEffect, useState } from "react";
import Modal from "./Modal";
import MealList from "./MealList";
import dateFormat from "dateformat";
import { dietTypes } from "./../data.js";
import {
  addItemToLocalStorage,
  getItemFromLocalStorage,
} from "./../utils/localStorage";

function Input() {
  const [openModal, setOpenModal] = useState(false);
  const [calories, setCalories] = useState(
    getItemFromLocalStorage("calories", 0)
  );
  const [mealDataM, setMealDataM] = useState(
    getItemFromLocalStorage("mealMonday", null)
  );
  const [mealDataTu, setMealDataTu] = useState(
    getItemFromLocalStorage("mealTuesday", null)
  );
  const [mealDataW, setMealDataW] = useState(
    getItemFromLocalStorage("mealWednesday", null)
  );
  const [mealDataTr, setMealDataTr] = useState(
    getItemFromLocalStorage("mealThursday", null)
  );
  const [mealDataF, setMealDataF] = useState(
    getItemFromLocalStorage("mealFriday", null)
  );
  const [mealDataSa, setMealDataSa] = useState(
    getItemFromLocalStorage("mealSaturday", null)
  );
  const [mealDataSu, setMealDataSu] = useState(
    getItemFromLocalStorage("mealSunday", null)
  );
  const [error, setError] = useState("");
  const [diet, setDiet] = useState(getItemFromLocalStorage("diet", ""));

  const now = new Date();

  console.log(diet);

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

  useEffect(() => {
    // storing meals to local storage
    addItemToLocalStorage("mealMonday", mealDataM);
    addItemToLocalStorage("mealTuesday", mealDataTu);
    addItemToLocalStorage("mealWednesday", mealDataW);
    addItemToLocalStorage("mealThursday", mealDataTr);
    addItemToLocalStorage("mealFriday", mealDataF);
    addItemToLocalStorage("mealSaturday", mealDataSa);
    addItemToLocalStorage("mealSunday", mealDataSu);
    addItemToLocalStorage("calories", calories);
    addItemToLocalStorage("diet", diet);
  }, [
    mealDataM,
    mealDataTu,
    mealDataW,
    mealDataTr,
    mealDataF,
    mealDataSa,
    mealDataSu,
    calories,
    diet,
  ]);

  const getMealData = () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&timeFrame=week&targetCalories=${calories}&diet=${diet}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealDataM(data.week.monday);
        setMealDataTu(data.week.tuesday);
        setMealDataW(data.week.wednesday);
        setMealDataTr(data.week.thursday);
        setMealDataF(data.week.friday);
        setMealDataSa(data.week.saturday);
        setMealDataSu(data.week.sunday);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  };

  //Add number of days to current day
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-center items-center ">
      <h1 className="text-xl lg:text-3xl font-bold text-gray-800 text-center">
        Your meal planner for a week
      </h1>
      <h3 className="text-sm text-gray-600 text-center">
        From {dateFormat(now, "yyyy mmmm dS")} to{" "}
        {dateFormat(addDays(now, 7), "yyyy mmmm dS")}
      </h3>
      <p className="text-gray-600 my-5 text-center">
        The program counts how much your need carbs, fat and protein and offer
        you some vegetarian meals to choose from.
      </p>
      <p
        className={
          error &&
          `bg-red-100 border border-red-300 px-4 my-2 rounded-lg text-red-600`
        }
      >
        {error && error}
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
      {/* Type of diet */}
      <div className="space-x-4 mt-5 flex flex-wrap items-center justify-center">
        {dietTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setDiet(type.type)}
            className={`${
              diet === type.type && "bg-[#FF8377] font-bold text-white"
            }  capitalize text-gray-800 border-2 px-3 py-1 hover:bg-white hover:text-gray-800 rounded-lg mt-1 border-gray-300`}
          >
            {type.type}
          </button>
        ))}
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
      {mealDataM && <MealList mealData={mealDataM} day="Monday" />}
      {mealDataTu && <MealList mealData={mealDataTu} day="Tuesday" />}
      {mealDataW && <MealList mealData={mealDataW} day="Wednesday" />}
      {mealDataTr && <MealList mealData={mealDataTr} day="Thursday" />}
      {mealDataF && <MealList mealData={mealDataF} day="Sunday" />}
      {mealDataSa && <MealList mealData={mealDataSa} day="Saturday" />}
      {mealDataSu && <MealList mealData={mealDataSu} day="Sunday" />}

      {openModal && <Modal setOpenModal={setOpenModal} apply={apply} />}
    </div>
  );
}

export default Input;
