const MenuHero = () => {
  return (
    <div className="h-full bg-black/70 text-white">
      <div className="px-6 pt-24 sm:px-10 sm:pt-32 lg:px-16 lg:pt-40 xl:px-24">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-primary" />

          <span className="text-sm font-semibold tracking-[3px] sm:tracking-[5px]">
            IL MENU
          </span>
        </div>

        <h1 className="py-3 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          La nostra cucina
        </h1>

        <p className="text-base leading-relaxed sm:text-lg lg:text-xl">
          Piatti della tradizione italiana, preparati con ingredienti di
          stagione
          <span className="block">e passione.</span>
        </p>
      </div>
    </div>
  );
};

export default MenuHero;
