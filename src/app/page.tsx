import { rooms } from "../data/rooms";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/navbar"; 

const roomNum: Record<string, string> = {
  "kamar-1": "01",
  "kamar-2": "02",
  "kamar-3": "03",
  "kamar-4": "04",
};

const stripItems = [
  "AC & Kipas Angin",
  "WiFi 100 Mbps",
  "Kamar Mandi Dalam",
  "Akses 24 Jam",
  "Parkir Motor",
  "Dapur Bersama",
  "Lingkungan Aman",
];

const stats = [
  { num: "4", unit: " unit", label: "Total Kamar" },
  { num: "3", unit: " tersedia", label: "Bisa Ditempati" },
  { num: "1,2", unit: "jt", label: "Mulai Dari / bulan" },
  { num: "24", unit: "/7", label: "Akses Bebas" },
];

const mapDetails = [
  {
    icon: "📍",
    label: "Alamat Lengkap",
    val: "Jl. Anyer III No.14,\nMenteng, Jakarta Pusat 10310",
  },
  {
    icon: "🚇",
    label: "Akses Transportasi",
    val: "5 menit ke Stasiun Matraman\n10 menit ke Halte Busway Salemba",
  },
  {
    icon: "🏪",
    label: "Fasilitas di Sekitar",
    val: "Minimarket, kafe, RS Carolus,\nATM, warung makan",
  },
  {
    icon: "📞",
    label: "Hubungi Kami",
    val: "WA: 0812-xxxx-xxxx",
    highlight: true,
  },
];

const facilities = [
  {
    icon: "🛏️",
    title: "Kasur Premium",
    desc: "Kasur empuk berkualitas hotel agar tidur lebih nyaman.",
  },
  {
    icon: "❄️",
    title: "AC Dingin",
    desc: "Setiap kamar dilengkapi AC yang terawat.",
  },
  {
    icon: "🚿",
    title: "Kamar Mandi Dalam",
    desc: "Privasi lebih nyaman dengan kamar mandi pribadi.",
  },
  {
    icon: "📶",
    title: "WiFi Cepat",
    desc: "Internet hingga 100 Mbps untuk kerja maupun hiburan.",
  },
  {
    icon: "🛵",
    title: "Parkir Aman",
    desc: "Area parkir motor yang luas dan CCTV 24 jam.",
  },
  {
    icon: "🍳",
    title: "Dapur Bersama",
    desc: "Tersedia dapur lengkap yang bisa digunakan penghuni.",
  },
  {
    icon: "🧹",
    title: "Cleaning Service",
    desc: "Area bersama dibersihkan secara rutin setiap hari.",
  },
  {
    icon: "🔐",
    title: "Keamanan 24 Jam",
    desc: "Lingkungan aman dengan akses bebas selama 24 jam.",
  },
];

