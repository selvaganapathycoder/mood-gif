import React from 'react'
import { fetchGifs } from '@/lib/giphy'

interface Props {
  query: string;
}

interface Gif {
    id: string;
    title: string;
    images: {
        fixed_height: {
            url: string;
        }
    }
}

const GifGrid: React.FC<Props> = ({ query }) => {
  const [gifs, setGifs] = React.useState<Gif[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getGifs = async () => {
      setLoading(true);
      try{
        const res = await fetchGifs(query);
        setGifs(res);
      }catch (error) {
        console.error("Error fetching GIFs:", error);
      }finally {
        setLoading(false);
      }
    };
    getGifs();
  }, [query]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4'>
      {gifs.map((gif) => (
        <div key={gif.id} className="group relative aspect-video overflow-hidden rounded-xl bg-muted/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <img 
                src={gif.images.fixed_height.url} 
                alt={gif.title}
                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <p className="text-white text-xs font-medium truncate w-full">{gif.title}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default GifGrid