import { ChefHat } from "reicon-react";
import { Wineglass2 } from "reicon-react";
import { Leaf } from "reicon-react";
import { HandHeart } from "reicon-react";

const Features = () => {
  return (
    <section className="bg-gray-50 px-6 py-24 lg:px-16">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 bg-white md:grid-cols-2 lg:grid-cols-4">
        {/* Feature 1 */}
        <div className="p-10 lg:border-r lg:border-primary">
          <Leaf className="text-matcha-green" />

          <h3 className="my-5 font-heading text-2xl">
            Ingredienti selezionati
          </h3>

          <p className="leading-relaxed">
            Selezioniamo ogni giorno materie prime fresche e di stagione.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="p-10 lg:border-r lg:border-primary">
          <ChefHat className="text-matcha-green" />

          <h3 className="my-5 font-heading text-2xl">Tradizione italiana</h3>

          <p className="leading-relaxed">
            Ricette della tradizione italiana reinterpretate con eleganza.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="p-10 lg:border-r lg:border-primary">
          <Wineglass2 className="text-matcha-green" />

          <h3 className="my-5 font-heading text-2xl">Cucina artigianale</h3>

          <p className="leading-relaxed">
            Ogni piatto viene preparato con cura e attenzione ai dettagli.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="p-10">
          <HandHeart className="text-matcha-green" />

          <h3 className="my-5 font-heading text-2xl">Ospitalità</h3>

          <p className="leading-relaxed">
            Un ambiente accogliente dove sentirsi a casa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
