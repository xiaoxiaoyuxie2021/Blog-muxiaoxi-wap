import { useState, useEffect } from 'react';
import { 
  FileText, Play, Image, Info, ChevronRight, 
  Eye, Clock, MessageCircle 
} from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

// 模拟数据
const latestArticles = [
  {
    id: 1,
    title: '2024年度动漫推荐清单',
    excerpt: '整理了这一年来值得一看的优秀动漫作品...',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=250&fit=crop',
    date: '2024-12-20',
    views: 1234,
  },
  {
    id: 2,
    title: '我的游戏日常分享',
    excerpt: '最近沉迷的几款游戏，每一款都有独特的魅力...',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop',
    date: '2024-12-18',
    views: 892,
  },
];

const latestImages = [
  'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop',
];

const latestVideos = [
  {
    id: 1,
    title: '治愈系风景合集',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop',
    duration: '03:45',
    views: '2.3k',
  },
  {
    id: 2,
    title: '二次元音乐推荐',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=225&fit=crop',
    duration: '05:20',
    views: '1.8k',
  },
];

const stats = [
  { label: '总访问', value: '12.5K', icon: Eye },
  { label: '在线', value: '23', icon: MessageCircle },
  { label: '运行', value: '30天', icon: Clock },
];

export function HomePage({ onPageChange }: HomePageProps) {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fade-in">
      {/* 头部区域 */}
      <div className="header-section">
        <div className="avatar-container">
          <div className="avatar-ring" />
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop" 
            alt="头像" 
            className="avatar"
          />
        </div>
        <h1 className="title">沐咲汐的博客</h1>
        <p className="subtitle">探索有趣的内容和最新的更新</p>
        
        {/* 社交链接 */}
        <div className="social-links">
          <a href="https://space.bilibili.com/431028772" target="_blank" rel="noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/>
            </svg>
          </a>
          <a href="#" className="social-link">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
          <a href="#" className="social-link">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* 导航卡片 */}
      <div className="nav-cards">
        <button 
          className="nav-card"
          onClick={() => onPageChange('articles')}
        >
          <div className="nav-card-icon articles">
            <FileText size={24} color="#e91e63" />
          </div>
          <span>文章</span>
        </button>
        <button 
          className="nav-card"
          onClick={() => onPageChange('videos')}
        >
          <div className="nav-card-icon videos">
            <Play size={24} color="#3f51b5" />
          </div>
          <span>视频</span>
        </button>
        <button 
          className="nav-card"
          onClick={() => onPageChange('images')}
        >
          <div className="nav-card-icon images">
            <Image size={24} color="#4caf50" />
          </div>
          <span>图片</span>
        </button>
        <button 
          className="nav-card"
          onClick={() => onPageChange('about')}
        >
          <div className="nav-card-icon about">
            <Info size={24} color="#ff5722" />
          </div>
          <span>关于</span>
        </button>
      </div>

      {/* 统计信息 */}
      <div className="section">
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <Icon size={20} />
                </div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
          <div className="stat-card">
            <div className="stat-icon">
              <Clock size={20} />
            </div>
            <div className="stat-value">{currentTime}</div>
            <div className="stat-label">北京时间</div>
          </div>
        </div>
      </div>

      {/* 最新文章 */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">最新文章</h2>
          <button 
            className="section-more"
            onClick={() => onPageChange('articles')}
          >
            更多 <ChevronRight size={16} />
          </button>
        </div>
        <div className="article-list">
          {latestArticles.map((article) => (
            <div key={article.id} className="article-item">
              <img src={article.image} alt={article.title} className="article-thumb" />
              <div className="article-content">
                <h3 className="article-title">{article.title}</h3>
                <p className="article-excerpt">{article.excerpt}</p>
                <div className="article-meta">
                  <span>{article.date}</span>
                  <span>{article.views} 阅读</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 最新视频 */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">最新视频</h2>
          <button 
            className="section-more"
            onClick={() => onPageChange('videos')}
          >
            更多 <ChevronRight size={16} />
          </button>
        </div>
        <div className="horizontal-scroll">
          {latestVideos.map((video) => (
            <div key={video.id} className="scroll-item">
              <div className="video-card">
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="video-play-btn">
                    <Play fill="white" />
                  </div>
                  <span className="video-duration">{video.duration}</span>
                </div>
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                  <div className="video-stats">
                    <span>{video.views} 次观看</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 最新图片 */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">最新图片</h2>
          <button 
            className="section-more"
            onClick={() => onPageChange('images')}
          >
            更多 <ChevronRight size={16} />
          </button>
        </div>
        <div className="image-grid">
          {latestImages.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`图片 ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* 页脚 */}
      <footer className="footer">
        <p className="footer-quote">"唯深衷之思，可越千载之隔"</p>
        <p>© 2026 沐咲汐. 保留所有权利.</p>
      </footer>
    </div>
  );
}
