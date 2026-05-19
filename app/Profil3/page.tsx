"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Logo from "../Profil/Logo.png";
import House from "../Beranda/House.png";
import Icon from "../Profil2/Icon.png";
import Lapangan from "./Lapangan.png"
import Mushollah from "./Mushollah.png"

const fasilitas = [
  {
    title: "Area Sekolah",
    desc: "Area Depan Sekolah SMP Al-Araf Bone",
    image: House,
    detail:
      "Area sekolah SMP Al-Araf Bone memiliki halaman yang luas dan asri, dilengkapi dengan taman hijau dan area parkir yang memadai. Lingkungan yang bersih dan nyaman mendukung semangat belajar siswa setiap harinya.",
    details: [
      { label: "Lokasi", value: "Jl. Contoh No. 1, Bone, Sulawesi Selatan" },
      { label: "Luas Area", value: "±2.500 m²" },
      { label: "Renovasi", value: "Tahun 2022" },
    ],
  },
  {
    title: "Lapangan Upacara",
    desc: "Lapangan Upacara SMP Al-Araf Bone",
    image: Lapangan,
    detail:
      "Lapangan upacara yang luas digunakan untuk kegiatan upacara bendera setiap Senin, olahraga, dan berbagai kegiatan ekstrakurikuler. Dilengkapi dengan tiang bendera permanen dan tribun sederhana.",
    details: [
      { label: "Luas", value: "±1.200 m²" },
      { label: "Kapasitas", value: "±500 siswa" },
      { label: "Fasilitas", value: "Tiang bendera permanen" },
    ],
  },
  {
    title: "Musholla",
    desc: "Musholla SMP Al-Araf Bone",
    image: Mushollah,
    detail:
      "Musholla sekolah tersedia untuk kegiatan ibadah harian siswa dan guru. Dilengkapi dengan tempat wudhu yang bersih, sajadah, dan perlengkapan shalat. Dapat menampung jamaah hingga 100 orang.",
    details: [
      { label: "Kapasitas", value: "±100 jamaah" },
      { label: "Fasilitas", value: "Tempat wudhu, mukena, Al-Qur'an" },
    ],
  },
];

type FasilitasItem = (typeof fasilitas)[0];

export default function FasilitasPage() {
  const [openProfil, setOpenProfil] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [selectedFasilitas, setSelectedFasilitas] =
    useState<FasilitasItem | null>(null);

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

  useEffect(() => {
    if (selectedFasilitas) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedFasilitas]);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src={House}
          alt="Background Sekolah"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <header className="relative z-50 bg-green-950/90 backdrop-blur-sm text-white px-6 md:px-10 py-4 flex justify-between items-center shadow-lg">
          <div className="flex items-center gap-3">
            <Image
              src={Logo}
              alt="Logo Sekolah"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <h1 className="font-bold leading-tight">
              SMP AL-ARAF BONE
              <span className="block text-xs text-gray-300">
                Cerdas | Mandiri | Islami
              </span>
            </h1>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <Link
              href="/Beranda"
              className="hover:text-yellow-400 transition duration-300"
            >
              Beranda
            </Link>
            <div ref={profilRef} className="relative">
              <button
                onClick={() => {
                  setOpenProfil(!openProfil);
                  setOpenInfo(false);
                }}
                className="hover:text-yellow-400 transition duration-300"
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
            <Link
              href="/Prestasis"
              className="hover:text-yellow-400 transition duration-300"
            >
              Prestasi
            </Link>
            <div ref={infoRef} className="relative">
              <button
                onClick={() => {
                  setOpenInfo(!openInfo);
                  setOpenProfil(false);
                }}
                className="hover:text-yellow-400 transition duration-300"
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
            <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition duration-300">
              <a href="/KontakKami">Kontak Kami</a>
            </button>
          </nav>
        </header>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-bold">Fasilitas Sekolah</h2>
          <p className="mt-3 text-sm md:text-base opacity-90">
            Profil - Fasilitas SMP Al-Araf Bone
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[...fasilitas, ...fasilitas, ...fasilitas].map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedFasilitas(item)}
              className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-500 group"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-green-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {item.desc}
                </p>
                <p className="text-xs text-green-700 mt-3 font-medium">
                  Klik untuk lihat detail →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedFasilitas && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
          onClick={() => setSelectedFasilitas(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={selectedFasilitas.image}
                alt={selectedFasilitas.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <h3 className="absolute bottom-4 left-5 text-white text-2xl font-bold drop-shadow">
                {selectedFasilitas.title}
              </h3>
              <button
                onClick={() => setSelectedFasilitas(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg transition"
                aria-label="Tutup modal"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <p className="text-gray-700 text-sm leading-relaxed mb-5">
                {selectedFasilitas.detail}
              </p>
              <div className="border-t border-gray-100 pt-4 space-y-3">
                {selectedFasilitas.details.map((d, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-gray-500">{d.label}</span>
                    <span className="font-medium text-green-900">
                      {d.value}
                    </span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setSelectedFasilitas(null)}
                className="mt-5 w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
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
