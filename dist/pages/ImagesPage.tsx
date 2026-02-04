import { Heart, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

interface ImagesPageProps {
  onBack: () => void;
}

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop',
    title: '樱花盛开',
    likes: 128,
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&h=400&fit=crop',
    title: '山间晨雾',
    likes: 256,
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
    title: '星空银河',
    likes: 189,
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop',
    title: '山间小径',
    likes: 145,
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=400&fit=crop',
    title: '雪山日出',
    likes: 312,
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=400&fit=crop',
    title: '森林深处',
    likes: 98,
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop',
    title: '湖光山色',
    likes: 234,
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=400&fit=crop',
    title: '瀑布飞流',
    likes: 167,
  },
];

export function ImagesPage({ onBack }: ImagesPageProps) {
  const [likedImages, setLikedImages] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    setLikedImages(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="fade-in">
      {/* 顶部栏 */}
      <div className="top-bar">
        <button className="top-bar-btn" onClick={onBack}>
          <ChevronLeft size={24} />
        </button>
        <span className="top-bar-title">图片</span>
        <div className="w-10" />
      </div>

      {/* 页面标题 */}
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-2xl font-bold mb-1" style={{ color: 'var(--sakura-dark)' }}>
          图片分享
        </h1>
        <p className="text-sm text-muted-foreground">
          这里是沐咲汐的个人博客图片区
        </p>
      </div>

      {/* 图片瀑布流 */}
      <div className="p-4 grid grid-cols-2 gap-3">
        {images.map((image) => {
          const isLiked = likedImages.includes(image.id);
          return (
            <div key={image.id} className="content-card">
              <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3 flex items-center justify-between">
                <span className="text-sm font-medium truncate flex-1">
                  {image.title}
                </span>
                <button 
                  className="flex items-center gap-1 text-xs"
                  onClick={() => toggleLike(image.id)}
                >
                  <Heart 
                    size={16} 
                    fill={isLiked ? 'var(--sakura-pink)' : 'none'}
                    color={isLiked ? 'var(--sakura-pink)' : 'currentColor'}
                  />
                  <span style={{ color: isLiked ? 'var(--sakura-pink)' : 'inherit' }}>
                    {image.likes + (isLiked ? 1 : 0)}
                  </span>
                </button>
              </div>
            </div>
          );
        })}
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
