"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Profil/Logo.png";

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
    <header className="bg-green-950 text-white px-10 py-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      <Image
        src={Logo}
        alt="Logo Sekolah"
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
      />
      <h1 className="font-bold leading-tight mr-285">
        SMP AL-ARAF BONE
        <span className="block text-xs text-gray-300">
          Cerdas | Mandiri | Islami
        </span>
      </h1>
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
            className="hover:text-yellow-400 transition flex items-center gap-1"
          >
            Profil ⌄
          </button>
          {openProfil && (
            <div className="absolute top-8 left-0 w-44 bg-white text-black rounded-xl shadow-xl py-2 animate-fadeIn">
              <Link
                href="/Profil"
                className="block px-4 py-2 hover:bg-gray-300"
              >
                Struktur
              </Link>
              <Link
                href="/Profil2"
                className="block px-4 py-2 hover:bg-gray-300"
              >
                Visi Misi
              </Link>
              <Link
                href="/Profil3"
                className="block px-4 py-2 hover:bg-gray-300"
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
            className="hover:text-yellow-400 transition flex items-center gap-1"
          >
            Informasi ⌄
          </button>
          {openInfo && (
            <div className="absolute top-8 left-0 w-44 bg-white text-black rounded-xl shadow-xl py-2 animate-fadeIn">
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
        <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-green-900 transition">
          <a href="/KontakKami">Kontak Kami</a>
        </button>
      </nav>
    </header>
  );
}
