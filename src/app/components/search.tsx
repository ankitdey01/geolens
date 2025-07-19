'use client';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function SearchPanel() {
  const [query, setQuery] = useState('');

  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 w-[90%] max-w-xl z-50">
      <div className="relative flex justify-center items-center bg-white/10 backdrop-blur-md border border-white/50 rounded-full px-6 py-3 shadow-xl ring-1 ring-white/150">
        <MagnifyingGlassIcon className="h-5 w-5 text-white opacity-100" />
        <input
          type="text"
          placeholder="Search places..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="ml-3 bg-transparent outline-none text-white placeholder-white/90 w-full"
        />
      </div>
    </div>
  );
}
