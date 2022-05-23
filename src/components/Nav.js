import { GiHotMeal } from "react-icons/gi";

function Nav() {
  return (
    <div className="h-20 flex  items-center max-w-6xl mx-auto">
      <h1 className="flex items-center space-x-2 text-2xl mx-5 text-gray-800">
        <GiHotMeal className="text-[#FF8377]" />
        <span className="font-bold">Meal</span> Planner
      </h1>
    </div>
  );
}

export default Nav;
