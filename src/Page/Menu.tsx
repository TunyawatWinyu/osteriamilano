import { useState } from "react";
import Navbar from "../Components/Navbar";
import menuHero from "../assets/3beeb283f_generated_7353723f.jpg";
import dishes from "../Data/Dish";

const Menu = () => {
  const categories = [
    { id: 1, name: "Antipasti" },
    { id: 2, name: "Primi" },
    { id: 3, name: "Secondi" },
    { id: 4, name: "Contorni" },
    { id: 5, name: "Dolci" },
    { id: 6, name: "Bevande" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  const filteredDish = dishes.filter((dish) => {
    const matchCategory = dish.category === selectedCategory;
    return matchCategory;
  });
  return (
    <header
      className="relative h-[400px] bg-cover bg-center"
      style={{ backgroundImage: `url(${menuHero})` }}
    >
      <section className="h-[400px] bg-black/70 text-white">
        <Navbar />

        {/* HERO CONTENT */}
        <section
          className="
            px-6
  pt-24
  pb-32
  sm:px-10
  sm:pt-32
  lg:px-16
  lg:pt-40
  xl:px-24
  xl:pt-[180px]
  2xl:px-[300px]
          "
        >
          {/* CATEGORY */}
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-primary" />

            <a className="text-sm font-semibold tracking-[3px] sm:tracking-[5px]">
              IL MENU
            </a>
          </div>

          {/* TITLE */}
          <div className="py-3">
            <h1
              className="
                flex
                flex-col
                text-4xl
                font-heading
                leading-tight
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              La nostra cucina
            </h1>
          </div>

          {/* DESCRIPTION */}
          <div className="my-1">
            <p
              className="
                flex
                flex-col
                text-base
                leading-relaxed
                sm:text-lg
                lg:text-xl
              "
            >
              Piatti della tradizione italiana, preparati con ingredienti di
              stagione
              <span>e passione.</span>
            </p>
          </div>
        </section>
        <div className="pt-6">
          <div className="flex justify-center items-center">
            {categories.map((category) => {
              return (
                <a
                  onClick={() => setSelectedCategory(category.id)}
                  className={`mx-2 text-lg cursor-pointer tracking-wider  ${selectedCategory === category.id ? "bg-black text-white px-4 py-2" : "bg-white px-4 py-2 text-gray-600 transition duration-200 ease-in-out hover:text-black"}`}
                  key={category.id}
                >
                  {category.name}
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </header>
  );
};

export default Menu;
