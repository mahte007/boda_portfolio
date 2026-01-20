import Image from "next/image";
import quote from "/public/quote.svg";

import { ReactNode } from "react";

type QuoteCardProps = {
  children: ReactNode;
};

export default function QuoteCard({ children }: QuoteCardProps) {
  return (
    <div
      className="border-t-2 border-b3 rounded-2xl shadow-md/10 p-4 w-80 md:w-100 bg-white">
      <Image alt="quote" src={quote} width={50} height={50} className="mb-4" />
      <p className="font-playfair text-[28px] font-semibold">{children}</p>
    </div>
  );
}
