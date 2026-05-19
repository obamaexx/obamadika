"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Profil/Logo.png";
import House from "../Beranda/House.png";
import Icon from "./Icon.png";
export default function Navbar() {
  const [openProfil, setOpenProfil] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);

  const profilRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (profilRef.current && !profilRef.current.contains(e.target as Node)) {
        setOpenProfil(false);
      }

      if (infoRef.current && !infoRef.current.contains(e.target as Node)) {
        setOpenInfo(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-950 text-white px-6 md:px-10 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-3">
          <Image src={Logo} alt="Logo Sekolah" className="w-12 h-12" />
          <h1 className="font-bold leading-tight">
            SMP AL-ARAF BONE
            <span className="block text-xs text-gray-300">
              Cerdas | Mandiri | Islami
            </span>
          </h1>
        </div>
        <nav className="flex gap-6 items-center text-sm">
          <Link href="/Beranda" className="hover:text-yellow-400 transition">
            Beranda
          </Link>
          <div ref={profilRef} className="relative">
            <button
              onClick={() => {
                setOpenProfil(!openProfil);
                setOpenInfo(false);
              }}
              className="hover:text-yellow-400 transition"
            >
              Profil ⌄
            </button>
            {openProfil && (
              <div className="absolute top-8 left-0 w-44 bg-white text-black rounded-xl shadow-xl py-2">
                <Link
                  href="/Profil"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Struktur
                </Link>
                <Link
                  href="/Profil2"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Visi Misi
                </Link>
                <Link
                  href="/Profil3"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Fasilitas
                </Link>
              </div>
            )}
          </div>
          <Link href="/Prestasis" className="hover:text-yellow-400 transition">
            Prestasi
          </Link>
          <div ref={infoRef} className="relative">
            <button
              onClick={() => {
                setOpenInfo(!openInfo);
                setOpenProfil(false);
              }}
              className="hover:text-yellow-400 transition"
            >
              Informasi ⌄
            </button>
            {openInfo && (
              <div className="absolute top-8 left-0 w-44 bg-white text-black rounded-xl shadow-xl py-2">
                <Link
                  href="/Informasi"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Berita
                </Link>
                <Link
                  href="/Ekstrakulikuler"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Ekstrakulikuler
                </Link>
              </div>
            )}
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
            <a href="/KontakKami">Kontak Kami</a>
          </button>
        </nav>
      </header>
      <section className="relative h-[500px]">
        <Image
          src={House}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="bg-white px-6 py-3 rounded-full shadow font-semibold mt-123">
            Profil - Visi Misi
          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-900">Visi dan Misi</h2>
          <p className="text-gray-600 mt-2">Visi dan Misi SMP Al-Araf Bone</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex justify-center">
            <Image src={Logo} alt="Logo" className="w-[250px] h-auto" />
          </div>
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold text-green-900">Visi</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Menjadi sekolah unggul yang menghasilkan generasi beriman,
              berilmu, dan berprestasi yang mampu bersaing di tingkat nasional
              dan internasional.
            </p>
            <h3 className="text-2xl font-semibold mt-10 text-green-900">
              Misi
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Membentuk peserta didik yang berakhlak mulia, disiplin, kreatif,
              mandiri, serta memiliki kemampuan akademik dan non-akademik yang
              unggul.
            </p>
          </div>
        </div>
      </section>
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
    </div>
  );
}
