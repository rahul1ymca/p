import React, { useState, useEffect } from 'react';
import { TocItem } from '../types';
import { ListCollapse, ChevronRight, Bookmark } from 'lucide-react';

interface TableOfContentsProps {
  items: TocItem[];
  title: string;
  lang: 'hi' | 'en';
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items, title, lang }) => {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0.1
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const yOffset = -90; // offset for fixed header
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveId(id);
      setIsOpenMobile(false);
      // update hash without harsh jump
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav 
      id="table-of-contents" 
      aria-label="Table of contents"
      className="bg-white rounded-xl border border-blue-100 shadow-xs p-5 md:p-6 mb-10 transition-all"
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
          <Bookmark className="w-5 h-5 text-blue-600" />
          <h2>{title}</h2>
        </div>

        {/* Mobile toggle button */}
        <button
          type="button"
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="md:hidden flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100"
          aria-expanded={isOpenMobile}
        >
          <ListCollapse className="w-4 h-4" />
          <span>{isOpenMobile ? (lang === 'hi' ? 'छुपाएं' : 'Hide') : (lang === 'hi' ? 'खोलें' : 'View')}</span>
        </button>
      </div>

      <p className="text-xs text-slate-500 mt-2 mb-4">
        {lang === 'hi' 
          ? 'सीधे उस भाग पर जाने के लिए नीचे दिए गए किसी भी शीर्षक पर क्लिक करें:' 
          : 'Click on any topic below to jump directly to that section:'}
      </p>

      {/* List of jump-on links */}
      <ol className={`space-y-1 text-sm font-medium ${isOpenMobile ? 'block' : 'hidden md:block'}`}>
        {items.map((item, index) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`group flex items-start gap-2.5 px-3 py-2 rounded-lg transition-all text-left ${
                  isActive
                    ? 'bg-blue-50/90 text-blue-900 font-semibold border-l-4 border-blue-600 pl-2.5'
                    : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                }`}
              >
                <ChevronRight className={`w-4 h-4 mt-0.5 shrink-0 transition-transform ${
                  isActive ? 'text-blue-600 translate-x-0.5' : 'text-slate-400 group-hover:text-blue-600'
                }`} />
                <span className="leading-snug">{item.title}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
