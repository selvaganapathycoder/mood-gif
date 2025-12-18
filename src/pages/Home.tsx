import React from 'react'
import SearchBar from '@/components/SearchBar'
import GifGrid from '@/components/GifGrid'

const Home = () => {
  const [query, setQuery] = React.useState("Happy");

  return (
    <div className='min-h-screen w-full flex flex-col items-center py-12 px-4 space-y-8'>
      
      {/* Header Section */}
      <header className="flex flex-col items-center space-y-4 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="flex justify-center items-center gap-3 p-2 rounded-2xl bg-secondary/30 backdrop-blur-sm border border-border/50 shadow-inner">
            <img src="/logo.svg" alt="GIF Quest Logo" className="w-12 h-12 drop-shadow-md" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            GIF Quest
            </h1>
        </div>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Discover the perfect GIF for every moment.
        </p>
      </header>

      {/* Search Section */}
      <main className="w-full max-w-5xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
        <SearchBar query={query} setQuery={setQuery} />
        <GifGrid query={query} />
      </main>
      
    </div>
  );
}

export default Home