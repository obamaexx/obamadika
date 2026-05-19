"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "../Profil2/Icon.png";
import GambarSekolah from "./GambarSekolah.png";
import Logo from "./Logo.png";
import Struktur from "./Struktur.png";

export default function Navbar() {
  const [openProfil, setOpenProfil] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <header className="bg-green-950 text-white px-4 md:px-10 py-4 sticky top-0 z-50 shadow-lg">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="Logo Sekolah"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            />
            <h1 className="font-bold leading-tight text-xs sm:text-sm md:text-lg">
              SMP AL-ARAF BONE
              <span className="block text-[10px] md:text-xs text-gray-300">
                Cerdas | Mandiri | Islami
              </span>
            </h1>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <Link href="/Beranda" className="hover:text-yellow-400 transition">
              Beranda
            </Link>
            <div ref={profilRef} className="relative">
              <button
                onClick={() => {
                  setOpenProfil(!openProfil);
                  setOpenInfo(false);
                }}
                className="hover:text-yellow-400 transition flex items-center gap-1"
              >
                Profil ⌄
              </button>
              {openProfil && (
                <div className="absolute top-8 left-0 w-44 bg-white text-black rounded-xl shadow-xl py-2">
                  <Link
                    href="/Profil"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Struktur
                  </Link>
                  <Link
                    href="/Profil2"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Visi Misi
                  </Link>
                  <Link
                    href="/Profil3"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Fasilitas
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/Prestasis"
              className="hover:text-yellow-400 transition"
            >
              Prestasi
            </Link>
            <div ref={infoRef} className="relative">
              <button
                onClick={() => {
                  setOpenInfo(!openInfo);
                  setOpenProfil(false);
                }}
                className="hover:text-yellow-400 transition flex items-center gap-1"
              >
                Informasi ⌄
              </button>
              {openInfo && (
                <div className="absolute top-8 left-0 w-44 bg-white text-black rounded-xl shadow-xl py-2">
                  <Link
                    href="/Informasi"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Berita
                  </Link>
                  <Link
                    href="/Ekstrakulikuler"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Ekstrakulikuler
                  </Link>
                </div>
              )}
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-green-900 transition">
              <a href="/KontakKami">Kontak Kami</a>
            </button>
          </nav>
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
        {mobileMenu && (
          <div className="md:hidden mt-4 flex flex-col gap-3 bg-green-900 p-4 rounded-xl text-sm animate-slideDown">
            <Link href="/Builder" className="hover:text-yellow-400">
              Beranda
            </Link>
            <div>
              <button
                onClick={() => setOpenProfil(!openProfil)}
                className="w-full text-left hover:text-yellow-400"
              >
                Profil ⌄
              </button>
              {openProfil && (
                <div className="ml-4 mt-2 flex flex-col gap-2 text-gray-200">
                  <Link href="/Profil">Struktur</Link>
                  <Link href="/Profil2">Visi Misi</Link>
                  <Link href="/Profil3">Fasilitas</Link>
                </div>
              )}
            </div>
            <Link href="/Prestasis" className="hover:text-yellow-400">
              Prestasis
            </Link>
            <div>
              <button
                onClick={() => setOpenInfo(!openInfo)}
                className="w-full text-left hover:text-yellow-400"
              >
                Informasi ⌄
              </button>
              {openInfo && (
                <div className="ml-4 mt-2 flex flex-col gap-2 text-gray-200">
                  <Link href="/Informasi">Berita</Link>
                  <Link href="/Ekstrakulikuler">Ekstrakulikuler</Link>
                </div>
              )}
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-green-900 transition">
              <a href="/KontakKami">Kontak Kami</a>
            </button>
          </div>
        )}
      </header>
      <div className="relative h-[250px] sm:h-[350px] md:h-[500px]">
        <Image
          src={GambarSekolah}
          alt="Gambar Sekolah"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute mt-119 left-1/2 -translate-x-1/2 bg-white px-3 sm:px-6 py-2 sm:py-3 rounded-full shadow text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
          Profil - Struktur
        </div>
      </div>
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <Image
          src={Logo}
          alt="Logo Sekolah"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto"
        />
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-green-950 mt-10 px-4">
          Struktur Organisasi
        </h2>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-green-950 mt-4 px-4">
          SMP AL ARAF
        </h2>
      </div>
      <div className="pb-20 px-4">
        <Image
          src={Struktur}
          alt="Struktur Organisasi"
          className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto rounded-xl shadow-lg"
        />
      </div>
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
          <div className="text-sm md:text-right opacity-80">
            <Image
              src={Icon}
              alt="Icon"
              width={100}
              height={100}
              className="w-35 h-10 mt-2 mr-10 object-cover"
            />
            Dibuat oleh Nexusteam <br />
            Tailwind CSS & Next.js ©2026
          </div>
        </div>
      </footer>
    </div>
  );
}
