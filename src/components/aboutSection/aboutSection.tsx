import Image from "next/image";
import QuoteCard from "../common/quoteCard/quoteCard";

export default function AboutSection() {
  return (
    <div id="about" className="md:px-24 py-32 bg-bgBlueTint">
      <div className="flex flex-col md:flex-row items-center mb-20 gap-4">
        <h2 className="text-b2 text-[32px] font-semibold">Rólam</h2>
        <span className="h-0.5 w-4/5 md:w-full bg-b3" />
      </div>
      <div className="flex flex-col justify-between xl:flex-row items-center gap-16">
        <div className="flex flex-col items-center md:flex-row xl:w-2/3 gap-8">
          <Image
            alt="portrait"
            src="/mock_portrait.png"
            width={245}
            height={245}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <div className="flex flex-col gap-4 w-3/4 justify-center">
            <h3 className="text-center md:text-start text-[22px] font-semibold">
              Több éves tapasztalattal a pénzügyi szektorban
            </h3>
            <p className="text-b2 text-justify">
              Boda Viktor vagyok, független pénzügyi tanácsadó. Célom, hogy
              érthetően és őszintén segítsek eligazodni a pénzügyek világában,
              és olyan megoldásokat találjunk, amelyek valóban a te jövődet
              szolgálják. Hiszek abban, hogy a jól kezelt pénz szabadságot és
              biztonságot ad.
            </p>
          </div>
        </div>
        <QuoteCard>
          A jó pénzügyi terv egyszerű, átlátható és tartható.
        </QuoteCard>
      </div>
    </div>
  );
}
