import { Link } from "react-router-dom";
import hero from "../../assets/hero.jpg";
import Navbar from "../../Components/Navbar";

const Hero = () => {
  return (
    <header
      className="relative min-h-screen md:min-h-0 md:h-[700px] lg:min-h-0 lg:h-[800px] bg-cover bg-center "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <section className="min-h-screen bg-black/50 text-white md:min-h-0 md:h-[700px] lg:min-h-0 lg:h-[800px]">
        <Navbar />

        {/* HERO CONTENT */}
        <section
          className="px-6
          pt-24
          pb-32
          sm:px-10
          sm:pt-32
          lg:px-16
          lg:pt-40
          xl:px-24
          xl:pt-[180px]
          2xl:px-[300px]"
        >
          {/* CATEGORY */}
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-primary" />

            <a className="text-sm font-semibold tracking-[3px] sm:tracking-[5px]">
              CUCINA ITALIANA · MILANO
            </a>
          </div>

          {/* TITLE */}
          <div className="py-3">
            <h1
              className="
                flex
                flex-col
                text-4xl
                font-heading
                leading-tight
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              Autentica cucina
              <span>italiana, nel</span>
              <span>cuore di Milano.</span>
            </h1>
          </div>

          {/* DESCRIPTION */}
          <div className="my-3">
            <p
              className="
                flex
                flex-col
                text-base
                leading-relaxed
                sm:text-lg
                lg:text-xl
              "
            >
              Tradizione, ingredienti selezionati e passione per la cucina
              italiana.
              <span>
                Un'esperienza pensata per essere assaporata lentamente.
              </span>
            </p>
          </div>

          {/* BUTTONS */}
          <div
            className="
              mt-10
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:gap-0
            "
          >
            <Link
              to="/prenotazione"
              className="
                inline-block
                px-8
                py-3
                text-center
                font-semibold
                tracking-widest
                bg-white
                text-black
                transition
                duration-300
                ease-in-out
                hover:bg-primary
                hover:text-white
                sm:mr-4
              "
            >
              PRENOTA UN TAVOLO
            </Link>

            <Link
              to="/menu"
              className="
                inline-block
                border
                px-8
                py-3
                text-center
                font-semibold
                tracking-widest
                transition
                duration-300
                ease-in-out
                hover:bg-white/15
                sm:px-10
                
              "
            >
              SCOPRI IL MENU
            </Link>
          </div>
        </section>

        {/* SCROLL INDICATOR */}
        <div
          className="
            absolute
            bottom-5
            left-1/2
            flex
            -translate-x-1/2
            flex-col
            items-center
            sm:bottom-7
            lg:bottom-8
          "
        >
          <p
            className="
              text-[9px]
              font-medium
              tracking-[3px]
              text-white/60
              sm:text-[10px]
              sm:tracking-[5px]
            "
          >
            SCOPRI
          </p>

          <div className="mt-3 h-10 w-px bg-white/40 sm:mt-4 sm:h-12">
            <div className="h-1/2 w-full animate-pulse bg-white" />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
