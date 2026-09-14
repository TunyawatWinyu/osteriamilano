import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Home/Footer";
import MenuHero from "../Components/Menu/MenuHero";
import MenuList from "../Components/Menu/MenuList";
import CategoryFilter from "../Components/Menu/CategoryFilter";

import menuHero from "../assets/3beeb283f_generated_7353723f.jpg";
import { categories } from "../Data/Categories";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  const selectedCategoryName = categories.find(
    (category) => category.id === selectedCategory,
  )?.name;

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${menuHero})` }}
      >
        <Navbar />
        <MenuHero />
      </section>

      <main>
        {/* MENU */}
        <section className="flex flex-col items-center gap-10 py-10">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onChangeCategory={setSelectedCategory}
            selectedCategoryName={selectedCategoryName}
          />

          <MenuList selectedCategory={selectedCategory} />
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Menu;
