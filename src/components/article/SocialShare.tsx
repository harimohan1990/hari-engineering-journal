import React, { useState } from 'react';
import { Share2, Link as LinkIcon, Check } from 'lucide-react';
import { LinkedinIcon, TwitterIcon } from '@/components/common/SocialIcons';

interface SocialShareProps {
  title: string;
  url: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ title, url }) => {
  const [copied, setCopied] = useState(false);

  const fullUrl = typeof window !== 'undefined' ? (url.startsWith('http') ? url : `${window.location.origin}${url}`) : url;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(fullUrl)}`;

  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    fullUrl
  )}`;

  return (
    <div className="flex items-center space-x-2">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mr-2 flex items-center gap-1.5">
        <Share2 className="w-3.5 h-3.5" />
        <span>Share</span>
      </span>

      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X (Twitter)"
        className="p-2 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-400 hover:text-white border border-dark-border transition-colors light:bg-slate-100 light:hover:bg-slate-200 light:text-slate-600 light:border-slate-200"
      >
        <TwitterIcon size={16} />
      </a>

      <a
        href={linkedInUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="p-2 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-400 hover:text-brand-400 border border-dark-border transition-colors light:bg-slate-100 light:hover:bg-slate-200 light:text-slate-600 light:border-slate-200"
      >
        <LinkedinIcon size={16} />
      </a>

      <button
        onClick={handleCopy}
        aria-label="Copy link to article"
        className="p-2 rounded-lg bg-dark-surface hover:bg-dark-elevated text-slate-400 hover:text-white border border-dark-border transition-colors relative light:bg-slate-100 light:hover:bg-slate-200 light:text-slate-600 light:border-slate-200"
      >
        {copied ? (
          <Check className="w-4 h-4 text-brand-400" />
        ) : (
          <LinkIcon className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};
