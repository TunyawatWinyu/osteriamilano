import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const localtion = useLocation();
  const isHomePage = localtion.pathname === "/home";
  const menu_navbar = [
    { name: "HOME", path: "/home" },
    { name: "MENU", path: "/menu" },
    { name: "CHI SIAMO", path: "/chi-siamo" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTATTI", path: "/contatti" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center px-6 lg:px-10 2xl:px-16 transition-all duration-300 ${scrolled ? "bg-[#efeeeed3] backdrop-blur-md shadow-md text-black px-[300px] py-[10px] " : isHomePage ? "bg-transparent px-[300px] py-[20px]" : "bg-[#efeeeed3] backdrop-blur-md shadow-md text-black px-[300px] py-[10px] "}`}
      >
        <a className="font-heading text-2xl tracking-widest cursor-pointer">
          OSTERIA <span className="mx-3">MILANO</span>
        </a>
        <ul className="flex">
          {menu_navbar.map((el) => (
            <li className="px-4 text-md cursor-pointer" key={el.name}>
              <NavLink
                to={el.path}
                className={({ isActive }) =>
                  `relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary after:duration-200 after:transition-all ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"} `
                }
              >
                {el.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link
          to="/prenotazione"
          className={`tracking-widest ${scrolled ? "bg-black text-white px-[30px] py-[10px] font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-matcha-green hover:text-white" : isHomePage ? "bg-white text-black px-[30px] py-[10px] font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-primary hover:text-white" : "bg-black text-white px-[30px] py-[10px] font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-matcha-green hover:text-white"}`}
        >
          <a>PRENOTA UN TAVOLO</a>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
