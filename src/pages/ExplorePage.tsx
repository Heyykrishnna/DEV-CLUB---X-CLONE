import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { Search, Settings, MoreHorizontal } from 'lucide-react';

const TRENDING_TOPICS = [
  { category: 'Trending in India', title: '#Orange4K', posts: '12.5K posts' },
  { category: 'Business & finance · Trending', title: '#GoldPrice', posts: '54.2K posts' },
  { category: 'Business & finance · Trending', title: 'बिल 게ट्स', posts: '22.1K posts' },
  { category: 'Trending in India', title: 'मोहम्मद दीपक', posts: '15.6K posts' },
  { category: 'Entertainment · Trending', title: '#PreityZinta', posts: '10.2K posts' },
  { category: 'Politics · Trending', title: 'Lindsey Graham', posts: '89.1K posts' },
];

const NEWS_ITEMS = [
  {
    topic: 'Sports',
    title: "Virat Kohli's Instagram Vanishes Overnight Then Returns",
    time: '1 day ago',
    posts: '16K posts',
    image: 'https://images.unsplash.com/photo-1624194065686-29210c598075?w=200&h=200&fit=crop'
  },
  {
    topic: 'Other',
    title: 'RCB Crushes UP Warriorz to Reach WPL 2026 Final',
    time: '1 day ago',
    posts: '25K posts',
    image: 'https://images.unsplash.com/photo-1631194758628-71eeb1823eb9?w=200&h=200&fit=crop'
  },
  {
    topic: 'Entertainment',
    title: 'Dhurandhar Hits Netflix After Record Box Office Run',
    time: '4 hours ago',
    posts: '1.8K posts',
    image: 'https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?w=200&h=200&fit=crop'
  }
];

export default function ExplorePage() {
  const [activeTab, setActiveTab] = useState('For You');
  
  const tabs = ['For You', 'Trending', 'News', 'Sports', 'Entertainment'];

  return (
    <div className="min-h-screen bg-[var(--color-black)] flex justify-center">
      <div className="flex w-full max-w-[1265px]">
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        <main className="flex-grow flex w-full relative xl:ml-[275px] ml-[68px]">
          <div className="flex-1 min-h-screen border-r border-[var(--color-border)] max-w-[600px] w-full">
            {/* Sticky Header with Search */}
            <div className="sticky top-0 z-10 bg-[rgba(0,0,0,0.65)] backdrop-blur-md border-b border-[var(--color-border)]">
              <div className="px-4 py-2 flex items-center gap-4">
                <div className="flex-1 bg-[var(--color-dim-gray)] rounded-full flex items-center px-4 py-2 focus-within:bg-black focus-within:ring-1 focus-within:ring-[var(--color-primary)] group">
                  <Search size={20} className="text-[var(--color-gray)] group-focus-within:text-[var(--color-primary)] mr-3" />
                  <input 
                    type="text" 
                    placeholder="Search" 
                    className="bg-transparent border-none outline-none text-[15px] w-full placeholder-gray-500 text-white"
                  />
                </div>
                <div className="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-full cursor-pointer transition-colors">
                  <Settings size={20} className="text-white" />
                </div>
              </div>
              
              {/* Tabs */}
              <div className="flex overflow-x-auto no-scrollbar border-b border-[var(--color-border)]">
                {tabs.map((tab) => (
                  <div 
                    key={tab}
                    className="flex-1 min-w-fit px-4 h-[53px] flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-colors relative"
                    onClick={() => setActiveTab(tab)}
                  >
                    <span className={`font-bold text-[15px] ${activeTab === tab ? 'text-[var(--color-white)]' : 'text-[var(--color-gray)]'}`}>
                      {tab}
                    </span>
                    {activeTab === tab && <div className="absolute bottom-0 h-[4px] w-[56px] bg-[var(--color-primary)] rounded-full"></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="pb-20">
               {/* Today's News Section */}
              <div className="border-b border-[var(--color-border)] p-4">
                <h2 className="text-[20px] font-bold mb-4 text-white">Today's News</h2>
                <div className="flex flex-col gap-4">
                  {NEWS_ITEMS.map((item, idx) => (
                    <div key={idx} className="flex gap-4 cursor-pointer">
                       <div className="flex-1">
                          <div className="text-[13px] text-[var(--color-gray)] flex gap-1 mb-0.5">
                            {item.topic && <span className="font-bold text-white">{item.topic}</span>}
                            <span>·</span>
                            <span>{item.time}</span>
                            <span>·</span>
                            <span>{item.posts}</span>
                          </div>
                          <div className="font-bold text-[15px] text-white leading-5">
                            {item.title}
                          </div>
                       </div>
                       <div className="w-[68px] h-[68px] rounded-xl overflow-hidden bg-gray-800 flex-shrink-0">
                         <img src={item.image} alt="" className="w-full h-full object-cover" />
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending Section */}
              {TRENDING_TOPICS.map((topic, index) => (
                <div key={index} className="py-3 px-4 hover:bg-[rgba(255,255,255,0.03)] cursor-pointer transition-colors relative border-b border-[var(--color-border)]">
                  <div className="flex justify-between items-center text-[13px] text-[var(--color-gray)]">
                    <span>{topic.category}</span>
                    <div className="p-1 rounded-full hover:bg-[rgba(29,155,240,0.1)] hover:text-[var(--color-primary)] transition-colors">
                       <MoreHorizontal size={16} />
                    </div>
                  </div>
                  <div className="font-bold text-[15px] leading-5 my-0.5 text-white">
                      {topic.title}
                  </div>
                  <div className="text-[13px] text-[var(--color-gray)]">{topic.posts}</div>
                </div>
              ))}
            </div>
          </div>
          
          <Widgets />
        </main>
      </div>
    </div>
  );
}
