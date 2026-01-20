import Image from "next/image";
import Button from "../common/button/button";

export default function HeroSection() {
  return (
    <div className="relative w-full h-125">
      {/* Image */}
      <Image
        src="/mock_hero.png"
        alt="hero"
        className="object-cover absolute right-0 h-125"
        priority
        width={1050}
        height={500}
      />

      {/* Gradient */}
      <div className="absolute right-0 bg-[linear-gradient(100deg,rgba(255,255,255,1)_20%,rgba(0,0,0,0)_60%)] w-262.5 h-125" />

      {/* Text */}
      <div className="flex flex-col absolute left-25 top-2/4 -translate-y-1/2 z-10 max-w-[60%] px-12">
        <h1 className="uppercase text-[44px] text-center text-b2 font-bold mb-8">
          Pénzügyi <span className="text-b3">Tanácsadó</span>
          <br />
          <span className="flex items-center gap-4">
            <span className="h-0.5 w-full bg-b3" />
            Pécsen
            <span className="h-0.5 w-full bg-b3" />
          </span>
        </h1>
        <h2 className="text-[32px] text-center font-semibold text-b2 mb-20">
          Segítek elérni pénzügyi céljadiat
        </h2>
        <Button variant="primary" className="w-64" href="#contact">
          Kérj konzultációt!
        </Button>
      </div>
    </div>
  );
}
