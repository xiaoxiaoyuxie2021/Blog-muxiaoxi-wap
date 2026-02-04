import { Home, FileText, Play, Image, User } from 'lucide-react';

interface BottomNavProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navItems = [
  { id: 'home', label: '首页', icon: Home },
  { id: 'articles', label: '文章', icon: FileText },
  { id: 'videos', label: '视频', icon: Play },
  { id: 'images', label: '图片', icon: Image },
  { id: 'about', label: '关于', icon: User },
];

export function BottomNav({ currentPage, onPageChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = currentPage === item.id;
        return (
          <button
            key={item.id}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
            onClick={() => onPageChange(item.id)}
          >
            <Icon />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
