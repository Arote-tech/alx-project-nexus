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
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 hover:bg-gray-100 hover:text-black">
        <Image className="p-2 w-full" src="/icons/search.png" width={20} height={20} alt="search icon" />
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search..."
        className="p-2 border-yellow-200 w-full bg-yellow-400 "
      />
      </div>
    </form>
  );
}



