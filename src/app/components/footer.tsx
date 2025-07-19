import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#00000a] border-t border-gray-700 px-4 py-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="text-gray-400 text-sm">© Geolens 2025 Company, Inc</p>
        </div>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <FaInstagram className="text-gray-400 hover:text-white cursor-pointer" size={20} />
          <FaFacebook className="text-gray-400 hover:text-white cursor-pointer" size={20} />
          <FaGithub className="text-gray-400 hover:text-white cursor-pointer" size={20} />
        </div>
      </div>
    </footer>
  );
}
