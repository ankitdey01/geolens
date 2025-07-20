'use client';

export default function Body() {
 return (
    <div className="w-full py-32 flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-1xl w-px40">
        {/* Tagline */}
        <h1 className="text-3xl md:text-4xl font-medium text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-2">
          Search. Tap. Explore.
        </h1>

        {/* GeoLens (Justified on same line) */}
        <div className="flex justify-center space-x-3 mb-8">
          <span className="text-5xl md:text-7xl font-bold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]">
            geolens!
          </span>
        </div>

        {/* Description Below */}
        <p className="text-white text-base md:text-2xl mt-30 leading-relaxed tracking-wide text-opacity-90 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
          Explore the world in seconds with GeoLens - a sleek, immersive way to search any place and instantly get a clean, stylish snapshot of its people, weather, highlights, and more. GeoLens makes exploration effortless with a visually driven experience that feels instant, clear, and powerful. Whether you're planning a trip, discovering a culture, or just satisfying your curiosity — it's all just a tap away. Simple. Fast. Beautiful.
        </p>
      </div>
    </div>

  );
}