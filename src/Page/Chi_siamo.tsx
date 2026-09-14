import Navbar from "../Components/Navbar";
import heroChiSiamo from "../assets/c83c6cde8_generated_86a222c6.jpg";
import Footer from "../Components/Home/Footer";
import ChiSiamoHero from "../Components/ChiSiamo/ChiSiamoHero";
import RestaurantStory from "../Components/ChiSiamo/RestaurantStory";
import ChefPresentation from "../Components/ChiSiamo/ChefPresentation";
import Diveder from "../Components/Devider";

const Chisiamo = () => {
  return (
    <header
      className="relative h-[450px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroChiSiamo})` }}
    >
      <section className="h-[450px] bg-black/70 text-white">
        <Navbar />

        {/* HERO CONTENT */}
        <section className="px-6 pt-24 pb-32 sm:px-10 sm:pt-32 lg:px-16 lg:pt-40 xl:px-24 xl:pt-45 2xl:px-75 ">
          {/* CHI SIAMO */}
          <ChiSiamoHero />
        </section>
        <RestaurantStory />
        <Diveder />
        <ChefPresentation />
        <Footer />
      </section>
    </header>
  );
};

export default Chisiamo;
