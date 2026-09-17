import image1 from "../../assets/1842db2ae_generated_87a8b843.jpg";
import image2 from "../../assets/3ac473027_generated_fdbc7a44.jpg";
import image3 from "../../assets/3beeb283f_generated_7353723f.jpg";
import image4 from "../../assets/46363ff1e_generated_c5d7d6f2.jpg";
import image5 from "../../assets/4a243097a_generated_4beb2a4c.jpg";
import image6 from "../../assets/4f9186917_generated_5beb8d56.jpg";
import image7 from "../../assets/7199d6bc6_generated_a1aa13d0.jpg";
import image8 from "../../assets/a440cdcc0_generated_e11bda1a.jpg";
import image9 from "../../assets/b75be6b78_generated_8a10188a.jpg";

const LayoutImageGallery = () => {
  const galleryImages = [
    {
      src: image1,
      className: "col-start-1 row-start-1 row-span-2",
    },
    {
      src: image2,
      className: "col-start-2 col-span-2 row-start-1",
    },
    {
      src: image3,
      className: "col-start-4 row-start-1",
    },
    {
      src: image4,
      className: "col-start-2 row-start-2",
    },
    {
      src: image5,
      className: "col-start-3 row-start-2 row-span-2",
    },
    {
      src: image6,
      className: "col-start-4 row-start-3",
    },
    {
      src: image7,
      className: "col-start-1 col-span-2 row-start-3",
    },
    {
      src: image8,
      className: "col-start-1 row-start-1 row-span-2",
    },
    {
      src: image9,
      className: "col-start-2 col-span-2 row-start-1",
    },
  ];
  return (
    <section className="mx-auto max-w-[1300px] px-6 lg:py-20 xl:py-24">
      <div className="grid grid-cols-4 gap-4">
        {/* immagini */}
        {galleryImages.map((image, index) => (
          <div key={index} className={`${image.className} overflow-hidden`}>
            <img
              src={image.src}
              alt={`Gallery ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LayoutImageGallery;
