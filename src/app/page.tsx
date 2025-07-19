// app/page.tsx
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-green-100 p-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">GeoLens</h1>
        <p className="text-gray-700 max-w-md mx-auto">
          Explore the world in seconds with GeoLens. Search any place and get a quick, stylish snapshot of its people, weather, top spots, and more — no clutter, just clarity.
        </p>
      </div>
    </main>
  );
}