import { Target, Zap, Star, CheckCircle, XCircle } from 'lucide-react';

export default function OverviewSection() {
  return (
    <section className="bg-slate-950 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Target size={14} /> Section 1 — Product Definition
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">What is TrustLayer?</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            A portable, API-first reputation infrastructure that converts raw work activity into a verifiable, explainable Trust Score.
          </p>
        </div>

        {/* Problem vs Solution */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Problem */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                <XCircle className="text-red-400" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">The Problem Today</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Freelancer ratings are bought, faked, or inflated',
                'CVs are self-reported with zero verification',
                'Upwork/Fiverr reviews are transactional, not behavioral',
                'Platforms guess reliability from past ratings',
                'Hiring risk is entirely on the client',
                'No portability — reputation locked in one platform',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <XCircle className="text-red-400 mt-0.5 shrink-0" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                <CheckCircle className="text-indigo-400" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">TrustLayer's Solution</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Real behavioral signals from GitHub, Jira, Toggl, Upwork',
                'Algorithmic scoring — not opinion-based',
                'Anti-gaming detection with anomaly alerts',
                'Explainable score: see exactly why you scored 87',
                'Portable badge — share with any client anywhere',
                'B2B API — embed into any hiring platform in 1 line',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-300 text-sm">
                  <CheckCircle className="text-indigo-400 mt-0.5 shrink-0" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Target Users */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Target Users</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: '👨‍💻',
                title: 'Freelancers',
                subtitle: 'B2C — $0–$19/mo',
                color: 'from-indigo-500/20 to-violet-500/20',
                border: 'border-indigo-500/30',
                pain: 'Struggling to prove reliability to new clients',
                value: 'Portable verified trust badge + score breakdown',
                segment: ['Software Developers', 'Designers', 'Content Creators', 'Consultants'],
              },
              {
                icon: '🏢',
                title: 'Hiring Platforms',
                subtitle: 'B2B API — $299+/mo',
                color: 'from-violet-500/20 to-purple-500/20',
                border: 'border-violet-500/30',
                pain: 'High dispute rates and bad hires from weak vetting',
                value: 'Plug-and-play trust API to reduce hiring risk',
                segment: ['Vetted', 'Toptal', 'Contra', 'Remote.com', 'Custom platforms'],
              },
              {
                icon: '🔍',
                title: 'Recruiters & Clients',
                subtitle: 'B2C / B2B — per-query',
                color: 'from-purple-500/20 to-pink-500/20',
                border: 'border-purple-500/30',
                pain: 'Wasting hours vetting freelancers manually',
                value: 'Instant trust score lookup before interviewing',
                segment: ['Startup CTOs', 'HR managers', 'Agencies', 'Solo founders'],
              },
            ].map((user) => (
              <div
                key={user.title}
                className={`bg-gradient-to-br ${user.color} border ${user.border} rounded-2xl p-6`}
              >
                <div className="text-4xl mb-4">{user.icon}</div>
                <h4 className="text-lg font-bold text-white mb-1">{user.title}</h4>
                <span className="text-xs font-medium text-indigo-400 bg-indigo-500/20 px-2 py-0.5 rounded-full">
                  {user.subtitle}
                </span>
                <p className="text-slate-400 text-sm mt-3 mb-2">
                  <span className="text-red-400 font-medium">Pain:</span> {user.pain}
                </p>
                <p className="text-slate-400 text-sm mb-4">
                  <span className="text-green-400 font-medium">Value:</span> {user.value}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {user.segment.map((s) => (
                    <span key={s} className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-md border border-slate-700">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MVP vs Advanced */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">MVP vs Advanced Features</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="text-green-400" size={16} />
                </div>
                <h4 className="text-lg font-bold text-white">MVP — Ship in 6 Weeks</h4>
              </div>
              <div className="space-y-2.5">
                {[
                  'GitHub integration (commits, PRs, merge rate)',
                  'Toggl/Clockify time tracking sync',
                  'Basic Trust Score (4 dimensions)',
                  'Freelancer dashboard with weekly view',
                  'Shareable public profile page',
                  'Embeddable score badge (iframe + JS widget)',
                  'Email/password auth + Google OAuth',
                  'Manual project delivery logging',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <CheckCircle className="text-green-400 mt-0.5 shrink-0" size={14} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                  <Star className="text-indigo-400" size={16} />
                </div>
                <h4 className="text-lg font-bold text-white">Advanced — Phase 2 & 3</h4>
              </div>
              <div className="space-y-2.5">
                {[
                  'AI anomaly & gaming detection engine',
                  'Jira, Asana, Linear task delivery tracking',
                  'Upwork + Fiverr contract history import',
                  'B2B REST API + SDK for platforms',
                  'Custom scoring weights per platform',
                  'Skill verification via live coding tests',
                  'Blockchain-anchored score history',
                  'White-label embedding + webhooks',
                  'Recruiter search + filter portal',
                  'Global freelancer leaderboard',
                ].map((f) => (
                  <div key={f} className="flex items-start gap-2.5 text-slate-300 text-sm">
                    <CheckCircle className="text-violet-400 mt-0.5 shrink-0" size={14} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* UVP Banner */}
        <div className="mt-12 bg-gradient-to-r from-indigo-600/20 via-violet-600/20 to-purple-600/20 border border-indigo-500/30 rounded-2xl p-8 text-center">
          <div className="text-2xl mb-2">🏆</div>
          <h3 className="text-2xl font-bold text-white mb-3">Unique Value Proposition</h3>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            "TrustLayer is the <strong className="text-white">only portable trust score</strong> built from{' '}
            <strong className="text-indigo-400">real behavioral signals</strong> — not ratings, not resumes.
            It's <strong className="text-white">Stripe for reputation</strong>: an API-first infrastructure
            any platform can embed in minutes to eliminate hiring guesswork."
          </p>
        </div>
      </div>
    </section>
  );
}
