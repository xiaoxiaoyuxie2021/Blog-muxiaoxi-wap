import { Eye, Clock, ChevronLeft } from 'lucide-react';

interface ArticlesPageProps {
  onBack: () => void;
}

const articles = [
  {
    id: 1,
    title: '2024年度动漫推荐清单',
    excerpt: '整理了这一年来值得一看的优秀动漫作品，包括《葬送的芙莉莲》、《迷宫饭》等佳作。每一部都有独特的魅力，值得花时间细细品味。',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=250&fit=crop',
    date: '2024-12-20',
    views: 1234,
    readTime: '5分钟',
    category: '动漫',
  },
  {
    id: 2,
    title: '我的游戏日常分享',
    excerpt: '最近沉迷的几款游戏，每一款都有独特的魅力。从开放世界到独立小品，游戏世界总是充满惊喜。',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop',
    date: '2024-12-18',
    views: 892,
    readTime: '3分钟',
    category: '游戏',
  },
  {
    id: 3,
    title: '治愈系音乐推荐',
    excerpt: '分享一些让人心情平静的歌曲，适合在夜晚或午后聆听。音乐是最好的治愈良药。',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=250&fit=crop',
    date: '2024-12-15',
    views: 756,
    readTime: '4分钟',
    category: '音乐',
  },
  {
    id: 4,
    title: '二次元壁纸分享',
    excerpt: '精选高清二次元壁纸，适配各种设备分辨率。让你的屏幕也充满动漫气息。',
    image: 'https://images.unsplash.com/photo-1560972550-aba3456b5564?w=400&h=250&fit=crop',
    date: '2024-12-12',
    views: 2341,
    readTime: '2分钟',
    category: '美图',
  },
  {
    id: 5,
    title: '日常随笔：冬日暖阳',
    excerpt: '窗外的阳光透过玻璃洒进来，温暖而柔和。这样的午后，适合泡一杯茶，读一本书。',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop',
    date: '2024-12-10',
    views: 567,
    readTime: '3分钟',
    category: '日常',
  },
];

export function ArticlesPage({ onBack }: ArticlesPageProps) {
  return (
    <div className="fade-in">
      {/* 顶部栏 */}
      <div className="top-bar">
        <button className="top-bar-btn" onClick={onBack}>
          <ChevronLeft size={24} />
        </button>
        <span className="top-bar-title">文章</span>
        <div className="w-10" />
      </div>

      {/* 页面标题 */}
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--sakura-dark)' }}>
          文章列表
        </h1>
        <p className="text-sm text-muted-foreground">
          这里是沐咲汐的个人博客文章区
        </p>
      </div>

      {/* 文章列表 */}
      <div className="p-4 space-y-4">
        {articles.map((article) => (
          <article 
            key={article.id} 
            className="content-card overflow-hidden"
          >
            <img 
              src={article.image} 
              alt={article.title}
              className="content-card-image"
            />
            <div className="content-card-body">
              <div className="flex items-center gap-2 mb-2">
                <span 
                  className="px-2 py-0.5 rounded-full text-xs"
                  style={{ 
                    background: 'rgba(255, 183, 197, 0.2)',
                    color: 'var(--sakura-dark)'
                  }}
                >
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground">{article.date}</span>
              </div>
              <h3 className="content-card-title">{article.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {article.excerpt}
              </p>
              <div className="content-card-meta">
                <span className="flex items-center gap-1">
                  <Eye size={14} />
                  {article.views}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {article.readTime}
                </span>
              </div>
            </div>
          </article>
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
