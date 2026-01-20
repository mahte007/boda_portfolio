import Image from "next/image";
import chevronDown from "/public/chevronDown.svg";
import { useCallback, useState } from "react";
import { useIsDesktop } from "@/utils/useIsDesktop";


type Step = {
  step?: string;
  title?: string;
  description?: string;
};

type TimelineProps = {
  timeline: Step[];
};

export default function Timeline({ timeline }: TimelineProps) {
  const isDesktop = useIsDesktop()
  const [openIndex, setOpenIndex] = useState<number | null>(0)


  const handleOpen = useCallback((index: number) => {
    if (isDesktop) return
    setOpenIndex(prev => (prev === index ? null : index))
  }, [isDesktop])

  
  return (
    <div className="flex flex-col xl:flex-row justify-between gap-8">
      {timeline.map((s, i) => {
        const isOpen = isDesktop || openIndex === i;

        return (
          <div
          key={s.step}
          className="flex flex-col items-center text-center xl:w-1/5 relative"
        >
          <div className="bg-b3 rounded-full w-14 h-14 flex items-center justify-center text-white text-[32px] mb-4 mt-4 xl:mt-0 xl:pointer-events-none" onClick={() => handleOpen(i)}>
            {s.step}
          </div>
          <div className="flex items-center flex-col text-b2 xl:pointer-events-none" onClick={() => handleOpen(i)}>
            <h3 className="text-[22px] font-semibold mb-2">{s.title}</h3>
            <p className={`transition-all duration-300 ease-out text-center ${isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>{s.description}</p>
            <Image className={`block xl:hidden mt-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} alt="down arrow" src={chevronDown} width={30} height={30} />
          </div>
          {i !== timeline.length - 1 && (
            <span className="hidden xl:block h-full w-px flex-1 bg-b3 absolute -right-5" />
          )}
          {i !== 0 && (
            <span className="block xl:hidden h-px w-full flex-1 bg-b3 absolute" />
          )}
        </div>
        )
      })}
    </div>
  );
}
