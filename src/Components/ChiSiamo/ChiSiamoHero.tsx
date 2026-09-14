const ChiSiamoHero = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="h-px w-10 bg-primary" />

        <a className="text-sm font-semibold tracking-[3px] sm:tracking-[5px]">
          CHI SIAMO
        </a>
      </div>

      {/* TITLE */}
      <div className="py-3">
        <h1
          className="
                flex
                flex-col
                text-3xl
                font-heading
                leading-tight
                sm:text-4xl
                lg:text-5xl
                xl:text-6xl
              "
        >
          Una storia italiana, <br />
          nel cuore di Milano.
        </h1>
      </div>
    </div>
  );
};

export default ChiSiamoHero;
