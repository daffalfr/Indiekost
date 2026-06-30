import { rooms } from "../../../data/rooms";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../../../components/navbar";

export function generateStaticParams() {
  return rooms.map((room) => ({ id: room.id }));
}

export default async function RoomDetail({ params }) {
  const { id } = await params;
  const room = rooms.find((r) => r.id === id);
  if (!room) return notFound();

  const otherRooms = rooms.filter((r) => r.id !== room.id).slice(0, 3);

  return (
    <main className="w-full scroll-smooth bg-[#0E0B07] font-sans">
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div className="border-b border-white/[0.06] bg-[#0E0B07] px-5 py-5 sm:px-8 md:px-14">
        <Link
          href="/#kamar"
          className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#FDFBF7]/45 hover:text-[#FDFBF7]"
        >
          <i className="fa-solid fa-arrow-left text-[11px] transition-transform group-hover:-translate-x-0.5" />
          Kembali ke Semua Kamar
        </Link>
      </div>

      {/* ── Hero Image ── */}
      <section className="relative h-[300px] w-full overflow-hidden sm:h-[420px] md:h-[520px]">
        <Image
          src={room.image}
          alt={room.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E0B07] via-[#0E0B07]/10 to-transparent" />

        <span
          className={`absolute right-5 top-5 flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wide backdrop-blur-sm ${
            room.available
              ? "bg-[#1C1008]/75 text-[#FDFBF7]"
              : "border border-[#C96A00]/30 bg-[#C96A00]/20 text-[#FDFBF7]"
          }`}
        >
          <i
            className={`fa-solid ${room.available ? "fa-circle-check" : "fa-lock"} text-[10px]`}
          />
          {room.available ? "Tersedia" : "Terisi"}
        </span>

        <div className="absolute bottom-0 left-0 right-0 px-5 pb-8 sm:px-8 sm:pb-10 md:px-14 md:pb-12">
          <p className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[3px] text-[#C96A00]">
            <i className="fa-solid fa-bed" />
            Detail Kamar
          </p>
          <h1 className="font-display text-[32px] font-black leading-[1.05] text-[#FDFBF7] sm:text-[44px] md:text-[56px]">
            {room.name}
          </h1>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-[#FDFBF7] px-5 py-12 sm:px-8 md:px-14 md:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px] lg:gap-16">
          {/* Left: deskripsi & fasilitas */}
          <div>
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[3px] text-[#C96A00]">
              Harga Sewa
            </p>
            <p className="font-display mb-8 text-[32px] font-black text-[#1C1008] sm:text-[36px]">
              {room.price}
            </p>

            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-[3px] text-[#C96A00]">
              Tentang Kamar
            </p>
            <h2 className="font-display mb-3 text-[24px] font-bold text-[#1C1008] sm:text-[28px]">
              Nyaman, tenang, siap ditempati.
            </h2>
            <p className="mb-10 max-w-[560px] text-[15px] leading-relaxed text-[#8B6E52]">
              {room.description}
            </p>

            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[3px] text-[#C96A00]">
              Fasilitas Kamar
            </p>
            <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-2">
              {room.facilities.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-3 rounded-2xl border border-[#EDE3D4] bg-white px-4 py-3.5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FDF0E0] text-[12px] text-[#C96A00]">
                    <i className="fa-solid fa-check" />
                  </div>
                  <span className="text-[13.5px] font-medium text-[#1C1008]">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: sticky booking card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-[#EDE3D4] bg-white p-7 shadow-[0_18px_40px_rgba(28,16,8,0.06)]">
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[2px] text-[#8B6E52]">
                {room.name}
              </p>
              <p className="font-display mb-6 text-[28px] font-black text-[#1C1008]">
                {room.price}
              </p>

              {room.available ? (
                <a
                  href={`https://wa.me/6281200000000?text=${encodeURIComponent(
                    `Halo, saya tertarik dengan ${room.name} di IndieKost. Apakah masih tersedia?`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-3 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#C96A00] px-6 py-4 text-[14px] font-semibold text-white transition-all hover:bg-[#DE7700] hover:shadow-[0_8px_24px_rgba(201,106,0,0.35)]"
                >
                  <i className="fa-brands fa-whatsapp text-[16px]" />
                  Tanya & Booking via WhatsApp
                </a>
              ) : (
                <div className="mb-3 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#F5EDE0] px-6 py-4 text-[14px] font-semibold text-[#8B6E52]">
                  <i className="fa-solid fa-lock text-[13px]" />
                  Kamar Sedang Terisi
                </div>
              )}

              <Link
                href="/#lokasi"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-[#EDE3D4] px-6 py-3.5 text-[13px] font-semibold text-[#1C1008] hover:border-[#C96A00] hover:text-[#C96A00]"
              >
                <i className="fa-solid fa-location-dot text-[12px]" />
                Lihat Lokasi
              </Link>

              <div className="mt-6 flex items-start gap-3 border-t border-[#EDE3D4] pt-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#FDF0E0] text-[13px] text-[#C96A00]">
                  <i className="fa-solid fa-circle-info" />
                </div>
                <p className="text-[12.5px] leading-relaxed text-[#8B6E52]">
                  Survei langsung bisa dijadwalkan sebelum booking. Admin kami
                  siap bantu kapan saja, 08.00–20.00 WIB.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Kamar Lainnya ── */}
      {otherRooms.length > 0 && (
        <section className="bg-[#FDFBF7] px-5 pb-16 sm:px-8 md:px-14 md:pb-24">
          <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[3px] text-[#C96A00]">
            <i className="fa-solid fa-bed" />
            Kamar Lainnya
          </p>
          <h2 className="font-display mb-8 text-[26px] font-black leading-[1.08] text-[#1C1008] sm:text-[32px]">
            Mungkin kamu suka kamar ini juga
          </h2>

          <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 sm:grid-cols-3">
            {otherRooms.map((r) => (
              <Link
                key={r.id}
                href={`/room/${r.id}`}
                className={`group flex flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${
                  r.available
                    ? "border-[#EDE3D4] hover:-translate-y-2 hover:border-[#C96A00] hover:shadow-[0_20px_48px_rgba(201,106,0,0.16)]"
                    : "pointer-events-none border-[#EDE3D4] opacity-55"
                }`}
              >
                <div className="relative h-[170px] w-full overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display mb-1 text-[17px] font-bold text-[#1C1008] group-hover:text-[#7A4000]">
                    {r.name}
                  </h3>
                  <p className="mb-3 text-[14px] font-bold text-[#C96A00]">
                    {r.price}
                  </p>
                  <span className="mt-auto flex items-center gap-1.5 text-[12px] font-bold text-[#C96A00]">
                    Lihat Detail
                    <i className="fa-solid fa-arrow-right text-[10px] transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Footer ── */}
      <footer className="flex flex-col items-center gap-8 border-t border-white/[0.06] bg-[#0E0B07] px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-0 md:px-14 md:py-12">
        <div className="text-center md:text-left">
          <div className="font-display text-[20px] font-black text-[#FDFBF7]">
            Indie<span className="text-[#C96A00]">Kost</span>
          </div>
          <div className="mt-1 text-[11px] text-[#FDFBF7]/20">
            © 2025 IndieKost. All rights reserved.
          </div>
        </div>
        <Link
          href="/#kontak"
          className="text-[13px] font-medium text-[#FDFBF7]/35 hover:text-[#FDFBF7]"
        >
          Hubungi Kami
        </Link>
      </footer>
    </main>
  );
}
