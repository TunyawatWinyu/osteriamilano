import hero2 from "../../assets/7199d6bc6_generated_a1aa13d0.jpg";

const Philosophy = () => {
  return (
    <section className="mx-auto my-24 flex max-w-7xl flex-col gap-12 px-6 md:flex md:flex-col md:justify-center md:items-center lg:my-40 lg:flex-row lg:items-center lg:px-16 xl:px-24 2xl:px-32">
      {/* Text */}
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-primary" />

          <p className="text-sm tracking-[3px] text-matcha-green">
            LA NOSTRA FILOSOFIA
          </p>
        </div>

        <div className="my-4">
          <h2 className="font-heading text-4xl font-light md:text-5xl">
            La tradizione italiana,
            <span className="block">reinterpretata con eleganza.</span>
          </h2>
        </div>

        <div className="my-7">
          <p className="max-w-xl text-lg leading-relaxed text-[#975723]">
            Osteria Milano nasce dall'amore per la cucina italiana e dal
            desiderio di creare un luogo dove sapori autentici, ingredienti di
            qualità e ospitalità si incontrano.
          </p>
        </div>

        <div className="flex items-center">
          <h3 className="mr-4 font-heading text-6xl text-matcha-green">15</h3>

          <p className="text-lg tracking-[2px] text-[#975723]">
            ANNI DI
            <span className="block">CUCINA ITALIANA</span>
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="relative flex-1">
        <div className="absolute -bottom-6 -left-6 h-64 w-48 border border-primary" />

        <img
          src={hero2}
          className="relative z-10 h-auto w-full max-w-xl object-cover"
          alt="Cucina italiana"
        />
      </div>
    </section>
  );
};

export default Philosophy;
