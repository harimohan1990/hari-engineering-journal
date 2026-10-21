import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 text-center space-y-6 max-w-md mx-auto">
      <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 mx-auto">
        <Terminal className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-mono font-semibold text-brand-400 uppercase tracking-wider">
          404: HTTP NOT FOUND
        </span>
        <h1 className="text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
          Page Not In Routing Table
        </h1>
        <p className="text-sm text-slate-400 light:text-slate-600">
          The requested path does not match any engineering journal route or article slug.
        </p>
      </div>

      <div className="pt-2">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-dark-bg font-semibold text-sm transition-all shadow-lg shadow-brand-500/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Journal Home</span>
        </Link>
      </div>
    </div>
  );
};
