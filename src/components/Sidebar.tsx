import { 
  X, Home, Share2, Link2, Settings, Moon, Sun, 
  Globe, ChevronDown, ChevronRight 
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onThemeToggle: () => void;
  onPageChange: (page: string) => void;
}

const friendLinks = [
  { name: '网易云音乐', url: 'https://music.163.com/' },
  { name: '哔哩哔哩', url: 'https://www.bilibili.com/' },
  { name: '鸣潮', url: 'https://mc.kurogames.com/' },
  { name: '蔚蓝档案', url: 'https://bluearchive-cn.com/' },
];

export function Sidebar({ 
  isOpen, 
  onClose, 
  isDark, 
  onThemeToggle,
  onPageChange 
}: SidebarProps) {
  const [showFriendLinks, setShowFriendLinks] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  const handlePageClick = (page: string) => {
    onPageChange(page);
    onClose();
  };

  return (
    <>
      <div 
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-title">菜单</span>
          <button className="sidebar-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-menu">
          <button 
            className="sidebar-item w-full"
            onClick={() => handlePageClick('home')}
          >
            <Home />
            <span>首页</span>
          </button>

          <div className="sidebar-divider" />
          <div className="sidebar-section-title">切换</div>

          <button 
            className="sidebar-item w-full"
            onClick={onThemeToggle}
          >
            {isDark ? <Sun /> : <Moon />}
            <span>{isDark ? '浅色版' : '深色版'}</span>
          </button>

          <button 
            className="sidebar-item w-full justify-between"
            onClick={() => setShowLanguages(!showLanguages)}
          >
            <div className="flex items-center gap-3">
              <Globe />
              <span>语言</span>
            </div>
            {showLanguages ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>
          
          {showLanguages && (
            <div className="pl-11 py-2 space-y-2">
              <button className="block text-sm text-muted-foreground py-1">
                简体中文
              </button>
              <button className="block text-sm text-muted-foreground py-1">
                English
              </button>
              <button className="block text-sm text-muted-foreground py-1">
                日本語
              </button>
              <button className="block text-sm text-muted-foreground py-1">
                繁體中文
              </button>
            </div>
          )}

          <div className="sidebar-divider" />
          <div className="sidebar-section-title">功能</div>

          <button className="sidebar-item w-full">
            <Share2 />
            <span>分享</span>
          </button>

          <button 
            className="sidebar-item w-full justify-between"
            onClick={() => setShowFriendLinks(!showFriendLinks)}
          >
            <div className="flex items-center gap-3">
              <Link2 />
              <span>友链</span>
            </div>
            {showFriendLinks ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
          </button>
          
          {showFriendLinks && (
            <div className="pl-11 py-2 space-y-2">
              {friendLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-sm text-muted-foreground py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}

          <button className="sidebar-item w-full">
            <Settings />
            <span>设置</span>
          </button>
        </div>
      </aside>
    </>
  );
}
