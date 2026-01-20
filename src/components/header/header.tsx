import Image from "next/image";
import Button from "../common/button/button";

export default function Header() {
  return (
    <header className="flex justify-between px-24 py-4 sticky z-50 top-0 bg-sand items-center">
      {/* <Image alt="" src={"/BV.png"} width={58} height={58}/> */}
      <a href="#home">
        <h1 className="text-[44px] text-b3 font-playfair font-bold">
          Boda Viktor
        </h1>
      </a>
      <div className="flex gap-8">
        <Button variant="text" href="#home">
          Kezdőlap
        </Button>
        <Button variant="text" href="#about">
          Rólam
        </Button>
        <Button variant="text" href="#services">
          Szolgáltatások
        </Button>
        {/* <Button variant="text">Kapcsolat</Button> */}
        <Button variant="primary" href="#contact">
          Foglalj időpontot
        </Button>
      </div>
    </header>
  );
}
