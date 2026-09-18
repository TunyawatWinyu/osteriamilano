import { Link } from "react-router-dom";
import dishes from "../../Data/Dish";
import DishCard from "../DishCard";
import { ArrowRight } from "reicon-react";

import { useRef } from "react";

const MenuPreview = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = carouselRef.current.clientWidth * 0.8;

    carouselRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };
  return (
    <section className="mx-auto my-24 flex flex-col max-w-7xl gap-12 px-6 lg:my-30 lg:flex-col lg:px-16 xl:px-24 2xl:px-32">
      {/* TEXT */}
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-primary" />

          <p className="text-sm tracking-[3px] text-matcha-green">
            I NOSTRI PIATTI
          </p>
        </div>
        <div className="my-4">
          <h2 className="font-heading text-4xl font-light md:text-5xl">
            Una selezione della nostra specialità
          </h2>
        </div>
      </div>
      {/* Image */}
      {/* CAROSELLO */}{" "}
      <div className=" flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 ">
        {" "}
        {dishes.map((dish) => {
          return (
            <div
              key={dish.id}
              className=" w-[82%] shrink-0 snap-start md:w-auto md:shrink "
            >
              {" "}
              <DishCard dish={dish} />{" "}
            </div>
          );
        })}{" "}
      </div>
      {/* Scopri Menu */}
      <div className="flex justify-center items-center">
        <Link
          to="/menu"
          className="flex border py-3 px-[30px] font-semibold tracking-widest cursor-pointer transition duration-300 ease-in-out hover:bg-black hover:text-white"
        >
          SCOPRI IL MENU <ArrowRight className="ml-[10px]" />
        </Link>
      </div>
    </section>
  );
};

export default MenuPreview;
