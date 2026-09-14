import Diveder from "../Components/Devider";
import CustomerReviews from "../Components/Home/CustomerReviews";
import Features from "../Components/Home/Features";
import Footer from "../Components/Footer";
import Hero from "../Components/Home/Hero";
import MenuPreview from "../Components/Home/MenuPreview";
import Philosophy from "../Components/Home/Philosophy";
import ReservationCta from "../Components/Home/ReservationCta";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <main>
          <Philosophy />
          <Diveder />
          <Features />
          <Diveder />
          <MenuPreview />
          <Diveder />
          <CustomerReviews />
          <ReservationCta />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
