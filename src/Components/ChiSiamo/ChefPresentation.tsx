import ChefHero from "../../assets/4f9186917_generated_5beb8d56.jpg";

const ChefPresentation = () => {
  return (
    <section className="mx-auto my-24 flex max-w-375 flex-col gap-12 px-6 lg:my-40 lg:flex-row lg:items-center lg:justify-center lg:gap-20 xl:px-8">
      {/* Image */}
      <div className="relative w-full lg:w-120 lg:shrink-0">
        <img
          src={ChefHero}
          className="relative z-10 h-[600px] w-[450px] max-w-xl object-cover"
          alt="Cucina italiana"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col w-full ">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-primary" />

          <p className="text-sm tracking-[3px] text-matcha-green">LO CHEF</p>
        </div>

        <div className=" my-4">
          <h2 className="font-heading text-black text-4xl font-light md:text-5xl">
            “Una cucina fondata sulla tradizione, ma sempre aperta
            alla ricerca.”
          </h2>
        </div>

        <div className="my-7">
          <h1 className="text-3xl text-primary font-heading">
            Chef Marco Rossi
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-gray-600 mt-3">
            Cresciuto tra le cucine della tradizione lombarda, Marco Rossi
            unisce il rispetto per le ricette di famiglia a una visione
            contemporanea. La sua cucina celebra la materia prima, la stagione e
            il gesto del cuoco.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChefPresentation;
