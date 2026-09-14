import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import contattiHero from "../assets/c83c6cde8_generated_86a222c6.jpg";
import ContattiHero from "../Components/Contatti/ContattiHero";
import DetailsContatti from "../Components/Contatti/DetailsContatti";

const Contatti = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${contattiHero})` }}
      >
        <Navbar />
        <ContattiHero />
      </section>
      <main>
        <DetailsContatti />
        <Footer />
      </main>
    </>
  );
};

export default Contatti;
