import React from 'react'
import SearchBar from '@/components/SearchBar'
import GifGrid from '@/components/GifGrid'

const Home = () => {
  const [query, setQuery] = React.useState("Happy");

  return (
    <div className='w-full max-w-4xl mx-auto text-center space-y-6 p-5'>
      <div className="flex justify-center items-center gap-2">
        <img src="/logo.svg" alt="GIF Quest Logo" className="w-10 h-10" />
        <h1 className="text-3xl font-bold underline">GIF Quest</h1>
      </div>
      <SearchBar query={query} setQuery={setQuery} />
      <GifGrid query={query} />
    </div>
  );
}

export default Home