'use client';

import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function SearchPanel() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const router = useRouter();

  const fetchSuggestions = async (searchTerm: string) => {
    if (searchTerm.length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
        {
          params: {
            namePrefix: searchTerm,
            types: 'CITY',
            sort: '-population',
            limit: 5,
          },
          headers: {
            'X-RapidAPI-Key': '9ed935e9demshebdc3eac41679fap1aec08jsnf1e6be232f00',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
          },
        }
      );
      setSuggestions(response.data.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchSuggestions(query);
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  
  const handleSelect = (city: string, country: string) => {
  const place = `${city}, ${country}`;
  const encodedPlace = encodeURIComponent(place);
  setQuery(""); // Hide search panel
  setSuggestions([]); // Optional: clear previous results
  router.push(`/?place=${encodedPlace}`);
};

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

      {/* Autocomplete Suggestions */}
      {query.trim() !== '' && (
        <div className="absolute top-[110%] w-full bg-white/10 backdrop-blur-md border border-white/30 rounded-xl mt-2 z-50 text-white shadow-lg ring-1 ring-white/20 overflow-hidden">
          {suggestions.length > 0 ? (
            <ul>
              {suggestions.map((item: any) => (
                <li
                  key={item.id}
                  className="px-4 py-2 hover:bg-white/20 cursor-pointer transition"
                  onClick={() => handleSelect(item.city, item.country)}
                >
                  {item.city}, {item.country}
                </li>
              ))}
            </ul>
          ) : (
            <div className="px-4 py-2 text-white/70">No place found</div>
          )}
        </div>
      )}
    </div>
  );
}
