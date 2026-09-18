import { Envelope2, Phone, Pin, SquareShare } from "reicon-react";

const DetailsContatti = () => {
  return (
    <section className="mx-auto my-24 flex max-w-[1500px] flex-col gap-12 px-6 lg:my-20 lg:flex-row lg:items-center lg:gap-20 xl:px-8">
      {/* Text */}
      <div className="flex-1 xl:flex-5">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-primary" />

          <p className="text-sm tracking-[3px] text-matcha-green">CONTATTI</p>
        </div>

        <div className="my-4">
          <h2 className="font-heading text-black text-4xl font-light md:text-5xl">
            Vieni a trovarci
          </h2>
        </div>

        <div className="my-7">
          <p className="max-w-xl text-md leading-relaxed text-gray-600">
            Nel cuore di Milano, a pochi passi dal centro. Ti aspettiamo per
            un'esperienza da ricordare.
          </p>
        </div>
        <div className="my-7">
          <div className="flex gap-4">
            <Pin className="text-matcha-green" />
            <div className="flex flex-col">
              <p className="tracking-widest text-sm text-gray-500">INDIRIZZO</p>
              <p className="text-lg">Via XX Settembre 20, Milano</p>
            </div>
          </div>
        </div>
        <div className="my-7">
          <div className="flex gap-4">
            <Phone className="text-matcha-green" />
            <div className="flex flex-col">
              <p className="tracking-widest text-sm text-gray-500">TELEFONO</p>
              <p className="text-lg">+39 02 1234 5678</p>
            </div>
          </div>
        </div>
        <div className="my-7">
          <div className="flex gap-4">
            <Envelope2 className="text-matcha-green" />
            <div className="flex flex-col">
              <p className="tracking-widest text-sm text-gray-500">EMAIL</p>
              <p className="text-lg">info@osteriamilano.it</p>
            </div>
          </div>
        </div>
        <div className="my-7">
          <div className="flex gap-4">
            <Envelope2 className="text-matcha-green" />
            <div className="flex flex-col">
              <p className="tracking-widest text-sm text-gray-500 mb-5">
                ORARI DI APERTURA
              </p>
              <div className="flex justify-between gap-15">
                <div className="flex flex-col gap-3">
                  <p className="text-sm">Lunedì</p>
                  <p className="text-sm">Martedì – Venerdì</p>
                  <p className="text-sm">Sabato</p>
                  <p className="text-sm">Domenica</p>
                </div>
                <div className="flex flex-col items-end gap-3">
                  <p className="text-sm text-gray-600">Chiuso</p>
                  <p className="text-sm text-gray-600">
                    <span className="block sm:inline">12:00–15:00</span>
                    <span className="hidden sm:inline"> · </span>
                    <span className="block sm:inline">19:00–23:30</span>
                  </p>
                  <p className="text-sm text-gray-600">12:00–23:30</p>
                  <p className="text-sm text-gray-600">12:00–22:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-7">
          <div className="flex flex-col gap-4">
            <span className="font-heading text-black font-semibold text-sm tracking-widest">
              COME ARRIVARE
            </span>
            <a
              href="https://maps.app.goo.gl/UenA8PFfYnPLQBDu7"
              className="flex justify-center items-center gap-4 text-sm font-semibold tracking-widest border w-60 py-3 cursor-pointer transition duration-300 ease-in-out hover:bg-black hover:text-white"
            >
              APRI IN GOOLE MAPS <SquareShare size={15} />
            </a>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="relative w-full lg:w-1/2 lg:shrink-0">
        <div className="relative mx-auto aspect-square max-w-[550px] overflow-hidden border  border-gray-200  bg-[#f5f5f0] bg-[linear-gradient(to_right,#deded8_1px,transparent_1px),linear-gradient(to_bottom,#deded8_1px,transparent_1px)] bg-size-[40px_40px]">
          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            {/* Pin */}
            <div className="mb-4 text-matcha-green">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>

            {/* Restaurant name */}
            <h3 className="font-heading text-2xl text-black">Osteria Milano</h3>

            {/* Address */}
            <p className="mt-2 text-sm text-[#975723]">
              Via XX Settembre 20, Milano
            </p>

            {/* Google Maps */}
            <a
              href="https://maps.app.goo.gl/UenA8PFfYnPLQBDu7"
              target="_blank"
              rel="noopener noreferrer"
              className=" mt-5 text-xs tracking-[3px]  text-matcha-green transition hover:opacity-60
        "
            >
              APRI IN GOOGLE MAPS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsContatti;
