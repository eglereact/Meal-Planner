import Meal from "./Meal";

function MealList({ mealData, day }) {
  const nutrients = mealData.nutrients;
  return (
    <main className="w-full">
      <section>
        <h1 className="text-center text-3xl text-gray-600 font-bold mb-3">
          Meal List for {day}
        </h1>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:space-x-4 text-gray-600">
          <h1 className="bg-pink-100 border border-pink-300 rounded-full px-3 mb-2">
            Colories{" "}
            <span className="text-pink-500 font-bold">
              {nutrients.calories}
            </span>
          </h1>
          <h1 className="bg-purple-100 border border-purple-300 rounded-full px-3 mb-2">
            Protein{" "}
            <span className="text-purple-500 font-bold">
              {nutrients.protein}g
            </span>
          </h1>
          <h1 className="bg-yellow-100 border border-yellow-300 rounded-full px-3 mb-2">
            Fat{" "}
            <span className="text-yellow-500 font-bold">{nutrients.fat}g</span>
          </h1>
          <h1 className="bg-green-100 border border-green-300 rounded-full px-3 mb-2 ">
            Carbs{" "}
            <span className="text-green-500 font-bold">
              {nutrients.carbohydrates}g
            </span>
          </h1>
        </div>
      </section>
      <section className="flex flex-col sm:flex-row sm:space-x-3 my-5 mx-1">
        {mealData.meals.map((meal) => (
          <Meal key={meal.id} meal={meal} />
        ))}
      </section>
    </main>
  );
}

export default MealList;
