import Image from "next/image";
import House from "./House.png";
export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <Image
        src={House}
        alt="Background House"
        fill
        className="object-cover opacity-90"
        priority
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-bold">SELAMAT DATANG</h1>
        <h2 className="text-4xl md:text-5xl text-yellow-400 mt-2 font-semibold">
          DI SMP AL-ARAF <span className="text-2xl text-amber-300">BONE</span>
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-gray-200 leading-relaxed">
          Sekolah Islam adalah tempat lahirnya generasi beriman, berilmu, dan
          berprestasi.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <button className="bg-green-700 hover:bg-green-800 transition px-6 py-3 rounded-full font-semibold shadow-lg">
            <a href="/Profil" className="text-white no-underline">
              Selengkapnya
            </a>
          </button>
          <button className="border border-yellow-400 hover:bg-yellow-400 hover:text-black transition px-6 py-3 rounded-full font-semibold">
            <a
              href="https://nexusteam-sigma.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline"
            >
              Pendaftaran
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
