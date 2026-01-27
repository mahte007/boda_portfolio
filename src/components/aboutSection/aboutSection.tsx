import Image from "next/image";
import QuoteCard from "../common/quoteCard/quoteCard";

export default function AboutSection() {
  return (
    <div id="about" className="md:px-24 py-32 pb-16 bg-bgBlueTint">
      <div className="flex flex-col md:flex-row items-center mb-20 gap-4">
        <h2 className="text-b2 text-[32px] font-semibold">Rólam</h2>
        <span className="h-0.5 w-4/5 md:w-full bg-b3" />
      </div>
      <div className="flex flex-col justify-between xl:flex-row items-center xl:items-start gap-16">
        <div className="flex flex-col items-center md:items-start md:flex-row xl:w-2/3 gap-8">
          <Image
            alt="portrait"
            src="/portrait.jpeg"
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
              Boda Viktor vagyok, pénzügyi szakértő. Pénzügyi menedzser
              közgazdász diplomával és többéves tapasztalattal segítem magán- és
              vállalati ügyfeleimet pénzügyeik tudatos megtervezésében és hosszú
              távú céljaik elérésében.
            </p>
            <p className="text-b2 text-justify">
              Számomra a pénzügy nem különálló termékek összessége, hanem egy
              átgondolt, egymásra épülő rendszer. A finanszírozási, biztosítási,
              megtakarítási és befektetési döntéseket egységben kezelem, hogy
              ügyfeleim számára átlátható, személyre szabott és valóban működő
              megoldások szülessenek.
            </p>
            <p className="text-b2 text-justify">
              Munkámat egy felkészült szakmai csapat támogatja, így az
              együttműködés nem egyszeri tanácsadásról szól, hanem hosszú távú,
              stabil pénzügyi támogatásról. A cél a közös gondolkodás, a tiszta
              döntések és a kiszámítható pénzügyi háttér.
            </p>
            <p className="text-b2 text-justify">
              Egy kötetlen beszélgetés jó kiindulópont a pénzügyek rendezéséhez.
              Megnézzük az aktuális helyzetet, kijelöljük az irányt, és
              felépítjük a következő lépéseket. Keressen bizalommal.
            </p>
          </div>
        </div>
        <QuoteCard>
          Az egyszerű, átlátható és tartható pénzügyi döntések vezetnek valódi eredményekhez.
        </QuoteCard>
      </div>
    </div>
  );
}
