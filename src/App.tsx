import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, ArrowUp } from 'lucide-react';
import { SakuraCanvas } from './components/SakuraCanvas';
import { PageLoader } from './components/PageLoader';
import { BottomNav } from './components/BottomNav';
import { Sidebar } from './components/Sidebar';
import { HomePage } from './pages/HomePage';
import { ArticlesPage } from './pages/ArticlesPage';
import { VideosPage } from './pages/VideosPage';
import { ImagesPage } from './pages/ImagesPage';
import { AboutPage } from './pages/AboutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // 主题切换
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // 滚动监听
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 返回顶部
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 页面切换处理
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 返回首页
  const handleBack = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 渲染当前页面
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'articles':
        return <ArticlesPage onBack={handleBack} />;
      case 'videos':
        return <VideosPage onBack={handleBack} />;
      case 'images':
        return <ImagesPage onBack={handleBack} />;
      case 'about':
        return <AboutPage onBack={handleBack} />;
      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* 页面加载器 */}
      <PageLoader />

      {/* 樱花动画背景 */}
      <SakuraCanvas />

      {/* 主内容区 */}
      <main className="main-content">
        {/* 首页显示顶部菜单按钮 */}
        {currentPage === 'home' && (
          <div className="fixed top-0 left-0 right-0 z-50 p-4">
            <div className="flex justify-between items-center">
              <button 
                className="w-10 h-10 rounded-full glass flex items-center justify-center"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu size={20} />
              </button>
              <button 
                className="w-10 h-10 rounded-full glass flex items-center justify-center"
                onClick={() => setIsDark(!isDark)}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        )}

        {/* 页面内容 */}
        {renderPage()}
      </main>

      {/* 底部导航 - 仅在首页显示 */}
      {currentPage === 'home' && (
        <BottomNav 
          currentPage={currentPage} 
          onPageChange={handlePageChange} 
        />
      )}

      {/* 侧边栏 */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        isDark={isDark}
        onThemeToggle={() => setIsDark(!isDark)}
        onPageChange={handlePageChange}
      />

      {/* 返回顶部按钮 */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default App;
