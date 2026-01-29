import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Repeat2, Heart, BarChart2, Share, MoreHorizontal } from 'lucide-react';
import { POSTS } from '../data/posts';
import Button from './Button';

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = POSTS.find(p => p.id === id);

  if (!post) {
    return <div className="p-4 text-center">Post not found</div>;
  }

  return (
    <div className="flex-1 min-h-screen border-r border-[var(--color-border)] max-w-[600px] w-full">
      <div className="sticky top-0 z-10 bg-[rgba(0,0,0,0.65)] backdrop-blur-md border-b border-[var(--color-border)] px-4 py-3 flex items-center gap-6">
        <div 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-colors -ml-2"
        >
          <ArrowLeft size={20} />
        </div>
        <div>
          <h2 className="text-[20px] font-bold leading-6">Post</h2>
        </div>
      </div>

      <div className="px-4 py-3"> 
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-3">
             <div className="w-10 h-10 rounded-full overflow-hidden">
               <img src={post.avatar} alt={post.name} className="w-full h-full object-cover" />
             </div>
             <div className="flex flex-col">
               <span className="font-bold text-[15px] hover:underline cursor-pointer">{post.name}</span>
               <span className="text-[var(--color-gray)] text-[15px]">{post.handle}</span>
             </div>
          </div>
          <div className="text-[var(--color-gray)] hover:bg-[rgba(29,155,240,0.1)] hover:text-[var(--color-primary)] p-2 rounded-full cursor-pointer transition-colors">
            <MoreHorizontal size={20} />
          </div>
        </div>
        <div className="text-[17px] whitespace-pre-wrap leading-6 mb-3">
          {post.content}
        </div>
        {post.image && (
          <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-3">
            <img src={post.image} alt="Post content" className="w-full h-auto" />
          </div>
        )}
        <div className="flex gap-1 text-[15px] text-[var(--color-gray)] hover:underline cursor-pointer mb-3 border-b border-[var(--color-border)] pb-3">
          <span>4:32 PM</span>
          <span>·</span>
          <span>Jan 29, 2026</span>
          <span>·</span>
          <span className="text-[var(--color-white)] font-bold">4.2M</span>
          <span>Views</span>
        </div>
        <div className="flex items-center justify-between border-b border-[var(--color-border)] py-3 mx-1">
          <div className="flex gap-1 group cursor-pointer text-[var(--color-gray)] hover:text-blue-500 transition-colors">
             <div className="group-hover:bg-blue-500/10 p-2 -m-2 rounded-full"><MessageCircle size={22} /></div>
             <span className="text-[14px]">213</span>
          </div>
          <div className="flex gap-1 group cursor-pointer text-[var(--color-gray)] hover:text-green-500 transition-colors">
             <div className="group-hover:bg-green-500/10 p-2 -m-2 rounded-full"><Repeat2 size={22} /></div>
             <span className="text-[14px]">137</span>
          </div>
          <div className="flex gap-1 group cursor-pointer text-[var(--color-gray)] hover:text-pink-500 transition-colors">
             <div className="group-hover:bg-pink-500/10 p-2 -m-2 rounded-full"><Heart size={22} /></div>
             <span className="text-[14px]">935</span>
          </div>
           <div className="flex gap-1 group cursor-pointer text-[var(--color-gray)] hover:text-blue-500 transition-colors">
             <div className="group-hover:bg-blue-500/10 p-2 -m-2 rounded-full"><Share size={22} /></div>
          </div>
        </div>
        <div className="flex gap-3 py-4 border-b border-[var(--color-border)]">
           <img 
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" 
            alt="My Profile" 
            className="w-10 h-10 rounded-full"
          />
           <div className="flex-1">
              <div className="text-[var(--color-gray)] text-[15px] mb-2">Replying to <span className="text-[var(--color-primary)]">{post.handle}</span></div>
               <textarea 
                placeholder="Post your reply" 
                className="w-full bg-transparent text-xl placeholder-gray-500 outline-none resize-none min-h-[50px]"
                rows={2}
              ></textarea>
              <div className="flex justify-between items-center mt-2">
                 <div className="flex gap-2 text-[var(--color-primary)]">
                    <div className="cursor-pointer hover:bg-[rgba(29,155,240,0.1)] p-2 rounded-full"><MessageCircle size={18}/></div>
                 </div>
                 <Button variant="primary" disabled>Reply</Button>
              </div>
           </div>
        </div>
        <div className="flex flex-col">
            {[1, 2, 3].map((i) => (
               <div key={i} className="border-b border-[var(--color-border)] py-3 flex gap-3">
                   <div className="w-10 h-10 rounded-full bg-gray-700 flex-shrink-0"></div>
                   <div className="flex-1">
                      <div className="flex items-center gap-1 text-[15px] mb-1">
                         <span className="font-bold">Random User</span>
                         <span className="text-[var(--color-gray)]">@random · {i}h</span>
                      </div>
                      <p className="text-[15px]">This is a mock reply to demonstrate the layout. It looks just like the real thing!</p>
                   </div>
               </div>
            ))}
        </div>

      </div>
    </div>
  );
}
