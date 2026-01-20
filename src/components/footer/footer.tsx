import instagram from "/public/instagram.svg";
import facebook from "/public/facebook.svg";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-between bg-b1 border-t-1 border-b3 h-32 px-32 text-white py-8 items-center">
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
      {/* <div className={styles.linkContainer}>
          <a
            href="https://github.com/mahte007"
            target="_blank"
            aria-label="GitHub"
            className="flex items-center gap-2"
          >
            {" "}
            <Github size={16} /> {t("github")}
          </a>
          <a
            href="https://www.linkedin.com/in/horvath-mate3/"
            target="_blank"
            aria-label="LinkedIn"
            className="flex items-center gap-2"
          >
            {" "}
            <Linkedin size={16} /> {t("linkedIn")}
          </a> 
        </div>
          */}
    </footer>
  );
}
