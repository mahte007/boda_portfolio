import Image from "next/image";
import Button from "../common/button/button";
import bars from "/public/bars.svg";
import x from "/public/x.svg";
import { useCallback, useState } from "react";
import { useIsDesktop, useIs1024Px } from "@/utils/useIsDesktop";

export default function Header() {
  const isDesktop = useIsDesktop();
  const is1024 = useIs1024Px();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex justify-between px-8 lg:px-24 py-4 sticky z-50 top-0 bg-sand items-center">
      {/* <Image alt="" src={"/BV.png"} width={58} height={58}/> */}
      <a href="#home">
        <h1 className="text-[32px] lg:text-[40px] xl:text-[44px] text-b3 font-playfair font-bold">
          Boda Viktor
        </h1>
      </a>
      <nav
        id="main-nav"
        aria-hidden={!menuOpen && !isDesktop}
        className={`
          absolute lg:static right-0 top-20
          flex flex-col lg:flex-row
          gap-4 lg:gap-8
          bg-sand lg:bg-transparent
          p-8 lg:p-0
          transition-all duration-300 ease-out
          overflow-hidden
          ${!is1024 ? (menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none") : "max-h-fit opacity-100"}
        `}
      >
        <Button variant="text" href="#home" onClickFunction={toggleMenu}>
          Kezdőlap
        </Button>
        {!is1024 && <span className="h-px w-full bg-b3 my-2" />}
        
        <Button variant="text" href="#about" onClickFunction={toggleMenu}>
          Rólam
        </Button>
        {!is1024 && <span className="h-px w-full bg-b3 my-2" />}
        
        <Button variant="text" href="#services" onClickFunction={toggleMenu}>
          Szolgáltatások
        </Button>
        {!is1024 && <span className="h-px w-full bg-b3 my-2" />}
        
        <Button variant="primary" href="#contact" onClickFunction={toggleMenu}>
          Foglalj időpontot
        </Button>
      </nav>
      <button
          className="block lg:hidden"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <Image alt="x" src={x} width={20} height={20} /> : <Image alt="hamburger menu" src={bars} width={20} height={20} />}
        </button>
    </header>
  );
}
