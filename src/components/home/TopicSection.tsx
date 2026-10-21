import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Network, Cloud, Cpu, Terminal, ArrowRight } from 'lucide-react';
import { Post } from '@/types/post';

interface TopicSectionProps {
  posts: Post[];
}

export const TopicSection: React.FC<TopicSectionProps> = ({ posts }) => {
  const topics = [
    {
      title: 'Backend & API Architecture',
      category: 'FastAPI and API Design',
      icon: Server,
      color: 'text-brand-400',
      description: 'Async Python, connection pooling, high-throughput REST architectures, and low-latency microservices.',
    },
    {
      title: 'Distributed Systems',
      category: 'Distributed Systems',
      icon: Network,
      color: 'text-cyanBrand-500',
      description: 'Event-driven streaming, message queues, Raft consensus, and fault-tolerant state management.',
    },
    {
      title: 'Cloud & Kubernetes Infrastructure',
      category: 'Docker and Kubernetes',
      icon: Cloud,
      color: 'text-sky-400',
      description: 'Container orchestration, autoscaling controllers, EKS deployments, and cloud networking.',
    },
    {
      title: 'LLM & AI Infrastructure',
      category: 'LLM Infrastructure and Inference',
      icon: Cpu,
      color: 'text-emerald-400',
      description: 'Continuous batching with vLLM, latency optimization, evaluations, and production RAG pipelines.',
    },
  ];

  return (
    <section className="my-16 space-y-12">
      <div className="border-b border-dark-border pb-4 light:border-slate-200">
        <h2 className="text-2xl font-bold text-white light:text-slate-900 flex items-center gap-2">
          <Terminal className="w-6 h-6 text-brand-400" />
          <span>Curated Engineering Tracks</span>
        </h2>
        <p className="text-sm text-slate-400 light:text-slate-600 mt-1">
          Explore articles categorized by architectural domains and systems specialties.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {topics.map((topic) => {
          const Icon = topic.icon;
          const matchingPosts = posts
            .filter((p) => p.category.toLowerCase().includes(topic.category.toLowerCase().split(' ')[0]))
            .slice(0, 2);

          return (
            <div
              key={topic.title}
              className="p-6 rounded-2xl border border-dark-border bg-dark-surface/40 hover:bg-dark-surface/70 transition-all flex flex-col justify-between light:bg-white light:border-slate-200"
            >
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`p-2.5 rounded-xl bg-dark-elevated border border-dark-border ${topic.color} light:bg-slate-100 light:border-slate-200`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white light:text-slate-900">
                      {topic.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 light:text-slate-600 mb-5 leading-relaxed">
                  {topic.description}
                </p>

                {/* Sub articles */}
                <div className="space-y-3 mb-4">
                  {matchingPosts.map((post) => (
                    <Link
                      key={post.slug}
                      to={`/posts/${post.slug}`}
                      className="group block p-3 rounded-lg bg-dark-elevated/60 hover:bg-dark-elevated border border-dark-border/40 transition-colors light:bg-slate-50 light:hover:bg-slate-100 light:border-slate-200"
                    >
                      <h4 className="text-sm font-medium text-slate-200 group-hover:text-brand-400 light:text-slate-800 line-clamp-1 transition-colors">
                        {post.title}
                      </h4>
                      <span className="text-[11px] text-slate-400 light:text-slate-500 font-mono">
                        {post.readingTime} min read • #{post.tags[0] || 'engineering'}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to={`/posts?category=${encodeURIComponent(topic.category)}`}
                className="inline-flex items-center text-xs font-semibold text-brand-400 hover:text-brand-300 light:text-brand-600 pt-2 transition-colors"
              >
                <span>View all in {topic.title}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
