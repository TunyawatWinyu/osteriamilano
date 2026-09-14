import { type Dish as DishType } from "../../Type/Type";

type DishMenuProps = {
  dish: DishType;
};

const Dish = ({ dish }: DishMenuProps) => {
  return (
    <div className="flex justify-between pb-12 pt-8 border-b border-b-gray-300">
      <div className="flex flex-col">
        <h2 className="font-heading text-xl text-gray-500">{dish.name}</h2>
        <p className="text-sm text-gray-500">{dish.description}</p>
      </div>
      <span className="font-heading text-lg text-matcha-green">
        € {dish.price}
      </span>
    </div>
  );
};

export default Dish;
