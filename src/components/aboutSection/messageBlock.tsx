import clsx from "clsx";

type MessageBlockProps = {
  className?: string;
};

export default function MessageBlock({ className }: MessageBlockProps) {
  return (
    <div className={clsx("flex flex-col gap-4 w-3/4 justify-center", className)}>
      <h3 className="text-center md:text-start text-[22px] font-semibold">
        Több éves tapasztalattal a pénzügyi szektorban
      </h3>
      <p className="text-b2 text-justify">
        Boda Viktor vagyok, pénzügyi szakértő. Pénzügyi menedzser közgazdász
        diplomával és többéves tapasztalattal segítem magán- és vállalati
        ügyfeleimet pénzügyeik tudatos megtervezésében és hosszú távú céljaik
        elérésében.
      </p>
      <p className="text-b2 text-justify">
        Számomra a pénzügy nem különálló termékek összessége, hanem egy
        átgondolt, egymásra épülő rendszer. A finanszírozási, biztosítási,
        megtakarítási és befektetési döntéseket egységben kezelem, hogy
        ügyfeleim számára átlátható, személyre szabott és valóban működő
        megoldások szülessenek.
      </p>
      <p className="text-b2 text-justify">
        Munkámat egy felkészült szakmai csapat támogatja, így az együttműködés
        nem egyszeri tanácsadásról szól, hanem hosszú távú, stabil pénzügyi
        támogatásról. A cél a közös gondolkodás, a tiszta döntések és a
        kiszámítható pénzügyi háttér.
      </p>
      <p className="text-b2 text-justify">
        Egy kötetlen beszélgetés jó kiindulópont a pénzügyek rendezéséhez.
        Megnézzük az aktuális helyzetet, kijelöljük az irányt, és felépítjük a
        következő lépéseket. Keressen bizalommal.
      </p>
    </div>
  );
}
