type Dish = {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string;
};

type DishCardProps = {
  dish: Dish;
};

const DishCard = ({ dish }: DishCardProps) => {
  return (
    <article className="group overflow-hidden bg-white ">
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-heading text-2xl font-medium">{dish.name}</h3>

          <span className="shrink-0 text-2xl font-heading font-medium text-matcha-green">
            €{dish.price}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          {dish.description}
        </p>
      </div>
    </article>
  );
};

export default DishCard;
