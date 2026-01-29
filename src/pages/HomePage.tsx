import React from 'react';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-black)] flex justify-center">
      <div className="flex w-full max-w-[1265px]">
        <div className="flex-shrink-0">
          <Sidebar />
        </div>
        <main className="flex-grow flex w-full relative xl:ml-[275px] ml-[68px]">
           <Feed />
           <Widgets />
        </main>
      </div>
    </div>
  );
}
