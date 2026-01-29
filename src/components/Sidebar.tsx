import React from 'react';
import { 
  Home, 
  Search, 
  Bell, 
  Mail, 
  Bookmark, 
  User, 
  MoreHorizontal,
  Users,
  Settings,
  HelpCircle,
  Monitor
} from 'lucide-react';
import Button from './Button';

const XLogo = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[26px] w-[26px] fill-[var(--color-white)]">
    <g>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
    </g>
  </svg>
);

const NavItem = ({ icon: Icon, text, active = false, onClick }: { icon: any, text?: string, active?: boolean, onClick?: () => void }) => (
  <div onClick={onClick} className={`
    flex items-center gap-4 p-3 pr-8 w-fit rounded-full cursor-pointer transition-colors
    ${active ? 'font-bold' : 'font-normal'}
    hover:bg-[var(--color-dim-gray)]
  `}>
    {Icon}
    <span className="text-xl hidden xl:block">{text}</span>
  </div>
);

const MoreMenu = () => (
  <div className="absolute bottom-full left-0 mb-2 w-[220px] bg-black border border-[var(--color-border)] shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-xl overflow-hidden z-50 flex flex-col py-1">
    <div className="flex items-center gap-4 px-4 py-3 hover:bg-[var(--color-dim-gray)] cursor-pointer transition-colors">
      <Settings size={20} />
      <span className="text-lg font-normal">Settings and privacy</span>
    </div>
    <div className="flex items-center gap-4 px-4 py-3 hover:bg-[var(--color-dim-gray)] cursor-pointer transition-colors">
      <HelpCircle size={20} />
      <span className="text-lg font-normal">Help Center</span>
    </div>
    <div className="flex items-center gap-4 px-4 py-3 hover:bg-[var(--color-dim-gray)] cursor-pointer transition-colors">
      <Monitor size={20} />
      <span className="text-lg font-normal">Display</span>
    </div>
  </div>
);

export default function Sidebar() {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = React.useState(false);

  return (
    <div className="flex flex-col h-screen fixed top-0 w-[68px] xl:w-[275px] px-2 overflow-y-auto border-r border-[var(--color-border)]">
      <div className="p-3 w-fit rounded-full hover:bg-[var(--color-dim-gray)] cursor-pointer transition-colors mb-2">
        <XLogo />
      </div>

      <nav className="flex flex-col gap-2 mb-4">
        <NavItem icon={<Home size={26} strokeWidth={2.5} />} text="Home" active />
        <NavItem icon={<Search size={26} />} text="Explore" />
        <NavItem icon={<Bell size={26} />} text="Notifications" />
        <NavItem icon={<Mail size={26} />} text="Chat" />
        <NavItem 
          icon={
            <svg viewBox="0 0 48 48" className="h-[26px] w-[26px] fill-[var(--color-white)]">
              <path d="M18.542 30.532l15.956-11.776c.783-.576 1.902-.354 2.274.545 1.962 4.728 1.084 10.411-2.819 14.315-3.903 3.901-9.333 4.756-14.299 2.808l-5.423 2.511c7.778 5.315 17.224 4 23.125-1.903 4.682-4.679 6.131-11.058 4.775-16.812l.011.011c-1.966-8.452.482-11.829 5.501-18.735C47.759 1.332 47.88 1.166 48 1l-6.602 6.599V7.577l-22.86 22.958M15.248 33.392c-5.582-5.329-4.619-13.579.142-18.339 3.521-3.522 9.294-4.958 14.331-2.847l5.412-2.497c-.974-.704-2.224-1.46-3.659-1.994-6.478-2.666-14.238-1.34-19.505 3.922C6.904 16.701 5.31 24.488 8.045 31.133c2.044 4.965-1.307 8.48-4.682 12.023C2.164 44.411.967 45.67 0 47l15.241-13.608"></path>
            </svg>
          }
          text="Grok"
        />
        <NavItem icon={<Bookmark size={26} />} text="Bookmarks" />
        <NavItem icon={<Users size={26} />} text="Communities" />
        <NavItem icon={<XLogo />} text="Premium" />
        <NavItem icon={<User size={26} />} text="Profile" />
        <div className="relative">
          {isMoreMenuOpen && <MoreMenu />}
          <NavItem 
            icon={<MoreHorizontal size={26} />} 
            text="More" 
            onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
          />
        </div>
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
            src="https://github.com/shadcn.png" 
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
