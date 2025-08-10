// components/SearchBar.tsx
import { useState } from 'react';
import React from "react"
import Image from "next/image"

type SearchBarProps = {
  onSearch: (term: string) => void;
  
  };

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [term, setTerm] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
      <form onSubmit={handleSubmit} className="flex w-115 h-15 text-sm rounded-3xl border-g-200 bg-gray-100 text-black p-4 hover:bg-gray-300 hover:text-black">
          <Image 
            className="rounded-md hover:cursor-pointer"
            src="/icons/search-256x256.png" 
            width={12} 
            height={12} 
            alt="search icon" 
          />
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search..."
        className="p-2 w-full bg-transparent outline-none"
      />
      </form>
  
  );
}



