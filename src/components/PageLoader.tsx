import { useEffect, useState } from 'react';

export function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-loader ${hidden ? 'hidden' : ''}`}>
      <div className="flex flex-col items-center">
        <div className="loader-ring" />
        <div className="loader-dots">
          <span />
          <span />
          <span />
        </div>
        <p className="mt-4 text-sm" style={{ color: 'var(--sakura-pink)' }}>
          加载中…
        </p>
      </div>
    </div>
  );
}
