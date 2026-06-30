import { rooms } from "../data/rooms";
import Link from "next/link";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "../components/navbar";

const stripItems = [
  { icon: "fa-wind", text: "AC & Kipas Angin" },
  { icon: "fa-wifi", text: "WiFi 100 Mbps" },
  { icon: "fa-shower", text: "Kamar Mandi Dalam" },
  { icon: "fa-key", text: "Akses 24 Jam" },
  { icon: "fa-motorcycle", text: "Parkir Motor" },
  { icon: "fa-utensils", text: "Dapur Bersama" },
  { icon: "fa-shield-halved", text: "Lingkungan Aman" },
];

const facilities = [
  {
    icon: "fa-wifi",
    title: "WiFi 100 Mbps",
    desc: "Internet cepat dan stabil untuk kerja maupun hiburan.",
  },
  {
    icon: "fa-snowflake",
    title: "AC di Setiap Kamar",
    desc: "Suhu sejuk sepanjang hari tanpa biaya tambahan.",
  },
  {
    icon: "fa-shower",
    title: "Kamar Mandi Dalam",
    desc: "Privasi penuh dengan air bersih 24 jam.",
  },
  {
    icon: "fa-key",
    title: "Akses 24 Jam",
    desc: "Keluar masuk kapan saja, tanpa jam malam.",
  },
  {
    icon: "fa-motorcycle",
    title: "Parkir Motor",
    desc: "Area parkir luas dan aman di dalam area kost.",
  },
  {
    icon: "fa-utensils",
    title: "Dapur Bersama",
    desc: "Bisa masak sendiri kapan pun kamu mau.",
  },
  {
    icon: "fa-shirt",
    title: "Laundry Area",
    desc: "Area cuci dan jemur pakaian yang bersih dan rapi.",
  },
  {
    icon: "fa-shield-halved",
    title: "Keamanan 24 Jam",
    desc: "CCTV dan penjaga kost untuk rasa aman ekstra.",
  },
];

const mapDetails = [
  {
    icon: "fa-location-dot",
    label: "Alamat Lengkap",
    val: "Jl. Anyer III No.14,\nMenteng, Jakarta Pusat 10310",
  },
  {
    icon: "fa-train-subway",
    label: "Akses Transportasi",
    val: "5 menit ke Stasiun Matraman\n10 menit ke Halte Busway Salemba",
  },
  {
    icon: "fa-store",
    label: "Fasilitas di Sekitar",
    val: "Minimarket, kafe, RS Carolus,\nATM, warung makan",
  },
  {
    icon: "fa-phone",
    label: "Hubungi Kami",
    val: "WA: 0812-xxxx-xxxx",
    highlight: true,
  },
];

const kontakCards = [
  { icon: "fa-phone", label: "Telepon / WhatsApp", val: "0812-xxxx-xxxx" },
  { icon: "fa-envelope", label: "Email", val: "indiekost@email.com" },
  {
    icon: "fa-location-dot",
    label: "Alamat",
    val: "Jl. Anyer III No.14, Menteng, Jakarta Pusat",
  },
  {
    icon: "fa-clock",
    label: "Jam Operasional",
    val: "Senin–Minggu, 08.00–20.00 WIB",
  },
];

