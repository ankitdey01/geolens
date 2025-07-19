import "./globals.css";
import Footer from "../app/components/footer";
import Search from "../app/components/search";
import Body from "../app/components/body";

export const metadata = {
  title: "GeoLens",
  description: "Explore the world in seconds with GeoLens.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#00000a] text-white min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
        <Body/>
        <Footer />
        <Search />
      </body>
    </html>
  );
}
