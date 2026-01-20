import ContactForm from "../common/contactForm/contactForm";

export default function ContactSection() {
  return (
    <div id="contact" className="px-8 md:px-24 py-8 bg-b1 relative overflow-hidden isolate">
      {/* <div className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-soft-light -z-10">
        <div className="h-full w-full bg-[url('/noiseTexture.png')] bg-repeat" />
      </div> */}
      <div className="flex flex-col md:flex-row items-center mb-20 gap-4 z-20">
        <h2 className="text-white text-[32px] font-semibold">
          Kapcsolat
        </h2>
        <span className="h-0.5 w-full bg-b3" />
      </div>
      <ContactForm />
    </div>
  );
}
