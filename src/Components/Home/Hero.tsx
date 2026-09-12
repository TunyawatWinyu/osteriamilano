import hero from "../../assets/hero.jpg";
import Navbar from "../../Components/Navbar";

const Hero = () => {
  return (
    <header
      className="min-h-screen bg-cover bg-center "
      style={{ backgroundImage: `url(${hero})` }}
    >
      <section className=" min-h-[100vh] text-white bg-black/50">
        <Navbar />

        <section className="mx-[300px] pt-[180px]">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-primary "></div>
            <a className="text-white text-sm tracking-[5px] font-semibold">
              CUCINA ITALIANA · MILANO
            </a>
          </div>
          <div className="py-3">
            <h1 className="flex flex-col text-7xl font-heading">
              Autentica cucina
              <span>italiana, nel</span>
              <span>cuore di Milano.</span>
            </h1>
          </div>
          <div className="my-3">
            <p className="flex flex-col text-xl">
              Tradizione, ingredienti selezionati e passione per la cucina
              italiana.{" "}
              <span>
                {" "}
                Un'esperienza pensata per essere assaporata lentamente.
              </span>
            </p>
          </div>
          <div className="my-[50px]">
            <a
              href="/prenotazione"
              className="py-3 px-[30px] bg-white text-black  tracking-widest mr-4 transition duration-300 ease-in-out cursor-pointer hover:bg-primary hover:text-white font-semibold"
            >
              PRENOTA UN TAVOLO
            </a>
            <a
              href="/menu"
              className="border py-3 px-[45px] font-semibold tracking-widest cursor-pointer transition duration-300 ease-in-out hover:bg-white/15"
            >
              SCOPRI IL MENU
            </a>
          </div>
        </section>

        <div className="flex flex-col items-center">
          <p className="tracking-[5px] text-xs text-gray-400">SCOPRI</p>
          <div className="w-px h-[60px] bg-gray-400 my-6 animate-pulse"></div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
