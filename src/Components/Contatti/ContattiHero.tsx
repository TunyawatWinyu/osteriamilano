const ContattiHero = () => {
  return (
    <div className="relative h-full bg-black/70 text-white">
      <div className="absolute bottom-12 left-6 sm:bottom-16 sm:left-10 lg:bottom-20 lg:left-16 xl:left-50">
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-primary" />

          <span className="text-sm font-semibold tracking-[3px] sm:tracking-[5px]">
            CONTATTI
          </span>
        </div>

        <h1 className="py-3 font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          Vieni a trovarci
        </h1>

        <p className="text-base leading-relaxed sm:text-lg lg:text-xl">
          Nel cuore di Milano, pronti ad accoglierti.
        </p>
      </div>
    </div>
  );
};

export default ContattiHero;
