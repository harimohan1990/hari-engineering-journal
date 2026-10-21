import React, { useState, useEffect } from 'react';
import { Check, Copy } from 'lucide-react';
import Prism from 'prismjs';

// Import key Prism languages
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-docker';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-go';

interface CodeBlockProps {
  children?: React.ReactNode;
  className?: string;
  inline?: boolean;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ children, className, inline }) => {
  const [copied, setCopied] = useState(false);

  // Extract raw text from children
  const codeText = React.Children.toArray(children)
    .map((child) => (typeof child === 'string' ? child : ''))
    .join('')
    .replace(/\n$/, '');

  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : 'text';

  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  if (inline) {
    return (
      <code className="px-1.5 py-0.5 rounded font-mono text-xs md:text-sm bg-dark-surface/90 text-brand-300 border border-dark-border/80 dark:bg-dark-elevated light:bg-slate-100 light:text-brand-700 light:border-slate-200">
        {children}
      </code>
    );
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  };

  const getLanguageLabel = (lang: string) => {
    const map: Record<string, string> = {
      py: 'Python',
      python: 'Python',
      ts: 'TypeScript',
      typescript: 'TypeScript',
      js: 'JavaScript',
      javascript: 'JavaScript',
      bash: 'Bash',
      sh: 'Shell',
      sql: 'SQL',
      yaml: 'YAML',
      yml: 'YAML',
      json: 'JSON',
      docker: 'Dockerfile',
      dockerfile: 'Dockerfile',
      go: 'Go',
      golang: 'Go',
    };
    return map[lang.toLowerCase()] || lang.toUpperCase();
  };

  return (
    <div className="relative my-6 rounded-lg overflow-hidden border border-dark-border bg-[#090D16] shadow-xl group">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-dark-border/80 bg-dark-surface/90 select-none">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-xs font-mono font-medium text-slate-400 pl-2">
            {getLanguageLabel(language)}
          </span>
        </div>

        <button
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-slate-100 bg-dark-elevated/70 hover:bg-dark-elevated px-2.5 py-1 rounded transition-colors border border-dark-border/50"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-brand-400" />
              <span className="text-brand-400 font-medium">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <pre className={`language-${language} p-4 overflow-x-auto text-sm leading-relaxed`}>
        <code className={`language-${language}`}>{codeText}</code>
      </pre>
    </div>
  );
};
