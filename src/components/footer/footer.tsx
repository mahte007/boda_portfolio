import instagram from "/public/instagram.svg";
import facebook from "/public/facebook.svg";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-between bg-b1 border-t border-b3 h-32 px-8 md:px-32 text-white py-8 items-center">
      <div>
        © {new Date().getFullYear()} {"Boda Viktor"}
      </div>
      <div className="flex gap-4">
        <a href="#">
          <Image alt="facebook" src={facebook} width={50} height={50} />
        </a>
        <a href="#">
          <Image alt="instagram" src={instagram} width={50} height={50} />
        </a>
      </div>
    </footer>
  );
}
