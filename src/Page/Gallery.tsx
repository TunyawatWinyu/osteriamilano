import galleryHero from "../assets/b75be6b78_generated_8a10188a.jpg";
import Navbar from "../Components/Navbar";
import GalleryHero from "../Components/Gallery/GalleryHero";
import Footer from "../Components/Footer";
import LayoutImageGallery from "../Components/Gallery/LayoutImageGallery";

const Gallery = () => {
  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${galleryHero})` }}
      >
        <Navbar />
        <GalleryHero />
      </section>
      <main>
        <LayoutImageGallery />
        <Footer />
      </main>
    </>
  );
};

export default Gallery;
