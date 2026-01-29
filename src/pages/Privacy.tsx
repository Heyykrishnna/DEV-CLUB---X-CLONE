import React from 'react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col px-16 py-10">
        <div className="w-full flex items-center justify-between top-0 bg-white z-50">
            <div className="flex items-center gap-4">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-black">
                    <g>
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </g>
                </svg>
                <h1 className="text-[22px] font-bold text-black tracking-tight">Privacy Policy</h1>
            </div>
        </div>
        <div className="w-full max-w-[650px] px-4 mt-52">
            <h1 className="text-[140px] font-bold leading-none text-black/90 tracking-tight">X Privacy Policy</h1>
        </div>
        <div className="w-full max-w-full px-4 mt-36 bg-black p-10">
            <p className="text-white text-center font-bold">Effective: January 15, 2026</p>
        </div>
        <div className="w-full max-w-full pl-32 mt-32 p-10">
            <h2 className="text-4xl text-black/90 font-[700]">Before you scroll, read this</h2>
            <p className="text-black/90 mt-4 text-md leading-7">
                It’s really hard to make everyone happy with a Privacy Policy. Most people who use X want something short and easy to understand. While we wish we could fit everything you need to know into a post, our regulators ask us to meet our legal obligations by describing them all in a lot of detail.
                <br/>
                <span className="font-bold pt-12">With that in mind, we’ve written our Privacy Policy as simply as possible to empower you to make informed decisions when you use X by making sure you understand and have control over the information we collect, how it’s used, and when it’s shared.</span> 
            </p>
            <p className="text-black/90 mt-4 text-md leading-7">
                
            </p>
        </div>
    </div>
  );
}
