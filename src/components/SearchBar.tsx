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
        <input type="text" value={query} 
        onChange={handleChange}
        placeholder='Search GIFs...' 
        className='border py-2 rounded-md shadow-sm w-full px-4'
      />
    )
}

export default SearchBar