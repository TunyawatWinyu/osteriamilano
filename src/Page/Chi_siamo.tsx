import Navbar from "../Components/Navbar";
import heroChiSiamo from "../assets/c83c6cde8_generated_86a222c6.jpg";
import Footer from "../Components/Footer";
import ChiSiamoHero from "../Components/ChiSiamo/ChiSiamoHero";
import RestaurantStory from "../Components/ChiSiamo/RestaurantStory";
import ChefPresentation from "../Components/ChiSiamo/ChefPresentation";
import Diveder from "../Components/Devider";

const Chisiamo = () => {
  return (
    <>
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroChiSiamo})` }}
      >
        <Navbar />
        <ChiSiamoHero />
      </section>
      <main>
        <RestaurantStory />
        <Diveder />
        <ChefPresentation />
        <Footer />
      </main>
    </>
  );
};

export default Chisiamo;
