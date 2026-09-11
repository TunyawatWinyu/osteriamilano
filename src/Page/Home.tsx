import Navbar from "../Components/Navbar";
import hero from "../assets/hero.jpg";
import hero2 from "../assets/7199d6bc6_generated_a1aa13d0.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlantWilt } from "@fortawesome/free-solid-svg-icons/faPlantWilt";

const Home = () => {
  return (
    <>
      <div>
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
        <main>
          <section className="flex justify-between mx-[300px] my-[200px] ">
            <div className="flex flex-col justify-center">
              <div className="flex items-center">
                <div className="h-px w-[50px] bg-primary mr-4"></div>
                <p className="text-matcha-green tracking-[3px] text-sm">
                  LA NOSTRA FILOSOFIA
                </p>
              </div>
              <div className="my-4">
                <h1 className="flex flex-col font-heading text-5xl font-light">
                  La tradizione italina,
                  <span>reinterpretata con eleganza.</span>
                </h1>
              </div>
              <div className="my-7">
                <h3 className="flex flex-col text-[#975723] text-[20px] font-normal">
                  Osteria Milano nasce dall'amore per la cucina italiana e dal
                  <span>
                    desiderio di creare un luogo dove sapori autentici,
                  </span>
                  <span>
                    ingredienti di qualità e ospitalità si incontrano.
                  </span>
                </h3>
              </div>
              <div className="flex items-center gap-10">
                <div className="flex items-center">
                  <h2 className="font-heading text-6xl text-matcha-green mr-4">
                    15
                  </h2>
                  <p className="flex flex-col text-[#975723] text-[18px] tracking-[2px]">
                    ANNI DI <span>CUCINA ITALIANA</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <div className="absolute bottom-[-800px] left-[820px] border border-primary w-45 py-[95px]"></div>
              <img src={hero2} className="h-[550px]" alt="Cucina italiana" />
            </div>
          </section>
          <div className="h-px w-full bg-gray-300"></div>
          <section className="flex justify-center bg-gray-50 py-[100px]">
            <div className="bg-white flex items-center justify-center h-60">
              <div className="flex flex-col mx-15">
                <FontAwesomeIcon
                  className="text-matcha-green"
                  icon={faPlantWilt}
                  size="xl"
                />
                <h3 className="font-heading text-2xl my-5">
                  Ingredienti selezionati
                </h3>
                <p className="text-md flex flex-col">
                  Selezioniamo ogni giorno materie
                  <span> prime fresche e di stagione.</span>
                </p>
              </div>
              {/* divider */}
              <div className="w-px h-full bg-primary my-6"></div>
              <div className="flex flex-col mx-15">
                <FontAwesomeIcon
                  className="text-matcha-green"
                  icon={faPlantWilt}
                  size="xl"
                />
                <h3 className="font-heading text-2xl my-5">
                  Ingredienti selezionati
                </h3>
                <p className="text-md flex flex-col">
                  Selezioniamo ogni giorno materie
                  <span> prime fresche e di stagione.</span>
                </p>
              </div>
              {/* divider */}
              <div className="w-px h-full bg-primary my-6"></div>
              <div className="flex flex-col mx-15">
                <FontAwesomeIcon
                  className="text-matcha-green"
                  icon={faPlantWilt}
                  size="xl"
                />
                <h3 className="font-heading text-2xl my-5">
                  Ingredienti selezionati
                </h3>
                <p className="text-md flex flex-col">
                  Selezioniamo ogni giorno materie
                  <span> prime fresche e di stagione.</span>
                </p>
              </div>
              {/* divider */}
              <div className="w-px h-full bg-primary my-6"></div>
              <div className="flex flex-col mx-15">
                <FontAwesomeIcon
                  className="text-matcha-green"
                  icon={faPlantWilt}
                  size="xl"
                />
                <h3 className="font-heading text-2xl my-5">
                  Ingredienti selezionati
                </h3>
                <p className="text-md flex flex-col">
                  Selezioniamo ogni giorno materie
                  <span> prime fresche e di stagione.</span>
                </p>
              </div>
            </div>
          </section>
          <div className="border-gray-300 border-b-2"></div>
        </main>
      </div>
    </>
  );
};

export default Home;
