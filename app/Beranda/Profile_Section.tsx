import Image from "next/image";
import School from "./School.png";
export default function Profile() {
  return (
    <section className="py-20 flex flex-col md:flex-row items-center gap-10 px-10">
      <Image
        src={School}
        alt="Gambar Sekolah"
        className="w-350 h-150 mx-auto rounded-xl shadow-lg"
      />
    </section>
  );
}