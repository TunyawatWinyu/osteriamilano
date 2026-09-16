import Navbar from "../Components/Navbar";
import PrenotazioneHero from "../Components/Prenotazione/PrenotazioneHero";
import prenotazioneHero from "../assets/d4cf47d52_generated_b00d7232.jpg";
import Form from "../Components/Prenotazione/Form";
import Footer from "../Components/Footer";

const Prenotazione = () => {
  return (
    <>
      <section
        className="relative h-100 lg:110 xl:h-120 2xl:h-125  bg-cover bg-center"
        style={{ backgroundImage: `url(${prenotazioneHero})` }}
      >
        <Navbar />
        <PrenotazioneHero />
      </section>
      <main>
        <Form />
      </main>
      <Footer />
    </>
  );
};

export default Prenotazione;
