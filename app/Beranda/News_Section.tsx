import Image from "next/image";
import Frame from "./Frame.png";
import Bingkai from "./Bingkai.png";
import Panah from "./Panah.png";

export default function News() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-950">
          Berita Terbaru Di SMP AL-ARAF Bone
        </h2>
        <p className="text-gray-600 mt-3">
          Informasi dan kegiatan terbaru sekolah
        </p>
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-6">
        <Image
          src={Panah}
          alt="Panah Kiri"
          className="w-12 h-12"
        />
        <Image
          src={Frame}
          alt="Frame Berita"
          className="w-full max-w-5xl h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition duration-300"
          priority
        />
        <Image
          src={Panah}
          alt="Panah Kanan"
          className="w-12 h-12"
        />
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-6 mt-12">
        <Image
          src={Panah}
          alt="Panah Kiri"
          className="w-12 h-12"
        />
        <Image
          src={Bingkai}
          alt="Bingkai Berita"
          className="w-full max-w-5xl h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition duration-300"
          priority
        />
        <Image
          src={Panah}
          alt="Panah Kanan"
          className="w-12 h-12"
        />
      </div>
    </section>
  );
}
