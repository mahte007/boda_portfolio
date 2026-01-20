import Image from "next/image";
import Button from "../common/button/button";

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:block lg:relative lg:w-full lg:h-125 justify-between">
      {/* Image */}
      <Image
        src="/mock_hero.png"
        alt="hero"
        className="lg:object-cover lg:absolute lg:right-0 lg:h-125"
        priority
        width={1050}
        height={500}
        style={{
              maxWidth: "100%",
              height: "auto",
            }}
      />

      {/* Gradient */}
      <div className="hidden lg:block lg:absolute right-0 bg-[linear-gradient(100deg,rgba(255,255,255,1)_30%,rgba(0,0,0,0)_60%)] xl:bg-[linear-gradient(100deg,rgba(255,255,255,1)_20%,rgba(0,0,0,0)_60%)] w-262.5 h-125" />

      {/* Text */}
      <div className="flex flex-col items-center text-center md:items-start md:text-left lg:absolute xl:left-25 lg:top-2/4 lg:-translate-y-1/2 z-10 lg:max-w-[60%] px-4 md:px-12 py-8 lg:py-0">
        <h1 className="uppercase text-[44px] xl:text-center text-b2 font-bold mb-8">
          Pénzügyi <span className="text-b3">Tanácsadó</span>
          <br />
          <span className="flex justify-center md:justify-start items-center gap-4">
            <span className="hidden xl:block h-0.5 w-full bg-b3" />
            Pécsen
            <span className="hidden xl:block h-0.5 w-full bg-b3" />
          </span>
        </h1>
        <h2 className="text-[32px] xl:text-center font-semibold text-b2 mb-20">
          Segítek elérni pénzügyi céljadiat
        </h2>
        <Button variant="primary" className="w-64" href="#contact">
          Kérj konzultációt!
        </Button>
      </div>
    </div>
  );
}
