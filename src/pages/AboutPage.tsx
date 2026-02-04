import { ChevronLeft, Sparkles, BookOpen, Gamepad2, Music, Camera, Coffee } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

const tags = [
  { name: '二次元', icon: Sparkles },
  { name: '动漫', icon: BookOpen },
  { name: '游戏', icon: Gamepad2 },
  { name: '音乐', icon: Music },
  { name: '摄影', icon: Camera },
  { name: '日常', icon: Coffee },
];

const sections = [
  {
    title: '本站内容',
    content: '本站主要包含：动漫/番剧安利与观感、游戏体验与小技巧、视觉灵感与壁纸分享、日常记录与随想碎碎念。内容以轻松、真诚为主，也会适当做一些整理与归档，方便大家浏览。',
  },
  {
    title: '写作理念',
    content: '我更在意"真实"和"可读性"。不追热点，只分享自己喜欢的东西；不追繁琐，只希望每篇内容都能让你读得舒服、看得开心。',
  },
  {
    title: '更新频率',
    content: '不定期更新。如果你喜欢某个系列或希望新增栏目，欢迎给我留言。',
  },
  {
    title: '版权声明',
    content: '除特别说明外，本站内容均为原创或已获得授权转载。图片与视频素材来源于公开平台，若有侵权请联系我删除。',
  },
  {
    title: '联系与合作',
    content: '如有建议、反馈或合作意向，请在首页的联系方式与我联系，也欢迎在留言区留下你的想法。',
  },
];

export function AboutPage({ onBack }: AboutPageProps) {
  return (
    <div className="fade-in">
      {/* 顶部栏 */}
      <div className="top-bar">
        <button className="top-bar-btn" onClick={onBack}>
          <ChevronLeft size={24} />
        </button>
        <span className="top-bar-title">关于</span>
        <div className="w-10" />
      </div>

      {/* 博主信息卡片 */}
      <div className="p-4">
        <div className="about-card">
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop" 
            alt="博主头像"
            className="about-avatar"
          />
          <h1 className="about-name">沐咲汐</h1>
          <p className="about-desc">
            二次元爱好者 / 轻度游戏玩家 / 记录生活与灵感的普通人
          </p>
          
          {/* 标签 */}
          <div className="about-tags">
            {tags.map((tag) => {
              const Icon = tag.icon;
              return (
                <span key={tag.name} className="about-tag flex items-center gap-1">
                  <Icon size={14} />
                  {tag.name}
                </span>
              );
            })}
          </div>

          {/* 社交链接 */}
          <div className="flex justify-center gap-4">
            <a 
              href="https://space.bilibili.com/431028772" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{ 
                background: 'rgba(255, 183, 197, 0.2)',
                color: 'var(--sakura-dark)'
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/>
              </svg>
              哔哩哔哩
            </a>
            <a 
              href="https://github.com/xiaoxiaoyuxie2021" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{ 
                background: 'rgba(255, 183, 197, 0.2)',
                color: 'var(--sakura-dark)'
              }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* 关于本站 */}
        <div className="about-card" style={{ padding: '20px' }}>
          <h2 
            className="text-lg font-bold mb-4"
            style={{ color: 'var(--sakura-dark)' }}
          >
            关于本站
          </h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            欢迎来到沐咲汐的博客！这里是一片温柔又热闹的小天地，记录二次元、动漫、游戏、音乐与日常。无论你是资深玩家还是刚入坑的新朋友，都希望能在这里找到被治愈的瞬间。
          </p>

          {sections.map((section, index) => (
            <div key={index} className="about-section">
              <h3 className="about-section-title">
                <Sparkles size={16} style={{ color: 'var(--sakura-pink)' }} />
                {section.title}
              </h3>
              <p className="about-section-text">
                {section.content}
              </p>
            </div>
          ))}

          <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--glass-border)' }}>
            <p className="text-center text-sm text-muted-foreground">
              感谢你的访问，愿你在这里收获灵感与好心情！
            </p>
          </div>
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
