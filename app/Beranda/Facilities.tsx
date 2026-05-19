import Image from "next/image";
import Groups from "./Groups.png";
export default function Facilities() {
  return (
    <div>
      <section className="bg-green-900 text-white py-20 text-center">
        <h2 className="text-3xl font-serif">Fasilitas Di SMP</h2>
        <span className="text-yellow-400 text-3xl font-serif">
          AL-ARAF Bone
        </span>
        <span className="text-gray-300 text-xs mt-4 block max-w-xl mx-auto">
          Fasilitas SMP AL-ARAF Bone
        </span>
        <div>
          <Image
            src={Groups}
            alt="Fasilitas Sekolah"
            className="w-450 h-110 mx-auto rounded-xl shadow-lg mt-10"
          />
        </div>
        <div>
          <button className="bg-yellow-300 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-green-900 transition mt-10">
            <a href="/Profil3" className="text-black hover:text-green-900">
              selengkapnya
            </a>
          </button>
        </div>
      </section>
    </div>
  );
}
