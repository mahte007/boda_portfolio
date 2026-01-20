import chart from "/public/moneyChart.svg";
import insurance from "/public/insurance.svg";
import pension from "/public/pension.svg";
import loan from "/public/houseLoan.svg";
import phone from "/public/phone.svg";
import envelope from "/public/envelope.svg";
import location from "/public/location.svg";
import instagram from "/public/instagram.svg";
import facebook from "/public/facebook.svg";
import Card from "../common/card/card";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <div id="services" className="px-24 py-32 bg-bgBlueTint">
      <div className="flex items-center mb-20 gap-4">
        <h2 className="text-b2 text-[32px] font-semibold">Szolgáltatásaim</h2>
        <span className="h-0.5 w-full bg-b3" />
      </div>
      <div className="flex gap-24">
        <div className="flex gap-16">
          <Card icon={chart} title="Befektetési Tanácsadás">
            Befektetési portfóliók építése
          </Card>
          <Card icon={insurance} title="Biztosítási Megoldások">
            Élet- és vagyonbiztosítások
          </Card>
          <Card icon={pension} title="Nyugdíjtervezés">
            Gondtalan időskor megtervezése
          </Card>
          <Card icon={loan} title="Hitelügyintézés">
            Hitelügyintézés stressz nélkül
          </Card>
        </div>
        <div className="flex flex-col p-4 gap-8">
          <h2 className="text-[22px] font-medium text-b3">Elérhetőségek</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center text-b2">
              <Image alt="envelope" src={phone} width={25} height={25} />
              <p className="pl-2 pr-1 font-semibold">Telefon:</p>
              <a href="tel:+36 70 123 4567" className="underline">+36 70 123 4567</a>
            </div>
            <div className="flex items-center text-b2">
              <Image alt="phone" src={envelope} width={25} height={25} />
              <p className="pl-2 pr-1 font-semibold">Email:</p>
              <a href="mailto:boda.viktor@gmail.com" className="underline">boda.viktor@gmail.com</a>
            </div>
            <div className="flex items-center text-b2">
              <Image alt="location" src={location} width={25} height={25} />
              <p className="pl-2 pr-1 font-semibold">Cím:</p>
              <p>7621 Pécs, Valami utca 12</p>
            </div>
            <div className="flex gap-4 mt-4 items-center">
              <a href="#">
                <Image alt="facebook" src={facebook} width={50} height={50} />
              </a>
              <a href="#">
                <Image alt="instagram" src={instagram} width={50} height={50} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
