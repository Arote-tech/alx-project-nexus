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
    <div className="flex gap-2 max-w-md h-8 m-2 mx-auto rounded justify-center">
      <form onSubmit={handleSubmit}>
        <div className="flex gap-2 w-full text-sm text-black m-2 hover:bg-gray-100 hover:text-black">
        <Image 
        className="h-[430px] w-full rounded-md hover:cursor-pointer"
        src="/icons/search.png" 
        width={20} 
        height={20} 
        alt="search icon" 
        />
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search..."
        className="p-2 border-yellow-200 w-full bg-gray-200 "
      />
        </div>
      </form>

    </div>  
  );
}



