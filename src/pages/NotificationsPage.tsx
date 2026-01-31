import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { Settings, MoreHorizontal, User, Star } from 'lucide-react';

const NOTIFICATIONS = [
  {
    id: 1,
    type: 'post',
    users: [
      { img: 'https://github.com/shadcn.png' },
      { img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
      { img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop' }
    ],
    text: 'New post notifications for <b>Royal Challengers Bengaluru</b> and 2 others',
    time: '28m'
  },
  {
    id: 2,
    type: 'live',
    icon: 'cam',
    source: 'IndiaToday',
    text: 'IndiaToday is LIVE: "#LIVE || CEA V Anantha Nageswaran mega exclusive ahead of Budget 2026 | #ITLiveStream @maryashakil @szarabi"',
    time: '22h'
  },
  {
    id: 3,
    type: 'topic',
    icon: 'star',
    source: 'Out Of Context Cricket',
    text: 'Recent post from <b>Out Of Context Cricket</b>',
    subtext: 'Rinku Singh fielding today',
    time: 'Jan 29',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=100&h=100&fit=crop'
  },
  {
    id: 4,
    type: 'live',
    icon: 'cam',
    source: 'PMO India',
    text: 'PMO India is LIVE: "LIVE. PM Modi\'s remarks during centenary celebrations of Arya Vaidya Sala Charitable Hospital in Kerala"',
    time: 'Jan 28'
  },
   {
    id: 5,
    type: 'topic',
    icon: 'star',
    source: 'Hindutva Knight',
    text: 'Recent post from <b>Hindutva Knight</b>',
    subtext: 'They have started copying Hindu rituals 😭',
    time: 'Jan 28',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=100&h=100&fit=crop'
  }
];

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'Mentions'];

  return (
    <div className="min-h-screen bg-[var(--color-black)] flex justify-center">
      <div className="flex w-full max-w-[1265px]">
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        <main className="flex-grow flex w-full relative xl:ml-[275px] ml-[68px]">
          <div className="flex-1 min-h-screen border-r border-[var(--color-border)] max-w-[600px] w-full">
            <div className="sticky top-0 z-10 bg-[rgba(0,0,0,0.65)] backdrop-blur-md border-b border-[var(--color-border)]">
              <div className="px-4 py-3 flex items-center justify-between">
                <h1 className="text-[20px] font-bold text-white">Notifications</h1>
                <div className="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-full cursor-pointer transition-colors">
                  <Settings size={20} className="text-white" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 h-[53px]">
                {tabs.map((tab) => (
                  <div 
                    key={tab}
                    className="flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-colors relative"
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

            <div className="pb-20">
               {NOTIFICATIONS.map((notif) => (
                 <div key={notif.id} className="p-4 border-b border-[var(--color-border)] hover:bg-[rgba(255,255,255,0.03)] cursor-pointer transition-colors flex gap-3">
                    <div className="flex-shrink-0 w-10 text-right flex justify-end">
                       {notif.type === 'post' && <div className="text-[var(--color-primary)]"><User size={24} fill="currentColor" /></div>}
                       {notif.type === 'live' && <div className="text-[#f91880]"><div className="w-6 h-6 bg-[#f91880] rounded flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full animate-pulse"/></div></div>}
                       {notif.type === 'topic' && <div className="text-[var(--color-primary)]"><Star size={24} fill="currentColor"/></div>}
                    </div>
                    
                    <div className="flex-1">
                      {notif.users && (
                        <div className="flex -space-x-2 mb-2">
                           {notif.users.map((u, i) => (
                             <img key={i} src={u.img} alt="" className="w-8 h-8 rounded-full border-2 border-black" />
                           ))}
                        </div>
                      )}
                      
                      {(notif.type === 'live' || notif.type === 'topic') && notif.source && (
                         <div className="flex justify-between mb-1">
                            <div className="flex items-center gap-1">
                               {notif.type === 'live' && <span className="font-bold text-white">{notif.source}</span>}
                               {/* Could add avatar here specifically if needed */}
                            </div>
                            <div className="p-1 hover:bg-[rgba(29,155,240,0.1)] hover:text-[var(--color-primary)] rounded-full text-[var(--color-gray)]">
                               <MoreHorizontal size={16} />
                            </div>
                         </div>
                      )}

                      <div className="text-[15px] text-white/90 leading-5 mb-1">
                         <span dangerouslySetInnerHTML={{ __html: notif.text }} />
                         <span className="text-[var(--color-gray)] ml-1">· {notif.time}</span>
                      </div>
                      
                      {notif.subtext && <div className="text-[15px] text-[var(--color-gray)]">{notif.subtext}</div>}
                      
                      {notif.image && (
                        <div className="mt-2 text-[var(--color-gray)] border border-[var(--color-border)] rounded-2xl overflow-hidden max-w-[300px]">
                           <div className="flex items-center gap-2 p-2 bg-[#000]">
                              <span>Recent post from <span className="font-bold">{notif.source}</span></span>
                              <span className="text-xs">· {notif.time}</span>
                           </div>
                           <img src={notif.image} className="w-full h-auto" />
                        </div>
                      )}
                    </div>
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
