import Image from "next/image";
import { ReactNode } from "react";

type CardProps = {
  title?: string;
  children?: ReactNode;
  icon?: string;
};

export default function Card({ children, icon, title }: CardProps) {
  return (
    <div className="flex flex-col items-center w-50 shadow-md/10 rounded-lg text-center justify-between p-6 bg-white">
      <h3 className="text-[22px] font-medium mb-4">{title}</h3>
      <div className="flex flex-col w-full items-center justify-center">
        <span className="h-px w-full bg-b3" />
        <Image alt={title ?? ""} src={icon ?? ""} width={100} height={100} className="mb-4" />
        <p>{children}</p>
      </div>
    </div>
  );
}
