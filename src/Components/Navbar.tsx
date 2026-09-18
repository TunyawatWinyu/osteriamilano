import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  const menu_navbar = [
    { name: "HOME", path: "/home" },
    { name: "MENU", path: "/menu" },
    { name: "CHI SIAMO", path: "/chi-siamo" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTATTI", path: "/contatti" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Chiudi il menu quando cambi pagina
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navbarText = isHomePage && !scrolled ? "text-white" : "text-black";

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#efeeeed3] backdrop-blur-md shadow-md"
            : isHomePage
              ? "bg-transparent"
              : "bg-[#efeeeed3] backdrop-blur-md shadow-md"
        }`}
      >
        <div
          className={`flex justify-between items-center ${
            isHomePage && !scrolled ? "py-5" : "py-[10px]"
          } px-6 md:px-10 2xl:px-[300px] transition-all duration-300`}
        >
          {/* LOGO */}
          <Link
            to="/home"
            className={`font-heading text-xl md:text-2xl tracking-widest cursor-pointer ${navbarText}`}
          >
            OSTERIA <span className="mx-2 md:mx-3">MILANO</span>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex">
            {menu_navbar.map((el) => (
              <li
                className={`px-4 text-xs cursor-pointer tracking-widest whitespace-nowrap ${scrolled || !isHomePage ? "text-black" : "text-white"}`}
                key={el.name}
              >
                <NavLink
                  to={el.path}
                  className={({ isActive }) =>
                    `relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:duration-200 after:transition-all ${
                      isActive ? "after:w-full" : "hover:after:w-full"
                    }`
                  }
                >
                  {el.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* PRENOTAZIONE DESKTOP */}
          <Link
            to="/prenotazione"
            className={`hidden md:block tracking-widest text-sm ${
              scrolled || !isHomePage
                ? "bg-black text-white hover:bg-matcha-green"
                : "bg-white text-black hover:bg-primary hover:text-white"
            } px-[30px] py-[10px] font-semibold cursor-pointer transition duration-300 ease-in-out`}
          >
            <span className="hidden lg:inline">PRENOTA UN TAVOLO</span>
            <span className="inline lg:hidden">PRENOTA</span>
          </Link>

          {/* HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 ${navbarText}`}
            aria-label="Apri menu"
          >
            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />

            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`block w-6 h-px bg-current transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`px-6 pb-6 pt-4 ${
              isHomePage && !scrolled ? "text-white" : "text-black"
            }`}
          >
            <ul className="flex flex-col gap-5">
              {menu_navbar.map((el) => (
                <li key={el.name}>
                  <NavLink
                    to={el.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `tracking-widest text-sm font-semibold ${
                        isActive ? "text-primary" : ""
                      }`
                    }
                  >
                    {el.name}
                  </NavLink>
                </li>
              ))}

              {/* PRENOTAZIONE MOBILE */}
              <li className="pt-2">
                <Link
                  to="/prenotazione"
                  onClick={() => setIsOpen(false)}
                  className={`inline-block tracking-widest text-sm ${
                    isHomePage && !scrolled
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  } px-6 py-3 font-semibold`}
                >
                  PRENOTA UN TAVOLO
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
