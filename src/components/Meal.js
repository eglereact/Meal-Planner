import { useEffect, useState } from "react";
import mealImg from "./../images/meal.svg";
import { GiMeal } from "react-icons/gi";

function Meal({ meal }) {
  const { title, sourceUrl, servings, readyInMinutes, imageType, id } = meal;
  const [imageUrl, setImageUrl] = useState("");
  // const [types, setTypes] = useState([]);
  // const [ingridients, setIngridients] = useState([]);

  useEffect(() => {
    fetch(`https://spoonacular.com/recipeImages/${id}-556x370.${imageType}`)
      .then((data) => {
        setImageUrl(data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, imageType]);

  // Request limit 150 per day.
  // useEffect(() => {
  //   fetch(
  //     `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&includeNutrition=false`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setIngridients(data.extendedIngredients);
  //       setTypes(data.dishTypes);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);

  return (
    <div className="w-full bg-white rounded-lg shadow-md mt-2">
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

        {/* <div className="flex space-x-1 flex-wrap capitalize text-gray-800">
          <span className="mr-2"> Dish Type:</span>
          {types.map((type, index) => (
            <p className="font-medium" key={index}>
              {type} <span className="text-[#FF8377] font-bold">|</span>
            </p>
          ))}
        </div>

        <div className="flex space-x-1 flex-wrap capitalize text-gray-800">
          <span className="mr-2">Ingridients:</span>
          {ingridients.map((ing, index) => (
            <p className="font-medium" key={index}>
              {ing.name} <span className="text-[#FF8377] font-bold">|</span>
            </p>
          ))}
        </div> */}
        <a
          className="flex items-center text-lg mt-3  font-medium hover:text-[#FF8377]"
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
