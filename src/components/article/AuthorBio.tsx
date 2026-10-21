import React from 'react';
import { Author } from '@/types/post';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/common/SocialIcons';

interface AuthorBioProps {
  author: Author;
}

export const AuthorBio: React.FC<AuthorBioProps> = ({ author }) => {
  return (
    <div className="p-6 rounded-2xl border border-dark-border bg-dark-surface/80 dark:bg-dark-surface/80 light:bg-slate-50 light:border-slate-200 flex flex-col sm:flex-row items-center sm:items-start gap-5">
      <img
        src={author.avatar}
        alt={author.name}
        className="w-16 h-16 rounded-full object-cover ring-2 ring-brand-500/30 flex-shrink-0"
      />
      <div className="space-y-2 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <h3 className="text-lg font-bold text-white light:text-slate-900">
            {author.name}
          </h3>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-brand-950/80 text-brand-300 border border-brand-800/40 w-fit mx-auto sm:mx-0 light:bg-brand-50 light:text-brand-700 light:border-brand-200">
            {author.role}
          </span>
        </div>
        <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed max-w-xl">
          {author.bio}
        </p>
        <div className="flex items-center justify-center sm:justify-start gap-3 pt-1">
          {author.github && (
            <a
              href={author.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-slate-400 hover:text-white light:hover:text-slate-900 transition-colors"
            >
              <GithubIcon size={18} />
            </a>
          )}
          {author.linkedin && (
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-slate-400 hover:text-brand-400 transition-colors"
            >
              <LinkedinIcon size={18} />
            </a>
          )}
          {author.twitter && (
            <a
              href={author.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile"
              className="text-slate-400 hover:text-cyanBrand-500 transition-colors"
            >
              <TwitterIcon size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
