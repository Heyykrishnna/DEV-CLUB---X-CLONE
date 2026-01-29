import React from 'react';
import { 
  Home, 
  Search, 
  Bell, 
  Mail, 
  Bookmark, 
  User, 
  MoreHorizontal,
  SquareTerminal,
  Users
} from 'lucide-react';
import Button from './Button';

// Custom X Logo component for the menu
const XLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[26px] w-[26px] fill-[var(--color-white)]">
    <g>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </g>
  </svg>
);

const NavItem = ({ icon: Icon, text, active = false }: { icon: any, text?: string, active?: boolean }) => (
  <div className={`
    flex items-center gap-4 p-3 pr-8 w-fit rounded-full cursor-pointer transition-colors
    ${active ? 'font-bold' : 'font-normal'}
    hover:bg-[var(--color-dim-gray)]
  `}>
    {Icon}
    <span className="text-xl hidden xl:block">{text}</span>
  </div>
);

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen fixed top-0 w-[68px] xl:w-[275px] px-2 overflow-y-auto border-r border-[var(--color-border)]">
      <div className="p-3 w-fit rounded-full hover:bg-[var(--color-dim-gray)] cursor-pointer transition-colors mb-2">
        <XLogo />
      </div>

      <nav className="flex flex-col gap-2 mb-4">
        <NavItem icon={<Home size={26} strokeWidth={2.5} />} text="Home" active />
        <NavItem icon={<Search size={26} />} text="Explore" />
        <NavItem icon={<Bell size={26} />} text="Notifications" />
        <NavItem icon={<Mail size={26} />} text="Messages" />
        <NavItem icon={<SquareTerminal size={26} />} text="Grok" />
        <NavItem icon={<Bookmark size={26} />} text="Bookmarks" />
        <NavItem icon={<Users size={26} />} text="Communities" />
        <NavItem icon={<XLogo />} text="Premium" />
        <NavItem icon={<User size={26} />} text="Profile" />
        <NavItem icon={<MoreHorizontal size={26} />} text="More" />
      </nav>

      <div className="w-full my-4">
        <Button variant="primary" size="large" fullWidth className="hidden xl:block shadow-lg">
          Post
        </Button>
        <div className="xl:hidden bg-[var(--color-primary)] p-3 rounded-full w-[50px] h-[50px] flex items-center justify-center hover:bg-[var(--color-primary-hover)] cursor-pointer shadow-lg">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-white"><g><path d="M23 3c-6.62-.1-10.38 2.42-13.05 6.06C5.7 14.2 3.37 17.77.1 18c6.69.1 10.38-2.42 13.05-6.06C18.3 6.8 20.62 3.23 23.9 3z"></path></g></svg>
        </div>
      </div>

      <div className="mt-auto mb-4 flex items-center gap-3 p-3 rounded-full hover:bg-[var(--color-dim-gray)] cursor-pointer transition-colors">
        <div className="w-10 h-10 rounded-full bg-gray-600 flex-shrink-0">
          <img 
            src="https://cdn.magicdecor.in/com/2024/02/15132806/Faces-Minimalist-Abstract-Aesthetic-Style-Wallpaper-Mural.jpg" 
            alt="Profile" 
            className="rounded-full w-full h-full"
          />
        </div>
        <div className="hidden xl:block flex-1 overflow-hidden">
          <p className="font-bold truncate">User Name</p>
          <p className="text-[var(--color-gray)] truncate">@username</p>
        </div>
        <MoreHorizontal className="hidden xl:block text-[var(--color-white)]" size={18} />
      </div>
    </div>
  );
}
