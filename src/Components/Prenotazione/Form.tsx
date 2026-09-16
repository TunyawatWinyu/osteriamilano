import { Link } from "react-router-dom";

const Form = () => {
  return (
    <form className="flex flex-col justify-center items-center">
      <div className="w-150 border-t border-t-gray-200 py-10 my-20">
        {/* NOME E COGNOME */}
        <div className="flex gap-6 mb-6">
          <label className="flex flex-1 flex-col">
            <span className="text-gray-400 tracking-widest">NOME *</span>
            <input
              type="text"
              name="name"
              className="w-full border-b border-b-gray-200 py-2 "
              placeholder="Mario"
            />
          </label>
          <label className="flex flex-1 flex-col">
            <span className="text-gray-400 tracking-widest">COGNOME *</span>
            <input
              type="text"
              name="surname"
              className="w-full border-b border-b-gray-200 py-2 "
              placeholder="Rossi"
            />
          </label>
        </div>

        {/* EMAIL E TELEFONO */}
        <div className="flex gap-6 mb-6">
          <label className="flex flex-1 flex-col">
            <span className="text-gray-400 tracking-widest">EMAIL *</span>
            <input
              type="text"
              name="email"
              className="w-full border-b border-b-gray-200 py-2 "
              placeholder="Mario@email.it"
            />
          </label>
          <label className="flex flex-1 flex-col">
            <span className="text-gray-400 tracking-widest">TELEFONO *</span>
            <input
              type="number"
              name="phone"
              className="w-full border-b border-b-gray-200 py-2 "
              placeholder="+39 333 1234567"
            />
          </label>
        </div>

        {/* DAT, ORA E PERSONE */}
        <div className="flex gap-4">
          <label className="flex flex-1 flex-col">
            <span className="text-gray-400 tracking-widest">DATA *</span>
            <input
              type="date"
              name="date"
              className="w-full border-b border-b-gray-200 py-2 "
            />
          </label>
          <label className="flex flex-1 flex-col">
            <span className="text-gray-400 tracking-widest">ORA *</span>
            <input
              type="time"
              name="time"
              className="w-full border-b border-b-gray-200 py-2 "
            />
          </label>
          <label className="flex flex-1 flex-col">
            <span className="text-gray-400 tracking-widest"> PERSONE *</span>
            <select
              name="peroson"
              className="w-full border-b border-b-gray-200 py-2"
            >
              {Array.from({ length: 12 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}{" "}
                  <span className="tracking-widest text-gray-400">PERSONE</span>
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* RICHIESTE SPECIALI */}

        <div className="mt-6">
          <label className="flex flex-col">
            <span className="text-lg text-gray-400 tracking-widest">
              Eventuali richieste speciali
            </span>
            <textarea
              name="request"
              className=" mt-5 border-b border-b-gray-200 h-40"
              placeholder="Allergia, intolleranze, occasioni Speciali...."
            ></textarea>
          </label>
        </div>
        <Link
          to="/prenotazione"
          className=" bg-black text-white px-[30px] py-[10px] font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-matcha-green hover:text-white"
        >
          <a>PRENOTA UN TAVOLO</a>
        </Link>
      </div>
    </form>
  );
};

export default Form;
