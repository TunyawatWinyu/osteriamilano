import StoryHero from "../../assets/c83c6cde8_generated_86a222c6.jpg";

const RestaurantStory = () => {
  return (
    <section className="mx-auto my-24 flex max-w-[1500px] flex-col gap-12 px-6 lg:my-20 lg:flex-row lg:items-center lg:gap-20 xl:px-8">
      {/* Image */}
      <div className="relative w-full lg:w-1/2 lg:shrink-0">
        <img
          src={StoryHero}
          className="relative z-10 h-150 lg:h-170 xl:h-200 w-full object-cover"
          alt="Cucina italiana"
        />
      </div>
      {/* Text */}
      <div className="flex-1 xl:flex-5">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-primary" />

          <p className="text-sm tracking-[3px] text-matcha-green">
            LA NOSTRA FILOSOFIA
          </p>
        </div>

        <div className="my-4">
          <h2 className="font-heading text-black text-4xl font-light md:text-5xl">
            Una cucina fondata <br /> sulla tradizione, sempre <br /> aperta
            alla ricerca.
          </h2>
        </div>

        <div className="my-7">
          <p className="max-w-xl text-lg leading-relaxed text-[#975723]">
            Da oltre 15 anni Osteria Milano porta in tavola il gusto autentico
            della cucina italiana. Dalle ricette della tradizione agli
            ingredienti scelti con cura, ogni dettaglio nasce dal desiderio di
            offrire un'esperienza semplice, elegante e memorabile.
          </p>
        </div>
        <div className="my-7 pb-8 border-b border-b-gray-300">
          <p className="max-w-xl text-lg leading-relaxed text-[#975723]">
            Crediamo che la cucina sia prima di tutto un atto d'ospitalità: un
            modo di accogliere, di raccontare un territorio e di creare momenti
            da condividere.
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h3 className="mr-4 font-heading text-4xl text-matcha-green">
              15 +
            </h3>

            <p className="text-md mt-2 tracking-[2px] text-[#975723]">
              ANNI DI ATTIVITA'
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="mr-4 font-heading text-4xl text-matcha-green">40</h3>

            <p className="text-md mt-2 tracking-[2px] text-[#975723]">
              RICETTE DI STAGIONE
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="mr-4 font-heading text-4xl text-matcha-green">
              120
            </h3>

            <p className="text-md mt-2 tracking-[2px] text-[#975723]">
              ETICHETTE DI VINI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantStory;
