import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-white/[0.06] bg-[#0E0B07]/92 px-14 backdrop-blur-xl">
      <span className="font-display text-[20px] font-black tracking-tight text-[#FDFBF7]">
        Indie<span className="text-[#C96A00]">Kost</span>
      </span>
      <div className="flex items-center gap-9">
        {["Fasilitas", "Kamar", "Lokasi", "Kontak"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[13px] font-medium text-[#FDFBF7]/50 transition-colors hover:text-[#FDFBF7]"
          >
            {link}
          </a>
        ))}
        <a
          href="#kamar"
          className="rounded-full bg-[#C96A00] px-5 py-2.5 text-[13px] font-semibold text-white"
        >
          Cek Ketersediaan
        </a>
      </div>
    </nav>
  );
}
