import React from 'react'

interface Props {
    query: string;
    setQuery: (value: string) => void
}

const SearchBar: React.FC<Props> = ({ query, setQuery }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div className="relative max-w-lg mx-auto group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search w-5 h-5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <input 
                type="text" 
                value={query} 
                onChange={handleChange}
                placeholder='Search for amazing GIFs...' 
                className='block w-full pl-10 pr-3 py-3 border border-input rounded-xl leading-5 bg-card/50 backdrop-blur-md text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all shadow-lg hover:shadow-primary/10'
            />
        </div>
    )
}

export default SearchBar