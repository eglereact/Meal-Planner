import { useState } from "react";

function Bmr({ apply }) {
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("1");
  const [age, setAge] = useState("");
  const [heightCenti, setHeightCenti] = useState("");
  const [activity, setActivity] = useState("");
  const [error, setError] = useState("");
  const [bmr, setBmr] = useState("");
  const [calories, setCalories] = useState(0);

  //https://www.calculator.net/bmr-calculator.html
  const calculateCalories = () => {
    if (
      age === "" ||
      gender === "" ||
      weight === "" ||
      heightCenti === "" ||
      activity === ""
    ) {
      setError("All Fields are required");
      console.log("hello");
    } else {
      console.log("Good");
      setError("");

      let bmr;

      if (gender === "1") {
        bmr = 9.247 * weight + 3.098 * heightCenti - 4.33 * age + 447.593;
      }
      if (gender === "2") {
        bmr = 13.397 * weight + 4.799 * heightCenti - 5.677 * age + 88.362;
      }

      setBmr(bmr);
      let calories = bmr * activity;
      setCalories(calories);
    }
  };

  return (
    <div>
      <div className="flex flex-col ">
        <h2 className="text-2xl text-gray-600 font-bold">
          Bmr Daily Calories Calculator
        </h2>
        {error && (
          <p className="bg-red-50 rounded-md pl-3 py-1 text-red-500 my-2">
            {error}
          </p>
        )}
        <div className="box-modal">
          <label className="label">Gender</label>
          <label>
            <input
              className="mr-1"
              checked={gender === "1"}
              type="radio"
              name="gender"
              onChange={(e) => setGender(e.target.value)}
              value="1"
            />
            Female
          </label>
          <label>
            <input
              className="mr-1"
              checked={gender === "2"}
              type="radio"
              name="gender"
              value="2"
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
        </div>
        <div className="box-modal">
          <label className="label">Weight in Kg</label>
          <input
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            name="weight"
            min="1"
            max="999"
            className="input-modal"
          />
        </div>
        <div className="box-modal">
          <label className="label">Height in centimeters</label>
          <input
            onChange={(e) => setHeightCenti(e.target.value)}
            type="number"
            name="heightCenti"
            min="0"
            max="99"
            className="input-modal"
          />
        </div>
        <div className="box-modal">
          <label className="label">Age</label>
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            name="age"
            min="0"
            className="input-modal"
            max="120"
          />
        </div>
        <div>
          <div className="box-modal">
            <label className="label">Workout in a week</label>
            <select
              name="activity"
              className="outline-none text-gray-800 hover:text-gray-700 cursor-pointer"
              onChange={(e) => setActivity(e.target.value)}
            >
              <option value="">Select your activity</option>
              <option value="1.2">Very little</option>
              <option value="1.375">1 to 3 days a week</option>
              <option value="1.55">3 to 5 days a week</option>
              <option value="1.725">very active</option>
              <option value="1.9">extremely active</option>
            </select>
          </div>
          <div className="flex items-center justify-center space-x-2 my-3">
            <button
              type="button"
              onClick={() => calculateCalories()}
              className="btn"
            >
              Calculate
            </button>
            <button
              type="button"
              onClick={() => apply(calories)}
              className="btn"
            >
              Apply
            </button>
          </div>
          <h1 className="text-center text-2xl">
            Calories :{" "}
            <span className="font-bold text-gray-800">
              {calories.toFixed(2)}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Bmr;
