import { Link } from "react-router-dom";
import reservationImage from "../../assets/be5f94efa_generated_6a41031e.jpg";

const ReservationCta = () => {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{ backgroundImage: `url(${reservationImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="flex max-w-4xl flex-col items-center text-center">
          {/* Label */}
          <div className="flex items-center gap-4">
            <div className="h-px w-12 bg-primary" />

            <p className="text-sm tracking-[3px] text-primary">PRENOTAZIONI</p>

            <div className="h-px w-12 bg-primary" />
          </div>

          {/* Title */}
          <h2 className="my-4 font-heading text-4xl font-light text-white md:text-6xl lg:text-7xl">
            La tua prossima cena inizia qui.
          </h2>

          {/* Description */}
          <p className="my-4 max-w-2xl text-lg text-gray-200 md:text-xl">
            Scopri i sapori dell'Italia in un ambiente pensato per farti sentire
            a casa.
          </p>

          {/* Button */}
          <Link
            to="/prenotazione"
            className="mt-4 border bg-white px-8 py-3 font-semibold
                       tracking-widest text-black
                       transition duration-300
                       hover:bg-primary hover:text-white"
          >
            PRENOTA UN TAVOLO
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReservationCta;
