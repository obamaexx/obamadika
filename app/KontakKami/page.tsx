"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Profil/Logo.png";
import Header from "../Beranda/House.png";
import Icon from "../Profil2/Icon.png";
import MapImage from "./MapImage.png";
export default function KontakPage() {
  const [openProfil, setOpenProfil] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const profilRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (profilRef.current && !profilRef.current.contains(e.target as Node))
        setOpenProfil(false);
      if (infoRef.current && !infoRef.current.contains(e.target as Node))
        setOpenInfo(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-[#f0f4f0] min-h-screen font-[family-name:var(--font-geist-sans)]">
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
      <div className="relative h-[280px] md:h-[360px] overflow-hidden">
        <Image
          src={Header}
          alt="Header SMP Al-Araf"
          fill
          priority
          className="object-cover opacity-150"
        />
        <div className="absolute inset-0"/>
        <div className="absolute top-8 right-16 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-green-400/10 rounded-full blur-2xl" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-yellow-400 text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-3">
            SMP AL-ARAF Bone
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Kontak Kami
          </h1>
        </div>
        <div className="absolute mt-70 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white text-green-900 px-6 py-2.5 rounded-full shadow-xl z-10 flex items-center gap-2 text-sm font-medium border border-gray-100">
          <span className="text-black">Beranda</span>
          <span className="text-gray-300">/</span>
          <span className="text-black font-semibold">Kontak Kami</span>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-20 px-4 grid md:grid-cols-3 gap-5">
        <div className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
          <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
            <svg
              className="w-6 h-6 text-green-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-green-950 text-base mb-1">Alamat</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Griya Bukit Antang Sejahtera Blok C12, Kec. Manggala, Kel. Bitowa,
            Kota Makassar, Sulawesi Selatan 90234
          </p>
        </div>
        <div className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
          <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-yellow-100 transition-colors">
            <svg
              className="w-6 h-6 text-yellow-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-green-950 text-base mb-1">Telepon</h3>
          <a
            href="tel:085299499799"
            className="text-gray-500 text-sm hover:text-green-700 transition-colors"
          >
            0852-9949-9799
          </a>
        </div>
        <div className="group bg-white rounded-3xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1">
          <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
            <svg
              className="w-6 h-6 text-green-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="font-bold text-green-950 text-base mb-1">
            Jam Operasional
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Senin – Jumat
            <br />
            <span className="text-green-700 font-semibold">
              07.00 – 15.30 WITA
            </span>
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10 px-4">
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-gray-100">
          <div className="relative">
            <Image
              src={MapImage}
              alt="Peta Lokasi SMP Al-Araf Bone"
              width={1000}
              height={500}
              className="w-full h-[260px] md:h-[380px] object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-2xl shadow-lg px-4 py-2.5 flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-600 rounded-full animate-pulse" />
              <span className="text-green-900 text-xs font-semibold">
                SMP Al-Araf Bone
              </span>
            </div>
          </div>
          <div className="bg-green-950 text-white px-8 md:px-14 py-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-yellow-400/15 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-yellow-400 text-sm tracking-wide uppercase mb-2">
                    Alamat Lengkap
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Griya Bukit Antang Sejahtera Blok C12,
                    <br />
                    Kecamatan Manggala, Kelurahan Bitowa,
                    <br />
                    Antang, Kota Makassar, Sulawesi Selatan 90234
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-yellow-400/15 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-yellow-400 text-sm tracking-wide uppercase mb-2">
                    Nomor Telepon
                  </h3>
                  <a
                    href="tel:085299499799"
                    className="text-gray-300 text-sm hover:text-yellow-400 transition-colors"
                  >
                    0852-9949-9799
                  </a>
                  <p className="text-gray-500 text-xs mt-1">
                    Senin – Jumat, 07.00 – 15.30 WITA
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-gray-400 text-xs">
                Kami siap membantu Anda. Jangan ragu untuk menghubungi kami.
              </p>
              <a
                href="tel:085299499799"
                className="inline-flex items-center gap-2 bg-yellow-400 text-green-950 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-yellow-300 transition-colors shadow-lg shadow-yellow-500/20 flex-shrink-0"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                Hubungi Sekarang
              </a>
            </div>
          </div>
        </div>
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
