import React from 'react';
import { Search, MoreHorizontal } from 'lucide-react';
import Button from './Button';

const TrendItem = ({ category, title, posts }: { category: string, title?: string, posts?: string }) => (
  <div className="py-3 px-4 hover:bg-[rgba(255,255,255,0.03)] cursor-pointer transition-colors relative">
    <div className="flex justify-between items-center text-[13px] text-[var(--color-gray)]">
      <span>{category}</span>
      <div className="p-1 rounded-full hover:bg-[rgba(29,155,240,0.1)] hover:text-[var(--color-primary)]">
         <MoreHorizontal size={16} />
      </div>
    </div>
    <div className="font-bold text-[15px] leading-5 my-0.5 max-w-[90%]">
        {title && <div>{title}</div>}
    </div>
    {posts && <div className="text-[13px] text-[var(--color-gray)]">{posts}</div>}
  </div>
);

const NewsItem = ({ title, time, source, img }: { title: string, time: string, source: string, img: string }) => (
  <div className="py-3 px-4 hover:bg-[rgba(255,255,255,0.03)] cursor-pointer transition-colors flex gap-4">
      <div className="flex-1">
        <div className="flex items-center gap-1 text-[13px] text-[var(--color-gray)] mb-1">
            <span>{source}</span>
            <span>·</span>
            <span>{time}</span>
        </div>
        <div className="font-bold text-[15px] leading-5">
            {title}
        </div>
      </div>
      <div className="w-[68px] h-[68px] rounded-xl overflow-hidden bg-gray-800 flex-shrink-0">
          <img src={img} alt="" className="w-full h-full object-cover" />
      </div>
  </div>
);

export default function Widgets() {
  return (
    <div className="hidden lg:block w-[350px] pl-8 py-1 min-h-screen">
      {/* Search Bar - Sticky */}
      <div className="sticky top-0 bg-[var(--color-black)] z-10 py-1 mb-2">
        <div className="bg-[var(--color-dim-gray)] rounded-full flex items-center px-4 py-2.5 focus-within:bg-black focus-within:ring-1 focus-within:ring-[var(--color-primary)] group">
          <Search size={20} className="text-[var(--color-gray)] group-focus-within:text-[var(--color-primary)] mr-3" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent border-none outline-none text-[15px] w-full placeholder-gray-500"
          />
        </div>
      </div>
      <div className="bg-[var(--color-dim-gray)] rounded-2xl p-4 mb-4 border border-[var(--color-border)]">
        <h2 className="text-[20px] font-bold mb-2">Subscribe to Premium</h2>
        <p className="text-[15px] mb-3 leading-5">
          Subscribe to unlock new features and if eligible, receive a share of revenue.
        </p>
        <Button variant="primary" className="font-bold px-6">Subscribe</Button>
      </div>
      <div className="bg-[var(--color-dim-gray)] rounded-2xl overflow-hidden mb-4 border border-[var(--color-border)]">
         <h2 className="text-[20px] font-bold p-4 pb-0">Live on X</h2>
         <div className="p-4 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-2 mb-1">
                <span className="bg-red-600 text-white text-[10px] uppercase font-bold px-1 rounded-sm">Live</span>
                <span className="text-[13px] font-bold">IndiaToday</span>
                <span className="text-[13px] text-gray-500">is hosting</span>
            </div>
            <p className="font-bold">#LIVE | Delhi rape horror, Stalin's big 'Muslim card'...</p>
         </div>
      </div>
      <div className="bg-[var(--color-dim-gray)] rounded-2xl py-3 border border-[var(--color-border)] mb-4">
        <h2 className="text-[20px] font-bold px-4 mb-2">Today's News</h2>
        <NewsItem 
            title="Joe Root's Century Sparks Talk of Virat Kohli's Unmatched Record"
            time="18 hours ago"
            source="Sports"
            img="https://cdn.magicdecor.in/com/2024/02/15132806/Faces-Minimalist-Abstract-Aesthetic-Style-Wallpaper-Mural.jpg"
        />
        <NewsItem 
             title="Ashwin and Kohli Laugh Off Fan's T20 World Cup Critique"
             time="3 hours ago"
             source="Sports"
             img="https://cdn.magicdecor.in/com/2024/02/15132806/Faces-Minimalist-Abstract-Aesthetic-Style-Wallpaper-Mural.jpg"
        />
        <TrendItem category="Politics · Trending" title="Pradhan" posts="12.5K posts" />
        <TrendItem category="Politics · Trending" title="Yogi" posts="54.2K posts" />
        <TrendItem category="Entertainment · Trending" title="#DeepikaPadukone" posts="22.1K posts" />
        
        <div className="p-4 pt-2 text-[var(--color-primary)] text-[15px] cursor-pointer hover:underline">
            Show more
        </div>
      </div>
       <div className="flex flex-wrap gap-2 text-[13px] text-[var(--color-gray)] px-4">
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Cookie Policy</a>
        <a href="#" className="hover:underline">Accessibility</a>
        <a href="#" className="hover:underline">Ads info</a>
        <a href="#" className="hover:underline">More ...</a>
        <span>© 2026 X Corp.</span>
      </div>
    </div>
  );
}
