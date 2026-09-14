import Dish from "./Dish";
import dishes from "../../Data/Dish";

type MenuListProps = {
  selectedCategory: number;
};

const MenuList = ({ selectedCategory }: MenuListProps) => {
  const filteredDishes = dishes.filter(
    (dish) => dish.category === selectedCategory,
  );
  return (
    <>
      {/* DISHES */}
      <div className="flex w-full max-w-250 flex-col gap-6 px-6">
        {filteredDishes.length === 0 ? (
          <p className="text-center font-heading text-lg text-primary">
            NESSUN PIATTO DISPONIBILE
          </p>
        ) : (
          filteredDishes.map((dish) => <Dish key={dish.id} dish={dish} />)
        )}
      </div>
    </>
  );
};

export default MenuList;
