import React, { useEffect, useState } from 'react';
import { AlignLeft } from 'lucide-react';
import { TableOfContentItem } from '@/types/post';

interface TableOfContentsProps {
  content: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const [headings, setHeadings] = useState<TableOfContentItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract H2 and H3 from markdown
    const headingLines = content.split('\n').filter((line) => line.startsWith('## ') || line.startsWith('### '));
    const items: TableOfContentItem[] = headingLines.map((line) => {
      const isH2 = line.startsWith('## ');
      const text = line.replace(/^###?\s+/, '').replace(/`.*?`/g, (m) => m.replace(/`/g, '')).trim();
      // Generate ID matching rehype-slug standard
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-');

      return {
        id,
        text,
        level: isH2 ? 2 : 3,
      };
    });

    setHeadings(items);
  }, [content]);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0% -60% 0%',
        threshold: 0.1,
      }
    );

    headings.forEach((h) => {
      const element = document.getElementById(h.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <div className="p-4 rounded-xl border border-dark-border bg-dark-surface/60 dark:bg-dark-surface/60 light:bg-white light:border-slate-200">
      <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-3">
        <AlignLeft className="w-3.5 h-3.5 text-brand-400" />
        <span>Table of Contents</span>
      </div>
      <nav className="space-y-1 text-sm">
        {headings.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                const elem = document.getElementById(item.id);
                if (elem) {
                  elem.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', `#${item.id}`);
                  setActiveId(item.id);
                }
              }}
              className={`block py-1 transition-all duration-150 leading-snug ${
                item.level === 3 ? 'pl-4 text-xs' : 'text-sm font-medium'
              } ${
                isActive
                  ? 'text-brand-400 light:text-brand-600 font-semibold border-l-2 border-brand-400 pl-2 -ml-[2px]'
                  : 'text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900'
              }`}
            >
              {item.text}
            </a>
          );
        })}
      </nav>
    </div>
  );
};
