import { CheckCircle, Clock, Rocket } from 'lucide-react';
import { roadmapPhases } from '../data/trustData';

export default function RoadmapSection() {
  const colorMap: Record<string, { bg: string; border: string; text: string; badge: string; icon: string }> = {
    indigo: {
      bg: 'from-indigo-500/10 to-transparent',
      border: 'border-indigo-500/30',
      text: 'text-indigo-400',
      badge: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
      icon: 'bg-indigo-500/20 text-indigo-400',
    },
    violet: {
      bg: 'from-violet-500/10 to-transparent',
      border: 'border-violet-500/30',
      text: 'text-violet-400',
      badge: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
      icon: 'bg-violet-500/20 text-violet-400',
    },
    purple: {
      bg: 'from-purple-500/10 to-transparent',
      border: 'border-purple-500/30',
      text: 'text-purple-400',
      badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      icon: 'bg-purple-500/20 text-purple-400',
    },
  };

  const techSetup = [
    { step: '1', title: 'Initialize Project', cmd: 'npm create vite@latest trustlayer -- --template react-ts', color: 'indigo' },
    { step: '2', title: 'Install Core Deps', cmd: 'npm install @supabase/supabase-js react-query axios recharts tailwindcss', color: 'violet' },
    { step: '3', title: 'Setup Supabase', cmd: 'npx supabase init && supabase db push', color: 'purple' },
    { step: '4', title: 'Backend Scaffold', cmd: 'npx ts-node src/scripts/setupDb.ts', color: 'fuchsia' },
    { step: '5', title: 'Deploy Frontend', cmd: 'vercel deploy --prod', color: 'pink' },
    { step: '6', title: 'Deploy Backend', cmd: 'wrangler publish (Cloudflare Workers)', color: 'rose' },
  ];

  const fileStructure = `trustlayer/
├── apps/
│   ├── web/                    # React Frontend
│   │   ├── src/
│   │   │   ├── pages/          # Route pages
│   │   │   ├── components/     # UI components
│   │   │   ├── hooks/          # Custom hooks
│   │   │   ├── api/            # API calls
│   │   │   └── store/          # State management
│   └── api/                    # Node.js Backend
│       ├── src/
│       │   ├── routes/         # Express routes
│       │   ├── services/       # Business logic
│       │   ├── integrations/   # GitHub, Jira, etc.
│       │   ├── scoring/        # Trust score engine
│       │   └── workers/        # BullMQ jobs
├── packages/
│   ├── db/                     # Supabase schema
│   ├── types/                  # Shared TypeScript types
│   └── badge-sdk/              # Embeddable badge
└── docs/                       # API documentation`;

  return (
    <section className="bg-slate-950 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Rocket size={14} /> Section 6 — MVP Build Plan
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Build Roadmap</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Exact execution plan — what to build, in what order, and how long it takes.
          </p>
        </div>

        {/* Phases */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {roadmapPhases.map((phase, i) => {
            const c = colorMap[phase.color];
            const icons = [<CheckCircle key="check" size={20} />, <Clock key="clock" size={20} />, <Rocket key="rocket" size={20} />];
            return (
              <div key={phase.phase} className={`bg-gradient-to-b ${c.bg} border ${c.border} rounded-3xl p-6`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.icon}`}>
                    {icons[i]}
                  </div>
                  <div>
                    <div className={`text-xs font-bold ${c.text}`}>{phase.phase}</div>
                    <div className="text-white font-bold">{phase.label}</div>
                  </div>
                </div>
                <div className="space-y-2.5 mt-5">
                  {phase.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle size={14} className={`${c.text} mt-0.5 shrink-0`} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Setup Commands */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-10">
          <h3 className="text-xl font-bold text-white mb-6">🚀 Tech Setup — Run These Commands</h3>
          <div className="space-y-3">
            {techSetup.map((cmd) => (
              <div key={cmd.step} className="flex items-center gap-4 bg-slate-950 rounded-xl p-4">
                <div className={`w-7 h-7 rounded-lg bg-${cmd.color}-500/20 text-${cmd.color}-400 flex items-center justify-center text-xs font-bold shrink-0`}>
                  {cmd.step}
                </div>
                <div className="flex-1">
                  <div className="text-slate-400 text-xs mb-1">{cmd.title}</div>
                  <code className="text-green-400 text-xs sm:text-sm font-mono">{cmd.cmd}</code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* File Structure */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-white mb-6">📁 Project File Structure</h3>
          <pre className="bg-slate-950 rounded-2xl p-6 text-sm text-slate-400 font-mono overflow-x-auto border border-slate-800 leading-relaxed">
            {fileStructure}
          </pre>

          {/* User Flow Steps */}
          <div className="mt-8">
            <h4 className="text-lg font-bold text-white mb-5">👣 User Flow — Freelancer Onboarding</h4>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-slate-800" />
              <div className="space-y-5">
                {[
                  { step: '1', title: 'Sign Up', desc: 'Email + Google OAuth via Supabase. Profile setup: name, skills, platforms.' },
                  { step: '2', title: 'Connect Tools', desc: 'OAuth flows for GitHub, Toggl, Jira, Upwork. Each connection triggers initial data sync.' },
                  { step: '3', title: 'Initial Scan', desc: 'Background worker fetches last 90 days of signals from all connected sources.' },
                  { step: '4', title: 'First Score Generated', desc: 'Score engine runs within 3 minutes. Explainer card shows how each dimension scored.' },
                  { step: '5', title: 'Dashboard Active', desc: 'Freelancer sees real-time activity feed, charts, and score breakdown.' },
                  { step: '6', title: 'Share Profile', desc: 'Generate unique URL (trustlayer.io/u/username) and embeddable badge code.' },
                  { step: '7', title: 'Continuous Updates', desc: 'Cron job runs every 24 hours. Real-time events via GitHub webhooks & API polling.' },
                ].map((step) => (
                  <div key={step.step} className="relative pl-14">
                    <div className="absolute left-0 top-0 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold z-10">
                      {step.step}
                    </div>
                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
                      <div className="text-white font-semibold mb-1">{step.title}</div>
                      <div className="text-slate-400 text-sm">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
