import { useState } from "react";

function Bmr({ apply }) {
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("1");
  const [age, setAge] = useState("");
  const [heightMeter, setHeightMeter] = useState("");
  const [heightCenti, setHeightCenti] = useState("");
  const [activity, setActivity] = useState("");
  const [error, setError] = useState("");
  const [bmr, setBmr] = useState("");
  const [calories, setCalories] = useState("");

  //https://www.calculator.net/bmr-calculator.html?ctype=metric
  const calculateCalories = () => {
    if (age === "" || gender === "" || weight === "" || heightCenti === "") {
      setError("All Fields are required");
    }
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
  };

  return (
    <div>
      <div>
        <h2>Brm Daily Calorie Calculator</h2>
        {error && <p>{error}</p>}
        <div>
          <label>Gender</label>
          <label>
            <input
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
              checked={gender === "2"}
              type="radio"
              name="gender"
              value="2"
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
        </div>
        <div>
          <label>Weight in Kg</label>
          <input
            onChange={(e) => setWeight(e.target.value)}
            type="number"
            name="weight"
            min="1"
            max="999"
          />
        </div>
        <div>
          <label>Height in centimeters</label>
          <input
            onChange={(e) => setHeightCenti(e.target.value)}
            type="number"
            name="heightCenti"
            min="0"
            max="99"
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            onChange={(e) => setAge(e.target.value)}
            name="age"
            min="0"
            max="120"
          />
        </div>
        <div>
          <div>
            <label>Workout in a week</label>
            <select
              name="activity"
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
          <button type="button" onClick={() => calculateCalories()}>
            Calculate calories
          </button>
          <button type="button" onClick={() => apply(calories)}>
            Apply
          </button>
          <h1>Calories : {calories}</h1>
        </div>
      </div>
    </div>
  );
}

export default Bmr;
