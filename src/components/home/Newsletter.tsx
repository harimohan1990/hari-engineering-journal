import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      // Save locally or connect to Substack / Buttondown
      try {
        const subs = JSON.parse(localStorage.getItem('journal-subscribers') || '[]');
        subs.push({ email, timestamp: new Date().toISOString() });
        localStorage.setItem('journal-subscribers', JSON.stringify(subs));
      } catch (err) {
        console.error(err);
      }
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <section className="my-16 rounded-3xl border border-dark-border bg-gradient-to-b from-dark-surface to-dark-elevated p-8 sm:p-12 relative overflow-hidden light:from-white light:to-slate-50 light:border-slate-300">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 mx-auto">
          <Mail className="w-6 h-6" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
          Subscribe to the Architecture Dispatch
        </h3>

        <p className="text-sm text-slate-400 light:text-slate-600 leading-relaxed">
          Get deep dives on distributed systems, high-throughput Python backends, and production AI infrastructure delivered directly to your inbox. No spam, strictly technical.
        </p>

        {status === 'success' ? (
          <div className="p-4 rounded-xl bg-brand-950/80 border border-brand-800/60 text-brand-300 flex items-center justify-center space-x-2 text-sm max-w-md mx-auto light:bg-brand-50 light:text-brand-700 light:border-brand-200">
            <CheckCircle2 className="w-5 h-5 text-brand-400" />
            <span>You're subscribed! Welcome to the engineering journal.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === 'error') setStatus('idle');
              }}
              placeholder="you@company.com"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-dark-bg border border-dark-border text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-500 light:bg-white light:border-slate-300 light:text-slate-900"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-dark-bg font-semibold text-sm transition-all flex items-center justify-center space-x-2 shadow-lg shadow-brand-500/20"
            >
              <span>{status === 'loading' ? 'Joining...' : 'Subscribe'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="text-xs text-rose-400">Please enter a valid email address.</p>
        )}

        <div className="flex items-center justify-center space-x-4 text-xs text-slate-500 pt-2">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
            Zero tracking & easy unsubscribe
          </span>
          <span>•</span>
          <span>Monthly engineering dispatches</span>
        </div>
      </div>
    </section>
  );
};
