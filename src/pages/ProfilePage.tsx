import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--color-black)] flex justify-center">
      <div className="flex w-full max-w-[1265px]">
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        <main className="flex-grow flex w-full relative xl:ml-[275px] ml-[68px]">
          <div className="flex-1 min-h-screen border-r border-[var(--color-border)] max-w-[600px] w-full">
            <div className="sticky top-0 z-10 bg-[rgba(0,0,0,0.65)] backdrop-blur-md px-4 py-1 h-[53px] flex items-center gap-6 border-b border-[var(--color-border)]">
               <div onClick={() => navigate(-1)} className="p-2 hover:bg-[rgba(255,255,255,0.1)] rounded-full cursor-pointer transition-colors">
                  <ArrowLeft size={20} />
               </div>
               <div>
                  <h2 className="text-[20px] font-bold leading-6">User Name</h2>
                  <div className="text-[13px] text-[var(--color-gray)]">0 posts</div>
               </div>
            </div>
            <div className="h-[200px] bg-[#333]"></div>
            <div className="p-4 relative">
               <div className="absolute -top-[70px] left-4 border-4 border-black rounded-full w-[134px] h-[134px] overflow-hidden bg-black">
                  <img src="https://github.com/shadcn.png" className="w-full h-full object-cover" />
               </div>
               <div className="flex justify-end mb-4">
                  <button className="border border-[var(--color-border)] font-bold rounded-full px-4 py-1.5 hover:bg-[rgba(255,255,255,0.1)] transition-colors">Edit profile</button>
               </div>
               <div className="mt-8">
                  <h2 className="text-[20px] font-bold leading-6">User Name</h2>
                  <div className="text-[15px] text-[var(--color-gray)] mb-4">@username</div>
                  <div className="text-[15px] mb-2">Joined January 2026</div>
                  <div className="flex gap-4 text-[15px] text-[var(--color-gray)]">
                     <span><span className="font-bold text-white">100</span> Following</span>
                     <span><span className="font-bold text-white">50</span> Followers</span>
                  </div>
               </div>
            </div>
          </div>
          <Widgets />
        </main>
      </div>
    </div>
  );
}