export default function Home() {
  return (
    <main className="w-full bg-[#0E0B07] font-sans">
      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero ── */}
      <section
        className="grid min-h-[580px] items-end"
        style={{ gridTemplateColumns: "1fr 1fr", background: "#0E0B07" }}
      >
        {/* Left */}
        <div
          style={{ paddingBottom: "72px", paddingTop: "120px" }}
          className="px-14"
        >
          <div className="mb-9 inline-flex items-center gap-2 rounded-full border border-[#C96A00]/25 bg-[#C96A00]/12 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C96A00]" />
            <span className="text-[11px] font-semibold uppercase tracking-[2px] text-[#C96A00]">
              3 Kamar Tersedia Sekarang
            </span>
          </div>
          <h1 className="font-display mb-7 text-[72px] font-black leading-none tracking-[-2px] text-[#FDFBF7]">
            Tinggal
            <br />
            nyaman,
            <br />
            <em className="italic text-[#C96A00]">langkah bebas.</em>
          </h1>
          <p className="mb-12 max-w-[380px] text-[17px] font-light leading-relaxed text-[#FDFBF7]/45">
            Kost premium di Jakarta Pusat — tenang, bersih, dan dekat ke
            mana-mana. Cocok buat kamu yang serius dengan hidup dan karir.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#kamar"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#C96A00] px-8 py-4 text-[14px] font-semibold text-white"
            >
              Lihat Semua Kamar →
            </a>
            <a
              href="#lokasi"
              className="inline-flex items-center gap-2.5 text-[14px] font-medium text-[#FDFBF7]/60"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sm">
                ↓
              </span>
              Cek Lokasi
            </a>
          </div>
        </div>

        {/* Right — Stats */}
        <div className="flex h-full flex-col justify-end border-l border-white/[0.06]">
          <div
            className="grid grid-cols-2"
            style={{
              gap: "1px",
              background: "rgba(255,255,255,0.04)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {stats.map(({ num, unit, label }) => (
              <div key={label} className="bg-[#0E0B07] px-7 py-8">
                <div className="font-display mb-1.5 text-[44px] font-black leading-none text-[#FDFBF7]">
                  {num}
                  <span className="text-[20px] text-[#C96A00]">{unit}</span>
                </div>
                <div className="text-[12px] font-medium tracking-wide text-[#FDFBF7]/35">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Amenity Strip ── */}
      <div
        className="flex items-center overflow-hidden bg-[#C96A00]"
        style={{ padding: "14px 56px" }}
      >
        {stripItems.map((item, i) => (
          <span key={item} className="flex shrink-0 items-center">
            <span
              className="text-[11px] font-bold uppercase tracking-[2.5px] text-white"
              style={{ padding: "0 28px" }}
            >
              {item}
            </span>
            {i < stripItems.length - 1 && (
              <span className="text-[16px] text-white/30">·</span>
            )}
          </span>
        ))}
      </div>

      {/* ── Facilities ── */}
      <section className="bg-[#F8F3EC] px-14 py-24">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[3px] text-[#C96A00]">
            Fasilitas
          </p>

          <h2 className="font-display text-[46px] font-black text-[#1C1008]">
            Semua yang kamu butuhkan
            <br />
            dalam satu tempat
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#8B6E52]">
            Kami menyediakan fasilitas lengkap agar pengalaman tinggal menjadi
            lebih nyaman, aman, dan menyenangkan.
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {facilities.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-[#E6D8C6] bg-white p-7 transition hover:-translate-y-2 hover:border-[#C96A00] hover:shadow-xl"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F7E8D5] text-3xl">
                {item.icon}
              </div>

              <h3 className="mb-2 text-[20px] font-bold text-[#1C1008]">
                {item.title}
              </h3>

              <p className="text-[14px] leading-7 text-[#8B6E52]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Room Grid ── */}
      <section id="kamar" className="bg-[#FDFBF7] px-14 py-24">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[3px] text-[#C96A00]">
              Pilihan Kamar
            </p>
            <h2 className="font-display text-[44px] font-black leading-[1.05] text-[#1C1008]">
              Temukan kamar
              <br />
              yang cocok buat kamu
            </h2>
          </div>
          <span className="text-[13px] font-medium text-[#8B6E52]">
            {rooms.filter((r) => r.available).length} dari {rooms.length} kamar
            masih tersedia
          </span>
        </div>

        <div className="grid grid-cols-4 gap-5">
          {rooms.map((room) => (
            <Link
              key={room.id}
              href={`/room/${room.id}`}
              className={`group flex flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${
                room.available
                  ? "border-[#EDE3D4] hover:-translate-y-2 hover:border-[#C96A00] hover:shadow-[0_20px_48px_rgba(201,106,0,0.14)]"
                  : "pointer-events-none border-[#EDE3D4] opacity-55"
              }`}
            >
              {/* ── Room Image ── */}
              <div className="relative h-[200px] w-full overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Nomor kamar */}
                <span className="font-display pointer-events-none absolute bottom-2 left-4 select-none text-[72px] font-black leading-none text-white/20">
                  {roomNum[room.id] ?? "—"}
                </span>

                {/* Badge status */}
                <span
                  className={`absolute right-3.5 top-3.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wide backdrop-blur-sm ${
                    room.available
                      ? "bg-[#1C1008]/75 text-[#FDFBF7]"
                      : "border border-[#C96A00]/30 bg-[#C96A00]/20 text-[#7A4000]"
                  }`}
                >
                  {room.available ? "Tersedia" : "Terisi"}
                </span>
              </div>

              {/* ── Body ── */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display mb-1 text-[19px] font-bold text-[#1C1008] group-hover:text-[#7A4000]">
                  {room.name}
                </h3>

                <p className="mb-3 text-[15px] font-bold text-[#C96A00]">
                  {room.price}
                </p>

                {/* Deskripsi singkat */}
                <p className="mb-4 text-[12px] leading-relaxed text-[#8B6E52]">
                  {room.description}
                </p>

                {/* Fasilitas */}
                <div className="mb-auto flex flex-wrap gap-1.5 pb-4">
                  {room.facilities.slice(0, 4).map((f) => (
                    <span
                      key={f}
                      className="rounded-lg bg-[#F5EDE0] px-2.5 py-1 text-[11px] font-medium text-[#6B5744]"
                    >
                      {f}
                    </span>
                  ))}
                  {room.facilities.length > 4 && (
                    <span className="rounded-lg bg-[#F5EDE0] px-2.5 py-1 text-[11px] font-medium text-[#8B6E52]">
                      +{room.facilities.length - 4} lainnya
                    </span>
                  )}
                </div>

                {/* Footer CTA */}
                <div className="flex items-center justify-between border-t border-[#EDE3D4] pt-3.5">
                  <span className="text-[12px] font-bold text-[#C96A00]">
                    {room.available ? "Lihat Detail →" : "Sedang Terisi"}
                  </span>
                  {room.available && (
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FDF0E0] text-[12px] text-[#C96A00]">
                      →
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Map / Lokasi Section ── */}
      <section
        id="lokasi"
        className="grid"
        style={{
          gridTemplateColumns: "420px 1fr",
          minHeight: "520px",
          background: "#0E0B07",
        }}
      >
        {/* Left */}
        <div className="flex flex-col justify-between border-r border-white/[0.06] px-12 py-14">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[3px] text-[#C96A00]">
              Lokasi
            </p>
            <h2 className="font-display mb-5 text-[38px] font-black leading-[1.1] text-[#FDFBF7]">
              Strategis di
              <br />
              <em className="italic text-[#C96A00]">Jakarta Pusat</em>
            </h2>
            <p className="text-[14px] font-light leading-[1.8] text-[#FDFBF7]/40">
              Dekat kampus, kantor, dan pusat kota. Kemana-mana gampang, pulang
              pun tenang.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {mapDetails.map(({ icon, label, val, highlight }) => (
              <div key={label} className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C96A00]/20 bg-[#C96A00]/12 text-base">
                  {icon}
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#FDFBF7]/25">
                    {label}
                  </p>
                  <p
                    className={`whitespace-pre-line text-[14px] font-medium leading-relaxed ${
                      highlight
                        ? "font-semibold text-[#C96A00]"
                        : "text-[#FDFBF7]"
                    }`}
                  >
                    {val}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Map */}
        <div className="relative overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.83564837499!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sMenteng%2C%20Jakarta%20Pusat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            className="h-full w-full border-none"
            style={{
              minHeight: "520px",
              filter: "brightness(0.75) saturate(0.7) contrast(1.1)",
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href="https://maps.google.com/?q=Menteng,Jakarta+Pusat"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-5 top-5 z-10 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-bold text-[#1C1008] shadow-lg"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                fill="#4285F4"
              />
            </svg>
            Buka di Google Maps
          </a>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="bg-[#FDFBF7] px-14 py-24">
        <div className="rounded-[40px] bg-[#0E0B07] p-16 text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[3px] text-[#C96A00]">
            Hubungi Kami
          </p>

          <h2 className="font-display text-[52px] font-black leading-tight text-white">
            Siap melihat kamar?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-8 text-white/60">
            Hubungi kami sekarang untuk mengecek ketersediaan kamar,
            menjadwalkan survey, atau menanyakan informasi lebih lanjut.
          </p>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://wa.me/6281200000000"
              target="_blank"
              className="rounded-full bg-[#C96A00] px-8 py-4 text-sm font-semibold text-white transition hover:scale-105"
            >
              WhatsApp →
            </a>

            <a
              href="tel:081200000000"
              className="rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition hover:border-[#C96A00]"
            >
              Telepon
            </a>

            <a
              href="mailto:indiekost@email.com"
              className="rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white transition hover:border-[#C96A00]"
            >
              Email
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
            <div>
              <p className="mb-2 text-sm text-white/40">WhatsApp</p>

              <h3 className="text-lg font-bold text-white">0812-xxxx-xxxx</h3>
            </div>

            <div>
              <p className="mb-2 text-sm text-white/40">Email</p>

              <h3 className="text-lg font-bold text-white">
                indiekost@email.com
              </h3>
            </div>

            <div>
              <p className="mb-2 text-sm text-white/40">Lokasi</p>

              <h3 className="text-lg font-bold text-white">
                Menteng, Jakarta Pusat
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="grid items-center border-t border-white/[0.06] bg-[#0E0B07] px-14 py-12"
        style={{ gridTemplateColumns: "1fr auto 1fr" }}
      >
        <div>
          <div className="font-display text-[20px] font-black text-[#FDFBF7]">
            Indie<span className="text-[#C96A00]">Kost</span>
          </div>
          <div className="mt-1 text-[11px] text-[#FDFBF7]/20">
            © 2025 IndieKost. All rights reserved.
          </div>
        </div>
        <div className="flex gap-7">
          {["Fasilitas", "Kamar", "Lokasi", "Kontak"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] font-medium text-[#FDFBF7]/35 hover:text-[#FDFBF7]"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="text-right">
          <div className="text-[13px] leading-relaxed text-[#FDFBF7]/35">
            <a href="tel:08120000000" className="font-semibold text-[#C96A00]">
              WA: 0812-xxxx-xxxx
            </a>
            <br />
            indiekost@email.com
          </div>
          <div className="mt-1 text-[11px] text-[#FDFBF7]/20">
            Jakarta Pusat, DKI Jakarta
          </div>
        </div>
      </footer>
    </main>
  );
}