export default function Home() {
  return (
    <main className="w-full scroll-smooth bg-[#0E0B07] font-sans">
      <Navbar />

      {/* ── Hero ── */}
      <section className="grid min-h-[560px] items-end bg-[#0E0B07] md:min-h-[600px] md:grid-cols-2">
        <div className="relative order-2 px-5 pb-12 pt-12 sm:px-8 sm:pt-16 md:order-1 md:px-14 md:pb-[76px] md:pt-[120px]">

          <h1 className="font-display mb-5 text-[42px] font-black leading-[1.02] tracking-[-1px] text-[#FDFBF7] sm:text-[56px] sm:tracking-[-1.5px] md:mb-7 md:text-[72px] md:leading-none md:tracking-[-2px]">
            Tinggal
            <br />
            nyaman,
            <br />
            <em className="italic text-[#C96A00]">langkah bebas.</em>
          </h1>

          <p className="mb-8 max-w-[380px] text-[15px] font-light leading-relaxed text-[#FDFBF7]/45 sm:text-[17px] md:mb-12">
            Kost premium di Jakarta Pusat — tenang, bersih, dan dekat ke
            mana-mana. Cocok buat kamu yang serius dengan hidup dan karir.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <a
              href="#kamar"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#C96A00] px-6 py-3.5 text-[13px] font-semibold text-white transition-all hover:gap-3.5 hover:bg-[#DE7700] hover:shadow-[0_8px_24px_rgba(201,106,0,0.4)] sm:px-8 sm:py-4 sm:text-[14px]"
            >
              Lihat Semua Kamar
              <i className="fa-solid fa-arrow-right text-[12px] transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#lokasi"
              className="group inline-flex items-center gap-2.5 text-[13px] font-medium text-[#FDFBF7]/60 hover:text-[#FDFBF7] sm:text-[14px]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[13px] transition-colors group-hover:border-[#C96A00]/50 group-hover:text-[#C96A00]">
                <i className="fa-solid fa-arrow-down" />
              </span>
              Cek Lokasi
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative order-1 h-[280px] w-full overflow-hidden border-b border-white/[0.06] sm:h-[360px] md:order-2 md:h-full md:min-h-[440px] md:border-b-0 md:border-l">
          <Image
            src="/hero.jpg"
            alt="Suasana IndieKost"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0E0B07]/40" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E0B07]/75 via-transparent to-transparent" />
        </div>
      </section>

      {/* ── Amenity Strip ── */}
      <div className="overflow-x-auto bg-[#C96A00] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max items-center px-5 py-3.5 sm:px-8 md:px-14">
          {stripItems.map((item, i) => (
            <span key={item.text} className="flex shrink-0 items-center">
              <span className="flex items-center gap-2 px-4 text-[10.5px] font-bold uppercase tracking-[1.5px] text-white sm:px-6 sm:text-[11px] sm:tracking-[2px]">
                <i
                  className={`fa-solid ${item.icon} text-[12px] sm:text-[13px]`}
                />
                {item.text}
              </span>
              {i < stripItems.length - 1 && (
                <span className="text-[14px] text-white/30">·</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── Fasilitas Section ── */}
      <section
        id="fasilitas"
        className="scroll-mt-20 bg-[#FDFBF7] px-5 py-16 sm:px-8 md:px-14 md:py-24"
      >
        <div className="mb-10 md:mb-14">
          <p className="mb-3 flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[3px] text-[#C96A00] sm:mb-3.5 sm:text-[11px]">
            <i className="fa-solid fa-star" />
            Fasilitas
          </p>
          <h2 className="font-display max-w-[600px] text-[30px] font-black leading-[1.08] text-[#1C1008] sm:text-[36px] md:text-[44px] md:leading-[1.05]">
            Semua yang kamu butuhkan,
            <br />
            sudah tersedia.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {facilities.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl border border-[#EDE3D4] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C96A00] hover:shadow-[0_18px_40px_rgba(201,106,0,0.12)] sm:p-7"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1C1008] text-[18px] text-[#C96A00] transition-colors duration-300 group-hover:bg-[#C96A00] group-hover:text-white sm:mb-5 sm:h-[52px] sm:w-[52px] sm:text-[20px]">
                <i className={`fa-solid ${icon}`} />
              </div>
              <h3 className="font-display mb-2 text-[16px] font-bold text-[#1C1008] sm:text-[17px]">
                {title}
              </h3>
              <p className="text-[13px] leading-relaxed text-[#8B6E52]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Room Grid ── */}
      <section
        id="kamar"
        className="scroll-mt-20 bg-[#FDFBF7] px-5 pb-16 sm:px-8 md:px-14 md:pb-24"
      >
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between md:mb-14">
          <div>
            <p className="mb-3 flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[3px] text-[#C96A00] sm:mb-3.5 sm:text-[11px]">
              <i className="fa-solid fa-bed" />
              Pilihan Kamar
            </p>
            <h2 className="font-display text-[30px] font-black leading-[1.08] text-[#1C1008] sm:text-[36px] md:text-[44px] md:leading-[1.05]">
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

        <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room) => (
            <Link
              key={room.id}
              href={`/room/${room.id}`}
              className={`group flex flex-col overflow-hidden rounded-3xl border bg-white transition-all duration-300 ${
                room.available
                  ? "border-[#EDE3D4] hover:-translate-y-2 hover:border-[#C96A00] hover:shadow-[0_20px_48px_rgba(201,106,0,0.16)]"
                  : "pointer-events-none border-[#EDE3D4] opacity-55"
              }`}
            >
              {/* ── Room Image ── */}
              <div className="relative h-[180px] w-full overflow-hidden sm:h-[200px]">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <span
                  className={`absolute right-3.5 top-3.5 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide backdrop-blur-sm ${
                    room.available
                      ? "bg-[#1C1008]/75 text-[#FDFBF7]"
                      : "border border-[#C96A00]/30 bg-[#C96A00]/20 text-[#7A4000]"
                  }`}
                >
                  <i
                    className={`fa-solid ${room.available ? "fa-circle-check" : "fa-lock"} text-[10px]`}
                  />
                  {room.available ? "Tersedia" : "Terisi"}
                </span>
              </div>

              {/* ── Body ── */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display mb-1 text-[18px] font-bold text-[#1C1008] group-hover:text-[#7A4000] sm:text-[19px]">
                  {room.name}
                </h3>

                <p className="mb-3 text-[15px] font-bold text-[#C96A00]">
                  {room.price}
                </p>

                <p className="mb-4 text-[12px] leading-relaxed text-[#8B6E52]">
                  {room.description}
                </p>

                <div className="mb-auto flex flex-wrap gap-1.5 pb-4">
                  {room.facilities.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="flex items-center gap-1.5 rounded-lg bg-[#F5EDE0] px-2.5 py-1 text-[10.5px] font-medium text-[#6B5744]"
                    >
                      <i className="fa-solid fa-check text-[9px] text-[#C96A00]" />
                      {f}
                    </span>
                  ))}
                  {room.facilities.length > 3 && (
                    <span className="rounded-lg bg-[#F5EDE0] px-2.5 py-1 text-[10.5px] font-medium text-[#8B6E52]">
                      +{room.facilities.length - 3} lainnya
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between border-t border-[#EDE3D4] pt-3.5">
                  <span className="text-[12px] font-bold text-[#C96A00]">
                    {room.available ? "Lihat Detail" : "Sedang Terisi"}
                  </span>
                  {room.available && (
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FDF0E0] text-[11px] text-[#C96A00] transition-transform group-hover:translate-x-0.5">
                      <i className="fa-solid fa-arrow-right" />
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
        className="grid scroll-mt-20 bg-[#0E0B07] lg:grid-cols-[420px_1fr]"
      >
        <div className="flex flex-col justify-between gap-10 border-b border-white/[0.06] px-5 py-14 sm:px-8 md:px-12 lg:gap-0 lg:border-b-0 lg:border-r">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[3px] text-[#C96A00] sm:text-[11px]">
              <i className="fa-solid fa-location-dot" />
              Lokasi
            </p>
            <h2 className="font-display mb-5 text-[30px] font-black leading-[1.1] text-[#FDFBF7] sm:text-[34px] md:text-[38px]">
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
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#C96A00]/20 bg-[#C96A00]/12 text-[15px] text-[#C96A00]">
                  <i className={`fa-solid ${icon}`} />
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

        <div className="relative h-[320px] overflow-hidden sm:h-[400px] lg:h-auto lg:min-h-[520px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.83564837499!3d-6.2087634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sMenteng%2C%20Jakarta%20Pusat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            className="h-full w-full border-none"
            style={{
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
            className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-bold text-[#1C1008] shadow-lg transition-transform hover:scale-[1.03] sm:right-5 sm:top-5 sm:px-5 sm:py-2.5 sm:text-[13px]"
          >
            <i className="fa-brands fa-google text-[#4285F4]" />
            <span className="hidden sm:inline">Buka di</span> Google Maps
          </a>
          <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0E0B07]/90 px-3.5 py-2 text-[12px] font-semibold text-[#FDFBF7] backdrop-blur-md sm:bottom-5 sm:left-5 sm:px-4 sm:py-2.5 sm:text-[13px]">
            <i className="fa-solid fa-location-dot text-[#C96A00]" />
            IndieKost — Menteng, Jakarta Pusat
          </div>
        </div>
      </section>

      {/* ── Kontak Section ── */}
      <section
        id="kontak"
        className="scroll-mt-20 bg-[#0E0B07] px-5 py-16 sm:px-8 md:px-14 md:py-24"
      >
        <div className="grid items-center gap-10 rounded-[28px] border border-white/[0.06] bg-gradient-to-br from-[#1C1008] to-[#0E0B07] p-8 sm:rounded-[32px] sm:p-12 md:gap-16 md:p-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="mb-4 flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[3px] text-[#C96A00] sm:text-[11px]">
              <i className="fa-solid fa-comments" />
              Hubungi Kami
            </p>
            <h2 className="font-display mb-6 text-[28px] font-black leading-[1.12] text-[#FDFBF7] sm:text-[34px] md:text-[42px] md:leading-[1.1]">
              Tertarik tinggal di sini?
              <br />
              <em className="italic text-[#C96A00]">Yuk, ngobrol dulu.</em>
            </h2>
            <p className="mb-8 max-w-[420px] text-[14px] font-light leading-relaxed text-[#FDFBF7]/45 sm:text-[15px] md:mb-9">
              Tanya ketersediaan kamar, jadwal survei langsung, atau info
              lengkap fasilitas — admin kami siap bantu kapan saja.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/6281200000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#C96A00] px-6 py-3.5 text-[13px] font-semibold text-white transition-all hover:bg-[#DE7700] hover:shadow-[0_8px_24px_rgba(201,106,0,0.4)] sm:px-8 sm:py-4 sm:text-[14px]"
              >
                <i className="fa-brands fa-whatsapp text-[16px] transition-transform group-hover:scale-110" />
                Chat via WhatsApp
              </a>
              <a
                href="mailto:indiekost@email.com"
                className="flex items-center gap-2 text-[13px] font-medium text-[#FDFBF7]/60 hover:text-[#FDFBF7] sm:text-[14px]"
              >
                <i className="fa-solid fa-envelope" />
                atau kirim email
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {kontakCards.map(({ icon, label, val }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.05]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#C96A00]/12 text-[15px] text-[#C96A00]">
                  <i className={`fa-solid ${icon}`} />
                </div>
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#FDFBF7]/25">
                    {label}
                  </p>
                  <p className="text-[14px] font-medium leading-relaxed text-[#FDFBF7]">
                    {val}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
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
        <div className="text-center md:text-right">
          <div className="text-[13px] leading-relaxed text-[#FDFBF7]/35">
            <a
              href="https://wa.me/6281200000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 font-semibold text-[#C96A00] md:justify-end"
            >
              <i className="fa-brands fa-whatsapp" />
              0812-xxxx-xxxx
            </a>
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
