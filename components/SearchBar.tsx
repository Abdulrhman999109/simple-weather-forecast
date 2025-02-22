'use client'
import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
      setQuery("");
    }
  };

  return (
    <div className="relative w-full max-w-lg flex items-center bg-yellow-50 shadow-lg rounded-full px-4 py-2 transition hover:shadow-2xl">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city name..."
        className="border-none p-2 w-full outline-none text-gray-900 bg-transparent rounded-full placeholder-gray-600"
      />
      <button
        onClick={handleSearch}
        className="bg-gray-800 text-yellow-50 px-5 py-2 rounded-full font-semibold hover:bg-gray-700 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
