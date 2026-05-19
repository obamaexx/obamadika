
export default function Stats() {
  return (
    <section className="bg-green-950 text-white py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 max-w-5xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold text-yellow-400">1.234</h2>
          <p className="mt-2">Siswa & Siswi</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-yellow-400">37+</h2>
          <p className="mt-2">Guru & Staf</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-yellow-400">2+</h2>
          <p className="mt-2">Ekstrakurikuler</p>
        </div>
      </div>
    </section>
  );
}
