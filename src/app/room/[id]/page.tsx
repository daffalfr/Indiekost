import { rooms } from "../../../data/rooms";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function RoomDetail({ params }: { params: { id: string } }) {
  // Mencari data kamar berdasarkan ID yang diklik
  const room = rooms.find((r) => r.id === params.id);

  // Jika ID tidak ditemukan, tampilkan halaman 404
  if (!room) return notFound();

  return (
    <main className="min-h-screen bg-[#FDFBF7] py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Tombol Back */}
        <Link
          href="/"
          className="text-[#78350F] hover:text-[#451A03] font-medium mb-8 inline-block"
        >
          &larr; Kembali ke Beranda
        </Link>

        {/* Card Detail */}
        <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm">
          {/* Placeholder Foto */}
          <div className="h-72 bg-stone-100 rounded-2xl mb-8 flex items-center justify-center text-stone-400">
            Foto {room.name}
          </div>

          <h1 className="text-4xl font-extrabold text-[#451A03] mb-2 tracking-tight">
            {room.name}
          </h1>
          <p className="text-2xl text-[#92400E] font-semibold mb-6">
            {room.price}{" "}
            <span className="text-base text-stone-500 font-normal">
              / bulan
            </span>
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-[#451A03] mb-2 uppercase tracking-wider text-sm">
                Deskripsi
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {room.description}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-[#451A03] mb-2 uppercase tracking-wider text-sm">
                Fasilitas
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                {room.facilities.map((f, i) => (
                  <li key={i} className="flex items-center text-stone-600">
                    <span className="mr-2 text-[#78350F]">•</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <a
              href={`https://wa.me/628123456789?text=Halo IndieKost, saya ingin memesan ${room.name}`}
              target="_blank"
              className="block w-full text-center bg-[#78350F] text-white py-4 rounded-xl font-bold hover:bg-[#451A03] transition-all transform hover:scale-[1.02]"
            >
              Booking via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
