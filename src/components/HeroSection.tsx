import { Shield, ArrowRight, Zap, TrendingUp, Globe } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 pt-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <Zap size={14} className="fill-indigo-400" />
            Full Startup Blueprint — Product + Architecture + Go-To-Market
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight">
            The{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              Trust Layer
            </span>
            <br />
            for Global Talent
          </h1>

          <p className="text-xl sm:text-2xl text-slate-400 mb-6 max-w-3xl mx-auto leading-relaxed">
            Stop guessing if a freelancer is reliable. TrustLayer generates a{' '}
            <span className="text-white font-semibold">dynamic, verified Trust Score</span>{' '}
            from real work signals — not self-reported profiles.
          </p>

          {/* Problem / Solution pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {[
              { icon: '❌', text: 'No more fake reviews' },
              { icon: '✅', text: 'Real behavioral data' },
              { icon: '🔗', text: 'GitHub + Jira + Upwork' },
              { icon: '🏆', text: 'Portable reputation' },
            ].map((pill) => (
              <span
                key={pill.text}
                className="flex items-center gap-2 bg-slate-800/80 border border-slate-700 text-slate-300 text-sm px-4 py-2 rounded-full"
              >
                {pill.icon} {pill.text}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => onNavigate('dashboard')}
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
            >
              <Shield size={20} />
              View Live Dashboard Demo
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => onNavigate('architecture')}
              className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
            >
              Explore Architecture
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: <TrendingUp size={20} />, value: '94%', label: 'Avg. Trust Score accuracy' },
              { icon: <Shield size={20} />, value: '3 min', label: 'To generate first score' },
              { icon: <Globe size={20} />, value: 'B2B + B2C', label: 'Revenue model' },
              { icon: <Zap size={20} />, value: '6 weeks', label: 'To ship MVP' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4 text-center"
              >
                <div className="text-indigo-400 flex justify-center mb-2">{stat.icon}</div>
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
