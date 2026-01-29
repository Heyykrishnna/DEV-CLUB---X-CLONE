import { useState } from 'react';
import Post from './Post';
import Button from './Button';
import { Image, ChartNoAxesColumn, Smile, CalendarClock, MapPin } from 'lucide-react';
import { POSTS } from '../data/posts';

export default function Feed() {
  const [activeTab, setActiveTab] = useState<'foryou' | 'following'>('foryou');
  const [posts, setPosts] = useState(POSTS);
  const [content, setContent] = useState('');

  const handlePost = () => {
    if (!content.trim()) return;

    const newPost = {
      id: Date.now().toString(),
      avatar: "https://github.com/shadcn.png",
      name: "User Name", 
      handle: "@username",
      time: "1s",
      content: content,
      stats: { comments: "0", reposts: "0", likes: "0", views: "0" }
    };

    setPosts([newPost, ...posts]);
    setContent('');
  };

  return (
    <div className="flex-1 min-h-screen border-r border-[var(--color-border)] max-w-[600px] w-full">
      <div className="sticky top-0 z-10 bg-[rgba(0,0,0,0.65)] backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="grid grid-cols-2 h-[53px]">
          <div 
            className="flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-colors relative"
            onClick={() => setActiveTab('foryou')}
          >
            <span className={`font-bold text-[15px] ${activeTab === 'foryou' ? 'text-[var(--color-white)]' : 'text-[var(--color-gray)]'}`}>
              For you
            </span>
            {activeTab === 'foryou' && <div className="absolute bottom-0 h-[4px] w-[56px] bg-[var(--color-primary)] rounded-full"></div>}
          </div>
          <div 
            className="flex items-center justify-center hover:bg-[rgba(255,255,255,0.1)] cursor-pointer transition-colors relative"
            onClick={() => setActiveTab('following')}
          >
            <span className={`font-bold text-[15px] ${activeTab === 'following' ? 'text-[var(--color-white)]' : 'text-[var(--color-gray)]'}`}>
              Following
            </span>
            {activeTab === 'following' && <div className="absolute bottom-0 h-[4px] w-[70px] bg-[var(--color-primary)] rounded-full"></div>}
          </div>
        </div>
      </div>
      <div className="p-4 border-b border-[var(--color-border)] flex gap-3">
        <div className="flex-shrink-0">
          <img 
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" 
            alt="Profile" 
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="flex-1 pt-2">
          <textarea 
            placeholder="What is happening?!" 
            className="w-full bg-transparent text-xl placeholder-gray-500 outline-none resize-none min-h-[50px]"
            rows={2}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <div className="flex items-center justify-between mt-2 border-t border-[var(--color-border)] pt-3">
            <div className="flex gap-1 text-[var(--color-primary)]">
               <div className="p-2 rounded-full hover:bg-[rgba(29,155,240,0.1)] cursor-pointer"><Image size={20}/></div>
               <div className="p-2 rounded-full hover:bg-[rgba(29,155,240,0.1)] cursor-pointer"><div className="border border-current rounded-sm text-[10px] px-1 font-bold">GIF</div></div>
               <div className="p-2 rounded-full hover:bg-[rgba(29,155,240,0.1)] cursor-pointer"><ChartNoAxesColumn size={20}/></div>
               <div className="p-2 rounded-full hover:bg-[rgba(29,155,240,0.1)] cursor-pointer"><Smile size={20}/></div>
               <div className="p-2 rounded-full hover:bg-[rgba(29,155,240,0.1)] cursor-pointer"><CalendarClock size={20}/></div>
               <div className="p-2 rounded-full hover:bg-[rgba(29,155,240,0.1)] opacity-50"><MapPin size={20}/></div>
            </div>
            <Button 
              variant="primary" 
              size="normal" 
              className="px-5 py-1.5 font-bold text-[15px]" 
              disabled={!content.trim()}
              onClick={handlePost}
            >
              Post
            </Button>
          </div>
        </div>
      </div>
      <div className="pb-60">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
