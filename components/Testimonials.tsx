import React from 'react';
import { Quote, Linkedin, User, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SectionHeader from './SectionHeader';

const testimonials = [
  {
    id: 1,
    name: "Kunal Jadhav",
    role: "Product Owner Data",
    text: "I had the pleasure of working with Vaibhav for a little over a year. He successfully managed projects involving multiple local markets, ensuring alignment and delivering high quality results.",
    image: "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Recommendation-list/Kunal.webp",
    linkedin: "https://www.linkedin.com/in/kunal-j-a35347b2/",
    color: "#10b981", // Emerald
    glowColor: "rgba(16, 185, 129, 0.15)"
  },
  {
    id: 2,
    name: "Kuheli BOSE",
    role: "Global Data Product Owner",
    text: "Vaibhav brings great value to any team. He has a strong ability to go deep into data, find the right analytical approach, and draw meaningful insights.",
    image: "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Recommendation-list/kuheli.webp",
    linkedin: "https://www.linkedin.com/in/kuheli-bose-724808b6/",
    color: "#a855f7", // Purple
    glowColor: "rgba(168, 85, 247, 0.15)"
  },
  {
    id: 3,
    name: "Kelsey Kreamer",
    role: "Global Data Domain Manager",
    text: "Vaibhav's efforts to ensure data structure was well maintained were critical to our broader transformation objectives. A reliable partner in complex data environments.",
    image: "https://qgnirvyfcgmnyhoooyht.supabase.co/storage/v1/object/public/Recommendation-list/kelsey.webp",
    linkedin: "https://www.linkedin.com/in/kelsey-kreamer/",
    color: "#3b82f6", // Blue
    glowColor: "rgba(59, 130, 246, 0.15)"
  },
  {
    id: 4,
    name: "Mouloud Boulabas",
    role: "Data Governance Lead",
    text: "Impressed by his ability to learn complex concepts and comprehensive understanding of data and business. Great ability to engage with a wide audience base.",
    image: null,
    linkedin: "https://www.linkedin.com/in/mouloud-boulabas-959875113/",
    color: "#f97316", // Orange
    glowColor: "rgba(249, 115, 22, 0.15)"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Dynamic Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 blur-[160px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <SectionHeader title="What Colleagues Say" subtitle="Trusted by Peers" />
          </div>
          
          <div className="flex gap-3 mb-16">
            <button className="swiper-prev-btn p-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-orange-500 transition-all group backdrop-blur-md">
              <ChevronLeft className="w-5 h-5 group-active:scale-90" />
            </button>
            <button className="swiper-next-btn p-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white hover:border-orange-500 transition-all group backdrop-blur-md">
              <ChevronRight className="w-5 h-5 group-active:scale-90" />
            </button>
          </div>
        </div>

        <div className="relative group/swiper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoHeight={true}
            navigation={{
              prevEl: '.swiper-prev-btn',
              nextEl: '.swiper-next-btn',
            }}
            pagination={{ 
              clickable: true, 
              bulletClass: 'testimonial-bullet',
              bulletActiveClass: 'testimonial-bullet-active'
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div 
                  className="group/card flex flex-col justify-between bg-zinc-900/40 backdrop-blur-md rounded-2xl border border-zinc-800/50 p-7 h-[285px] transition-all duration-500 hover:border-zinc-600 relative overflow-hidden"
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-700 pointer-events-none"
                    style={{ background: `radial-gradient(600px circle at center, ${item.color}, transparent)` }}
                  ></div>

                  <div>
                    <div 
                      className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-transform duration-500 group-hover/card:rotate-6"
                      style={{ backgroundColor: `${item.color}10`, color: item.color }}
                    >
                      <Quote className="w-4 h-4 fill-current" />
                    </div>
                    
                    <p className="text-zinc-200 leading-relaxed text-[14.5px] italic font-medium opacity-90 line-clamp-5">
                      "{item.text}"
                    </p>
                  </div>

                  {/* Wrapper link for the entire profile footer section */}
                  <a 
                    href={item.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/profile flex items-center gap-4 border-t border-zinc-800/50 pt-4 mt-auto transition-opacity hover:opacity-100"
                  >
                    <div className="relative shrink-0">
                      {/* Avatar container with scale and glow - now also triggers on profile-specific hover */}
                      <div 
                        className="w-12 h-12 rounded-full border-2 border-zinc-800 overflow-hidden bg-zinc-800 transition-all duration-500 group-hover/card:scale-110 group-hover/profile:scale-125 group-hover/card:border-white/20"
                      >
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-zinc-500">
                            <User className="w-5 h-5" />
                          </div>
                        )}
                      </div>
                      
                      {/* LinkedIn badge with synchronized scale */}
                      <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800 text-zinc-400 group-hover/profile:text-[#0077b5] transition-all duration-500 group-hover/card:scale-110 group-hover/profile:scale-125">
                        <Linkedin className="w-2.5 h-2.5 fill-current" />
                      </div>

                      {/* Dynamic Glow Layer */}
                      <div 
                        className="absolute inset-0 rounded-full opacity-0 group-hover/card:opacity-80 group-hover/profile:opacity-100 blur-xl transition-opacity duration-500 -z-10 scale-125"
                        style={{ backgroundColor: item.color }}
                      ></div>
                    </div>
                    
                    <div className="min-w-0">
                      <h4 className="font-bold text-white text-[13px] truncate transition-colors duration-300 group-hover/profile:text-orange-400">
                        {item.name}
                      </h4>
                      <p className="text-zinc-500 text-[10px] font-semibold uppercase tracking-wider truncate group-hover/profile:text-zinc-400 transition-colors">
                        {item.role}
                      </p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center mt-2 relative z-20">
            <a 
              href="https://www.linkedin.com/in/vaibhav-kumar1805/details/recommendations/?detailScreenTabIndex=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-orange-600 text-white text-[12px] font-bold rounded-full border border-zinc-800 hover:border-orange-500 transition-all duration-300 backdrop-blur-sm shadow-2xl"
            >
              <span>View More on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-bullet {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #3f3f46;
          margin: 0 5px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .testimonial-bullet-active {
          background: #f97316;
          transform: scale(1.4);
          box-shadow: 0 0 10px rgba(249, 115, 22, 0.3);
        }
        .swiper-pagination {
          bottom: 12px !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;