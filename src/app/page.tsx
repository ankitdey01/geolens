export default function Home() {
  return (
    <div className="min-h-screen bg-[#00000a] text-white font-mono relative">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-10">
        <h1 className="text-2xl font-semibold text-white tracking-wide">geolens<a href="#"></a></h1>
        <nav className="space-x-5 text-sm">
          <a href="#" className="hover:text-cyan-400 font-extrabold transition">home</a>
          <a href="#" className="hover:text-cyan-400 font-extrabold transition">about</a>
          <a href="#" className="hover:text-cyan-400 font-extrabold transition">contact</a>
          <a href="#" className="hover:text-cyan-400 font-extrabold transition">github</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex justify-center items-center">
        <div>
          {/* Placeholder for image */}
          <section className="flex justify-center items-center mt-5">
        <img
          src="https://media.discordapp.net/attachments/1005153874128162877/1396118202060243035/20250719_035757.png?ex=687cebe5&is=687b9a65&hm=ee1ceb061988257ee5a8f6c35b3765e1c142e772aacc731eb09ac554f827837a&=&format=webp&quality=lossless&width=544&height=544"
          alt="Preview"
          className="w-[900px] rounded-xl shadow-lg max-w-full h-auto opacity-100"
        />
      </section>
        </div>
      </main>
    </div>
  )
}