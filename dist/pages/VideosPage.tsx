import { Play, Eye, ChevronLeft } from 'lucide-react';

interface VideosPageProps {
  onBack: () => void;
}

const videos = [
  {
    id: 1,
    title: '治愈系风景合集 - 山间晨雾',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=225&fit=crop',
    duration: '03:45',
    views: '2.3k',
    date: '2024-12-20',
  },
  {
    id: 2,
    title: '二次元音乐推荐 - 钢琴曲精选',
    thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=225&fit=crop',
    duration: '05:20',
    views: '1.8k',
    date: '2024-12-18',
  },
  {
    id: 3,
    title: '游戏实况：探索开放世界',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop',
    duration: '12:30',
    views: '3.5k',
    date: '2024-12-15',
  },
  {
    id: 4,
    title: '动漫混剪 - 青春的记忆',
    thumbnail: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=225&fit=crop',
    duration: '04:15',
    views: '5.2k',
    date: '2024-12-12',
  },
  {
    id: 5,
    title: '日常Vlog：周末的咖啡时光',
    thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=225&fit=crop',
    duration: '06:00',
    views: '1.2k',
    date: '2024-12-10',
  },
  {
    id: 6,
    title: '星空延时摄影',
    thumbnail: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=225&fit=crop',
    duration: '02:30',
    views: '4.1k',
    date: '2024-12-08',
  },
];

export function VideosPage({ onBack }: VideosPageProps) {
  return (
    <div className="fade-in">
      {/* 顶部栏 */}
      <div className="top-bar">
        <button className="top-bar-btn" onClick={onBack}>
          <ChevronLeft size={24} />
        </button>
        <span className="top-bar-title">视频</span>
        <div className="w-10" />
      </div>

      {/* 页面标题 */}
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--sakura-dark)' }}>
          视频列表
        </h1>
        <p className="text-sm text-muted-foreground">
          这里是沐咲汐的个人博客视频区
        </p>
      </div>

      {/* 视频网格 */}
      <div className="p-4 grid grid-cols-1 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
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
                <span className="flex items-center gap-1">
                  <Eye size={14} />
                  {video.views} 次观看
                </span>
                <span>•</span>
                <span>{video.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 加载更多 */}
      <div className="px-4 pb-8">
        <button 
          className="w-full py-3 rounded-xl text-sm font-medium"
          style={{ 
            background: 'rgba(255, 183, 197, 0.2)',
            color: 'var(--sakura-dark)'
          }}
        >
          加载更多
        </button>
      </div>
    </div>
  );
}
