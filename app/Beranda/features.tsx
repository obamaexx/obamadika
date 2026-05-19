import Image from "next/image";
import Grid from "./Grid.png";
export default function Features() {
  return (
    <div>
      <section className="py-20 text-center">
        <h2 className="text-3xl text-green-900 font-bold">
          Mengapa Memilih AL-ARAF?
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto text-1xl text-serif">
          Sekolah Islam adalah tempat lahirnya generasi beriman, berilmu, dan
          berprestasi, siap menjadi penerus bangsa dan bersaing di kancah
          internasional.
        </p>
      </section>
      <div>
        <Image
          src={Grid}
          alt="Fitur Sekolah"
          className="w-350 h-115 mx-auto rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
