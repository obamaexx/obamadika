"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Profil/Logo.png";
import Header from "../Beranda/House.png";
import Icon from "../Profil2/Icon.png";

const ekstrakurikuler = [
  {
    id: 1,
    title: "Pramuka",
    emoji: "⛺",
    desc: "Membentuk karakter mandiri dan kepemimpinan",
    image: Header,
  },
  {
    id: 2,
    title: "Futsal",
    emoji: "⚽",
    desc: "Melatih kerja sama tim dan sportivitas",
    image: Header,
  },
  {
    id: 3,
    title: "Tahfidz",
    emoji: "📖",
    desc: "Menghafal dan memahami Al-Qur'an",
    image: Header,
  },
  {
    id: 4,
    title: "Paskibra",
    emoji: "🚩",
    desc: "Membentuk kedisiplinan dan cinta tanah air",
    image: Header,
  },
  {
    id: 5,
    title: "Seni Tari",
    emoji: "🎭",
    desc: "Melestarikan budaya dan ekspresi seni",
    image: Header,
  },
  {
    id: 6,
    title: "PMR",
    emoji: "🏥",
    desc: "Palang Merah Remaja dan pertolongan pertama",
    image: Header,
  },
  {
    id: 7,
    title: "Basket",
    emoji: "🏀",
    desc: "Olahraga tim yang melatih kelincahan",
    image: Header,
  },
  {
    id: 8,
    title: "Robotik",
    emoji: "🤖",
    desc: "Teknologi dan inovasi masa depan",
    image: Header,
  },
  {
    id: 9,
    title: "Hadroh",
    emoji: "🥁",
    desc: "Seni musik islami penuh semangat",
    image: Header,
  },
];

export default function EkstrakurikulerPage() {
  const [openProfil, setOpenProfil] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
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
    <div className="bg-[#f0f4f0] min-h-screen">
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
      <div className="relative h-[260px] md:h-[340px] overflow-hidden">
        <Image
          src={Header}
          alt="Header"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0" />
        <div className="absolute top-8 right-16 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-green-400/10 rounded-full blur-2xl" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-yellow-400 text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-3">
            Informasi · SMP AL-ARAF
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Ekstrakurikuler
          </h1>
        </div>
        <div className="absolute mt-65 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white text-green-900 px-6 py-2.5 rounded-full shadow-xl z-10 flex items-center gap-2 text-sm font-medium border border-gray-100">
          <span className="text-black font-semibold">Informasi</span>
          <span className="text-gray-300">/</span>
          <span className="text-black font-semibold">Ekstrakurikuler</span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-4 text-center">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
          <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
          {ekstrakurikuler.length} Kegiatan Tersedia
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-green-950 mb-3">
          Pilihan Kegiatan Siswa
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
          Setiap siswa didorong untuk aktif dalam kegiatan ekstrakurikuler demi
          membentuk karakter unggul dan berbudi pekerti luhur.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {ekstrakurikuler.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white border border-gray-100"
            >
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-green-950/20 to-transparent transition-all duration-500 group-hover:from-green-950/90" />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-xl border border-white/30">
                  {item.emoji}
                </div>
                <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-400 rounded-xl flex items-center justify-center text-green-950 text-xs font-bold shadow-md">
                  {String(item.id).padStart(2, "0")}
                </div>
              </div>
              <div className="p-5">
                <h2 className="text-lg font-bold text-green-950 mb-1 group-hover:text-green-700 transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-green-700 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Selengkapnya</span>
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
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
