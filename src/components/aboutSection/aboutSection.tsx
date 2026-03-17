import Image from "next/image";
import QuoteCard from "../common/quoteCard/quoteCard";
import MessageBlock from "./messageBlock";

export default function AboutSection() {
  return (
    <div id="about" className="md:px-24 py-32 pb-16 bg-bgBlueTint">
      <div className="flex flex-col md:flex-row items-center mb-20 gap-4">
        <h2 className="text-b2 text-[32px] font-semibold">Rólam</h2>
        <span className="h-0.5 w-4/5 md:w-full bg-b3" />
      </div>
      <div className="flex flex-col justify-between xl:flex-row items-center xl:items-start gap-16">
        <div className="flex flex-col items-center md:items-center 2xl:flex-row xl:w-1/3 2xl:w-2/3 gap-8">
          <Image
            alt="portrait"
            src="/boda.webp"
            width={245}
            height={245}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <QuoteCard className="block 2xl:hidden">
            Az egyszerű, átlátható és tartható pénzügyi döntések vezetnek valódi
            eredményekhez.
          </QuoteCard>
          <MessageBlock className="hidden 2xl:block" />
        </div>
        <QuoteCard className="hidden 2xl:block">
          Az egyszerű, átlátható és tartható pénzügyi döntések vezetnek valódi
          eredményekhez.
        </QuoteCard>
        <MessageBlock className="block 2xl:hidden" />
      </div>
    </div>
  );
}
