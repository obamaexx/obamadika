"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../Profil/Logo.png";
import Icon from "../Profil2/Icon.png";
import Hafalan from "./Hafalan.png";
import Latar from "./Latar.png";
import Ngaji from "./Ngaji.png";
import Paskip from "./Paskip.png";
import LagiNgaji from "./LagiNgaji.png";

const allBerita = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: [
    "Kegiatan Gerakan Pramuka SMP Al-Araf Bone",
    "Salah Satu Siswi SMP Al-Araf Tasmi' JUZ 30",
    "Kegiatan Makan Bersama SMP Al-Araf Bone",
    "Kegiatan Literasi Pagi SMP Al-Araf Bone",
  ][i % 4],
  category: ["Pramuka", "Hafalan", "Kegiatan", "Literasi"][i % 4],
  date: "1 Januari 2026",
  author: "Admin",
  image: [Hafalan, Ngaji, Paskip, LagiNgaji][i % 4],
}));

const ITEMS_PER_PAGE = 4;

export default function BeritaPage() {
  const [page, setPage] = useState(1);
  const [animClass, setAnimClass] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const totalPages = Math.ceil(allBerita.length / ITEMS_PER_PAGE);
  const currentData = allBerita.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

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

  const go = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages || newPage === page || isAnimating)
      return;
    const dir = newPage > page ? 1 : -1;
    setIsAnimating(true);
    setAnimClass(
      dir > 0 ? "animate-slide-out-left" : "animate-slide-out-right",
    );
    setTimeout(() => {
      setPage(newPage);
      setAnimClass(
        dir > 0 ? "animate-slide-in-right" : "animate-slide-in-left",
      );
      setTimeout(() => {
        setAnimClass("");
        setIsAnimating(false);
      }, 350);
    }, 260);
  };

  return (
    <div className="min-h-screen bg-[#f5f3ee]">
      <style>{`
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(40px); }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-40px); }
        }
        .animate-slide-in-right  { animation: slideInRight  0.35s cubic-bezier(0.4,0,0.2,1) forwards; }
        .animate-slide-in-left   { animation: slideInLeft   0.35s cubic-bezier(0.4,0,0.2,1) forwards; }
        .animate-slide-out-right { animation: slideOutRight 0.25s cubic-bezier(0.4,0,0.2,1) forwards; }
        .animate-slide-out-left  { animation: slideOutLeft  0.25s cubic-bezier(0.4,0,0.2,1) forwards; }
      `}</style>

      <div className="relative h-[360px] md:h-[420px] overflow-hidden">
        <Image
          src={Latar}
          alt="Header"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-green-950/75" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

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
        <div className="absolute bottom-16 inset-x-0 flex flex-col items-center z-10 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white/85 tracking-widest uppercase">
            Pusat Informasi Sekolah
          </span>
        </div>
        <svg
          className="absolute bottom-0 left-0 right-0 w-full"
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 56 Q720 0 1440 56 L1440 56 L0 56Z" fill="#f5f3ee" />
        </svg>
      </div>
      <main className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <div className="flex items-end justify-between mt-14 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-green-950 font-serif">
              Berita Terbaru
            </h2>
            <p className="text-green-700/70 text-sm mt-1">
              Informasi kegiatan & pencapaian terkini SMP Al-Araf Bone
            </p>
          </div>
          <span className="rounded-full bg-green-900 text-green-100 text-xs font-semibold px-4 py-1.5">
            {allBerita.length} Artikel
          </span>
        </div>
        <div
          className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 overflow-hidden ${animClass}`}
        >
          {currentData.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden h-[160px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 rounded-full bg-amber-400 text-green-950 text-[10px] font-bold px-2.5 py-1 tracking-wide uppercase">
                  {item.category}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2">
                  <span>{item.date}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300 inline-block" />
                  <span>{item.author}</span>
                </div>
                <h3 className="text-sm font-semibold text-green-950 line-clamp-2 leading-snug mb-3">
                  {item.title}
                </h3>
                <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 hover:text-amber-600 transition-colors">
                  Baca Selengkapnya
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-50 group-hover:bg-amber-50 text-[10px] transition-colors">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => go(page - 1)}
            disabled={page === 1}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white text-green-900 flex items-center justify-center hover:bg-green-900 hover:text-white hover:border-green-900 disabled:opacity-30 transition"
          >
            ‹
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => go(n)}
              className={`w-10 h-10 rounded-full border font-medium text-sm transition ${
                page === n
                  ? "bg-green-900 text-white border-green-900"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-green-900 hover:text-white hover:border-green-900"
              }`}
            >
              {n}
            </button>
          ))}
          <button
            onClick={() => go(page + 1)}
            disabled={page === totalPages}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white text-green-900 flex items-center justify-center hover:bg-green-900 hover:text-white hover:border-green-900 disabled:opacity-30 transition"
          >
            ›
          </button>
        </div>
      </main>
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
