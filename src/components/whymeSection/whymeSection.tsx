import Timeline from "../common/timeline/timeline";

export default function WhyMeSection() {
  const timeline = [
    {
      step: "1",
      title: "Konzultáció",
      description:
        "A célok, elvárások és üzleti igények részletes átbeszélése, hogy pontos képet kapjunk a feladatról.",
    },
    {
      step: "2",
      title: "Helyzetfelmérés",
      description:
        "A jelenlegi állapot, folyamatok és eszközök elemzése, valamint a fejlesztési lehetőségek feltárása.",
    },
    {
      step: "3",
      title: "Stratégiaalkotás",
      description:
        "Egy személyre szabott, hatékony megoldási terv kidolgozása a meghatározott célok eléréséhez.",
    },
    {
      step: "4",
      title: "Megvalósítás",
      description:
        "A jóváhagyott stratégia precíz kivitelezése, folyamatos egyeztetéssel és minőségellenőrzéssel.",
    },
    {
      step: "5",
      title: "Utánkövetés",
      description:
        "Folyamatos támogatás, finomhangolás és optimalizálás a hosszú távú eredmények biztosítása érdekében.",
    },
  ];

  //background: linear-gradient(0deg,rgba(233, 237, 243, 1) 0%, rgba(244, 241, 236, 1) 50%, rgba(238, 242, 246, 1) 100%);

  return (
    <div
      className="md:px-24 py-32 pb-16 bg-sand"
      style={{
        background:
          "linear-gradient(180deg, #EEF2F6 0%, #F4F1EC 20%, #F4F1EC 40%,  #F4F1EC 60%, #F4F1EC 80%, #EEF2F6 100%)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
        <span className="hidden md:block h-0.5 flex-1 bg-b3" />
        <h2 className="text-b2 text-[32px] font-semibold">Hogyan dolgozom?</h2>
        <span className="h-0.5 w-4/5 md:flex-1 bg-b3" />
      </div>
      <p className="text-b2 mx-auto w-4/5 md:w-full text-center mb-16">
        Egy átlátható folyamat az Ön pénzügyi céljaiért
      </p>
      <div className="shadow-md/10 rounded-lg px-5 pb-5 w-min xl:w-auto mx-auto">
        <Timeline timeline={timeline} />
      </div>
    </div>
  );
}
