import Image from "next/image";
import Icon from "../Profil2/Icon.png";
export default function Footer() {
  return (
    <>
      <footer className="bg-green-900 text-white py-12 px-10 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-bold text-xl">SMP AL ARAF</h3>
            <p className="text-sm max-w-md mt-3 leading-relaxed opacity-80">
              Sekolah adalah tempat mencetak penerus bangsa yang berkualitas dan
              berprestasi di segala bidang serta mampu bersaing di dunia
              internasional.
            </p>
          </div>
          <div className="text-sm text-center md:text-right opacity-80">
            <Image
              src={Icon}
              alt="Icon"
              width={100}
              height={100}
              className="w-35 h-10 mt-2 ml-10"
            />
            Dibuat oleh Nexusteam <br />
            Tailwind CSS & Next.js ©2026
          </div>
        </div>
      </footer>
    </>
  );
}
