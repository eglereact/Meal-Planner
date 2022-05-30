import { useEffect, useState } from "react";
import mealImg from "./../images/meal.svg";
import { GiMeal } from "react-icons/gi";

function Meal({ meal }) {
  const { title, sourceUrl, servings, readyInMinutes } = meal;
  const [imageUrl, setImageUrl] = useState("");
  const [types, setTypes] = useState([]);
  const [veryHealthy, setVeryHealthy] = useState(false);
  const [ingridients, setIngridients] = useState([]);

  // Request limit 150 per day
  // useEffect(() => {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&includeNutrition=false`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setImageUrl(data.image);
  //       setTypes(data.dishTypes);
  //       setVeryHealthy(data.veryHealthy);
  //       setIngridients(data.extendedIngredients);
  //       console.log(data);
  //     })
  //     .catch(() => {
  //       console.log("error");
  //     });
  // }, []);

  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      <h1 className="text-center text-xl text-gray-600 py-2 h-20  font-bold">
        {title}
      </h1>
      <img src={imageUrl || mealImg} alt={title} />
      <div className="p-5 text-gray-800">
        <p>
          Servings: <span className="font-bold">{servings}</span>
        </p>
        <p>
          Ready in: <span className="font-bold">{readyInMinutes}</span> min
        </p>
        <div>
          Dish Type:{" "}
          {types.map((type) => (
            <p>{type}</p>
          ))}
        </div>
        <p>veryHealthy : {veryHealthy}</p>
        <div>
          ingridients:{" "}
          {ingridients.map((ing) => (
            <p className="capitalize">{ing.name}</p>
          ))}
        </div>
        <a
          className="flex items-center text-lg  font-medium hover:text-[#FF8377]"
          href={sourceUrl}
        >
          Go to recipe
          <span className="ml-2 text-[#FF8377] animate-pulse">
            <GiMeal />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Meal;
