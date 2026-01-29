import React from 'react';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import PostDetail from '../components/PostDetail';

export default function PostPage() {
  return (
    <div className="min-h-screen bg-[var(--color-black)] flex justify-center">
      <div className="flex w-full max-w-[1265px]">
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        <main className="flex-grow flex w-full relative xl:ml-[275px] ml-[68px]">
           <PostDetail />
           <Widgets />
        </main>
      </div>
    </div>
  );
}
