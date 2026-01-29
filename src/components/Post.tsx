import React from 'react';
import { MessageCircle, Repeat2, Heart, BarChart2, Share, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PostProps {
  id: string;
  avatar: string;
  name: string;
  handle: string;
  time: string;
  content: string;
  image?: string;
  stats: {
    comments: string;
    reposts: string;
    likes: string;
    views: string;
  };
}

const PostAction = ({ icon: Icon, value, color }: { icon: any, value: string, color: 'blue' | 'green' | 'pink' }) => {
  const colorStyles = {
    blue: {
      text: 'hover:text-blue-500',
      bg: 'group-hover:bg-blue-500/10'
    },
    green: {
      text: 'hover:text-green-500',
      bg: 'group-hover:bg-green-500/10'
    },
    pink: {
      text: 'hover:text-pink-500',
      bg: 'group-hover:bg-pink-500/10' // Note: 'pink' is a default Tailwind color
    }
  };

  const styles = colorStyles[color] || colorStyles.blue;

  return (
    <div 
      className={`flex items-center gap-1 group cursor-pointer text-[var(--color-gray)] ${styles.text} transition-colors`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className={`p-2 rounded-full ${styles.bg}`}>
        <Icon size={18} />
      </div>
      <span className="text-[13px]">{value}</span>
    </div>
  );
};

export default function Post({ id, avatar, name, handle, time, content, image, stats }: PostProps) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/post/${id}`)}
      className="border-b border-[var(--color-border)] p-4 hover:bg-[rgba(255,255,255,0.03)] cursor-pointer transition-colors"
    >
      <div className="flex gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0" onClick={(e) => e.stopPropagation()}>
          <img 
            src={avatar} 
            alt={handle} 
            className="w-10 h-10 rounded-full hover:opacity-80 transition-opacity"
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-[15px] truncate">
              <span className="font-bold text-[var(--color-white)] truncate hover:underline" onClick={(e) => e.stopPropagation()}>{name}</span>
              <span className="text-[var(--color-gray)] truncate">{handle}</span>
              <span className="text-[var(--color-gray)]">·</span>
              <span className="text-[var(--color-gray)]">{time}</span>
            </div>
            <div 
              className="text-[var(--color-gray)] p-1 rounded-full hover:bg-[rgba(29,155,240,0.1)] hover:text-[var(--color-primary)]"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreHorizontal size={18} />
            </div>
          </div>

          <p className="text-[15px] text-[var(--color-white)] whitespace-pre-wrap mb-3 leading-5">
            {content}
          </p>
          {image && (
            <div className="rounded-2xl border border-[var(--color-border)] overflow-hidden mb-3">
              <img src={image} alt="Post content" className="w-full h-auto object-cover max-h-[500px]" />
            </div>
          )}
          <div className="flex justify-between max-w-[425px] mt-1">
            <PostAction icon={MessageCircle} value={stats.comments} color="blue" />
            <PostAction icon={Repeat2} value={stats.reposts} color="green" />
            <PostAction icon={Heart} value={stats.likes} color="pink" />
            <PostAction icon={BarChart2} value={stats.views} color="blue" />
            <div 
              className="flex items-center group cursor-pointer text-[var(--color-gray)] hover:text-blue-500"
              onClick={(e) => e.stopPropagation()}
            >
               <div className="p-2 rounded-full group-hover:bg-blue-500/10">
                 <Share size={18} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
