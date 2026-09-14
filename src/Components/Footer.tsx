import { Mail } from "lucide-react";
import { CgInstagram } from "react-icons/cg";
import { CgFacebook } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import { Phone, Pin } from "reicon-react";
const Footer = () => {
  const menu_navbar = [
    { name: "HOME", path: "/home" },
    { name: "MENU", path: "/menu" },
    { name: "CHI SIAMO", path: "/chi-siamo" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTATTI", path: "/contatti" },
  ];
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5 px-6 sm:px-10 lg:px-20 xl:px-[100px] py-16 lg:py-[100px] bg-[#1f1c1c]">
      <div className="flex flex-col">
        <a className="font-heading text-2xl text-white tracking-widest cursor-pointer my-4">
          OSTERIA <span className="mx-3">MILANO</span>
        </a>
        <span className="text-[#858585] text-sm flex flex-col">
          Autentica cucina italiana nel cuore di <span> Milano.</span>
        </span>
        <div className="flex my-5">
          <CgInstagram
            size={24}
            className="text-[#858585] mr-4 cursor-pointer transition duration-200 ease-in-out hover:text-primary "
          />
          <CgFacebook
            size={24}
            className="text-[#858585] mr-4 cursor-pointer transition duration-200 ease-in-out hover:text-primary "
          />
        </div>
      </div>
      <div>
        <h3 className="flex flex-col text-xl font-heading text-primary tracking-widest cursor-pointer my-4">
          Navigazione
        </h3>
        <div>
          {menu_navbar.map((el) => {
            return (
              <li
                className=" text-[#858585] text-md cursor-pointer list-none my-4 transition duration-200 ease-in-out hover:text-[#b1b1b1]"
                key={el.name}
              >
                <NavLink to={el.path} className="text-sm">
                  {el.name}
                </NavLink>
              </li>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="flex flex-col text-xl font-heading text-primary tracking-widest cursor-pointer my-4">
          Contatti
        </h3>
        <div className="flex flex-col">
          <div className="flex">
            <Pin className="text-[#858585] mr-4" />
            <p className="text-[#858585]">Via XX Settembre 20, Milano</p>
          </div>
          <div className="flex mt-4">
            <Phone className="text-[#858585] mr-4" />
            <p className="text-[#858585]">+39 02 1234 5678</p>
          </div>
          <div className="flex mt-4">
            <Mail className="text-[#858585] mr-4" />
            <p className="text-[#858585]">info@osteriamilano.it</p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="flex flex-col text-xl font-heading text-primary tracking-widest cursor-pointer my-4">
          Orari
        </h3>
        <div className="flex flex-col">
          <p className="text-white">Lunedi</p>
          <span className="text-[#858585] text-sm">Chiuso</span>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-white">Martedì-Venerdì</p>
          <span className="text-[#858585] text-sm">
            12:00-15:00 19:00-23:30
          </span>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-white">Sabato</p>
          <span className="text-[#858585] text-sm">12:00-23:30</span>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-white">Doamenica</p>
          <span className="text-[#858585] text-sm">12:00-22:30</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
