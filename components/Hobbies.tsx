import React from 'react';
import SectionHeader from './SectionHeader';
import { Camera, Car, Trophy, Coffee, Plane, Utensils, Leaf } from 'lucide-react';

const hobbyTiles = [
  {
    id: 1,
    title: "Global Explorer",
    subtitle: "Travel Lover",
    image: "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Hobbies/travel1.webp",
    icon: <Plane className="w-5 h-5" />,
    className: "md:col-span-2 md:row-span-2",
    description: "Chasing horizons and cultural stories across the globe."
  },
  {
    id: 2,
    title: "Speed Enthusiast",
    subtitle: "Car Lover",
    image: "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Hobbies/cars.webp",
    icon: <Car className="w-5 h-5" />,
    className: "md:col-span-1 md:row-span-1",
    description: "Appreciating the art of engineering."
  },
  {
    id: 3,
    title: "Sweet Tooth",
    subtitle: "Dessert Love",
    image: "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Hobbies/dessert1.webp",
    icon: <Utensils className="w-5 h-5" />,
    className: "md:col-span-1 md:row-span-1",
    description: "Life is short, eat dessert first."
  },
  {
    id: 4,
    title: "Adrenaline Junkie",
    subtitle: "Go Karting",
    image: "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Hobbies/gokart.webp",
    icon: <Trophy className="w-5 h-5" />,
    className: "md:col-span-1 md:row-span-2",
    description: "Living life one lap at a time."
  },
  {
    id: 5,
    title: "On the Court",
    subtitle: "Badminton",
    image: "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Hobbies/sports.webp",
    icon: <Trophy className="w-5 h-5" />,
    className: "md:col-span-1 md:row-span-1",
    description: "Speed, agility, and precision."
  },
  {
    id: 6,
    title: "Pastry Connoisseur",
    subtitle: "Pastel de Nata Lover",
    image: "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Hobbies/pasteldenata.webp",
    icon: <Coffee className="w-5 h-5" />,
    className: "md:col-span-2 md:row-span-1",
    description: "Finding the perfect crunch in Lisbon and beyond."
  },
  {
    id: 7,
    title: "Serene Escapes",
    subtitle: "Nature Lover",
    image: "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Hobbies/natureexplorer.webp",
    icon: <Leaf className="w-5 h-5" />,
    className: "md:col-span-1 md:row-span-1",
    description: "Reconnecting with the wild and finding peace in the green."
  }
];

const Hobbies: React.FC = () => {
  return (
    <section id="hobbies" className="py-24 bg-black relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -right-24 top-1/4 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader title="Beyond the Data" subtitle="My Hobbies" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {hobbyTiles.map((tile) => (
            <div 
              key={tile.id}
              className={`group relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 ${tile.className}`}
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Main Image */}
              <img 
                src={tile.image} 
                alt={tile.title}
                className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="p-2 rounded-lg bg-orange-500/20 backdrop-blur-md text-orange-500">
                    {tile.icon}
                  </div>
                  <span className="text-orange-500 font-mono text-[10px] font-bold uppercase tracking-widest bg-orange-500/10 px-2 py-1 rounded">
                    {tile.subtitle}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {tile.title}
                </h3>
                
                <p className="text-zinc-400 text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 line-clamp-2">
                  {tile.description}
                </p>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/30 transition-all duration-500 rounded-3xl z-30 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Supplementary Travel & Dessert Teasers */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
           <div className="h-48 rounded-3xl overflow-hidden border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.02]">
             <img src="https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Hobbies/travel2.webp" className="w-full h-full object-cover" alt="Travel Moment" />
           </div>
           <div className="h-48 rounded-3xl overflow-hidden border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.02]">
             <img src="https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Hobbies/dessert2.webp" className="w-full h-full object-cover" alt="Dessert Delight" />
           </div>
           <div className="h-48 rounded-3xl overflow-hidden border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.02]">
             <img src="https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Hobbies/travel4.webp" className="w-full h-full object-cover" alt="Travel Moment" />
           </div>
           <div className="h-48 rounded-3xl overflow-hidden border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-[1.02]">
             <img src="https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Hobbies/dessert3.webp" className="w-full h-full object-cover" alt="Dessert Delight" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;