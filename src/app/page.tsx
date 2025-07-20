"use client";

import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const place = searchParams.get("place");

  return (
    <div className="min-h-screen bg-[#00040c] text-white font-mono relative">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-10">
        <h1 className="text-2xl font-semibold text-white tracking-wide">
          geolens
        </h1>
        <nav className="space-x-5 text-sm">
          <a href="#" className="hover:text-cyan-400 font-extrabold transition">
            home
          </a>
          <a href="#" className="hover:text-cyan-400 font-extrabold transition">
            about
          </a>
          <a href="#" className="hover:text-cyan-400 font-extrabold transition">
            contact
          </a>
          <a href="#" className="hover:text-cyan-400 font-extrabold transition">
            github
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center px-4">
        {/* Place name */}
        {place && (
          <h2 className="text-5xl font-bold text-cyan-400 mb-10 text-center">
            {place}
          </h2>
        )}

        {/* Image */}
        {!place && (
          <section className="flex justify-center items-center mt-2">
            <img
              src="https://media.discordapp.net/attachments/1005153874128162877/1396118202060243035/20250719_035757.png?ex=687e3d65&is=687cebe5&hm=12602353c98647f7c9759d8904579f672a5f023dd03e702e71f7abcd656029df&=&format=webp&quality=lossless&width=544&height=544"
              alt="Preview"
              className="w-[900px] rounded-xl shadow-lg max-w-full h-auto opacity-100"
            />
          </section>
        )}
      </main>
    </div>
  );
}
