import { Target, Users, TrendingUp, Megaphone } from 'lucide-react';

export default function GTMSection() {
  return (
    <section className="bg-slate-950 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Target size={14} /> Section 8 — Go-To-Market Strategy
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">How to Get First 1,000 Users</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            No generic advice. Exact channels, messages, and tactics for launch week to month 6.
          </p>
        </div>

        {/* First 100 Users */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-10">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Users size={18} className="text-orange-400" />
            Phase 0: First 100 Users (Week 1–2)
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: '🐦',
                channel: 'Twitter/X (Developer community)',
                tactic: 'Post "I built a tool that gives freelancers a verified trust score from GitHub commits" + demo GIF. Tag @github, @levelsio, #buildinpublic.',
                target: '~30 signups',
              },
              {
                icon: '🔴',
                channel: 'Reddit (r/freelance, r/webdev)',
                tactic: 'Post: "I stopped losing clients to fake Upwork reviews — here\'s what I built." Tell a real story. Link in comments only.',
                target: '~25 signups',
              },
              {
                icon: '💼',
                channel: 'LinkedIn (Targeted)',
                tactic: 'DM 50 freelancers with 500+ connections: "I\'m building a verified trust score for devs. Would love your feedback on this prototype."',
                target: '~20 signups',
              },
              {
                icon: '🦄',
                channel: 'Product Hunt (Day 1 Launch)',
                tactic: 'Schedule Product Hunt launch for Tuesday. Prep 10 "hunters" in advance. Post a real score demo. Offer 6-months Pro free.',
                target: '~50–200 signups',
              },
              {
                icon: '💬',
                channel: 'Discord Servers',
                tactic: 'Join Indie Hackers, Buildspace, The Programmer Hangout. Offer beta access. Ask for feedback — not promotion.',
                target: '~30 signups',
              },
              {
                icon: '📧',
                channel: 'Cold Email (Platforms)',
                tactic: 'Email 20 hiring platform founders: "I built a trust score API. Can I show you a 5-min demo? Free for 3 months." Conversion: 1–3 partners.',
                target: '2–3 B2B deals',
              },
            ].map((ch) => (
              <div key={ch.channel} className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                <div className="text-3xl mb-3">{ch.icon}</div>
                <div className="text-white font-bold text-sm mb-2">{ch.channel}</div>
                <p className="text-slate-400 text-xs mb-3 leading-relaxed">{ch.tactic}</p>
                <div className="text-orange-400 text-xs font-bold bg-orange-500/10 border border-orange-500/20 px-2 py-1 rounded-lg inline-block">
                  🎯 {ch.target}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Loop */}
        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Growth Loops */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <TrendingUp size={18} className="text-green-400" />
              Built-In Growth Loops
            </h3>
            <div className="space-y-4">
              {[
                {
                  loop: 'Viral Badge Loop',
                  how: 'Every freelancer who embeds the trust badge on their website/LinkedIn creates a "Powered by TrustLayer" backlink. Clients click → sign up as recruiters.',
                  multiplier: '1 user → 3–5 curious clients',
                },
                {
                  loop: 'Platform API Loop',
                  how: 'When a platform (e.g., Vetted) integrates TrustLayer, every freelancer on that platform sees "Trust Score Powered by TrustLayer" → signs up to own their score.',
                  multiplier: '1 platform → 500+ users',
                },
                {
                  loop: 'Recruiter Discovery Loop',
                  how: 'Recruiters search the TrustLayer directory → hire a freelancer → freelancer tells 3 colleagues → they sign up.',
                  multiplier: 'Linear but consistent',
                },
                {
                  loop: 'Build in Public Loop',
                  how: 'Founder tweets weekly metrics, anomalies found, interesting score patterns. Organic following from dev/freelancer community.',
                  multiplier: 'Compound brand equity',
                },
              ].map((loop) => (
                <div key={loop.loop} className="bg-slate-950 rounded-xl p-4 border border-slate-800">
                  <div className="text-green-400 font-bold text-sm mb-1">🔄 {loop.loop}</div>
                  <p className="text-slate-400 text-xs mb-2">{loop.how}</p>
                  <div className="text-xs text-indigo-400 font-semibold">⚡ {loop.multiplier}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Strategy */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
              <Megaphone size={18} className="text-violet-400" />
              Content Marketing (Month 1–3)
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800">
                <div className="text-violet-400 font-bold text-sm mb-3">📝 Blog Posts (SEO)</div>
                <div className="space-y-1.5">
                  {[
                    '"Why 40% of Upwork reviews are fake (and how to fix it)"',
                    '"How to prove you\'re a reliable freelancer without reviews"',
                    '"The best GitHub stats that clients actually care about"',
                    '"Freelancer trust scores: the future of hiring"',
                  ].map((post) => (
                    <div key={post} className="text-slate-400 text-xs flex items-start gap-2">
                      <span className="text-slate-600">→</span>
                      {post}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800">
                <div className="text-indigo-400 font-bold text-sm mb-3">🎬 Twitter/LinkedIn Posts</div>
                <div className="space-y-1.5">
                  {[
                    'Weekly "Freelancer Score Breakdown" real case studies',
                    '"Build in Public" posts showing user growth + revenue',
                    'Developer tips: "How we calculate delivery reliability"',
                    'Polls: "What makes you trust a freelancer?"',
                  ].map((post) => (
                    <div key={post} className="text-slate-400 text-xs flex items-start gap-2">
                      <span className="text-slate-600">→</span>
                      {post}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800">
                <div className="text-orange-400 font-bold text-sm mb-3">🤝 Partnership Targets</div>
                <div className="flex flex-wrap gap-2">
                  {['Vetted.com', 'Toptal', 'Contra', 'Remote.com', 'Arc.dev', 'Wellfound', 'Gun.io', 'Turing.com'].map((p) => (
                    <span key={p} className="text-xs bg-slate-800 text-slate-300 px-2 py-1 rounded-lg border border-slate-700">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-white mb-6">📅 Launch Timeline</h3>
          <div className="space-y-4">
            {[
              { period: 'Week 1–2', milestone: 'MVP Live', actions: ['Ship core app', 'Connect GitHub + Toggl', 'First 10 beta users from personal network'], color: 'green' },
              { period: 'Week 3–4', milestone: 'Product Hunt Launch', actions: ['Launch on PH', 'Reddit posts', 'Twitter thread with demo video'], color: 'blue' },
              { period: 'Month 2', milestone: '100 Users', actions: ['Enable Pro plan billing (Stripe)', 'First B2B cold outreach', 'Add Jira integration'], color: 'indigo' },
              { period: 'Month 3', milestone: 'First B2B Deal', actions: ['Land 1 platform API customer', 'Build recruiter search portal', 'Upwork integration live'], color: 'violet' },
              { period: 'Month 4–6', milestone: '500 Users + $5K MRR', actions: ['Second B2B deal', 'AI anomaly detection v1', 'Hire 1 engineer'], color: 'purple' },
            ].map((item) => (
              <div key={item.period} className="flex items-start gap-5 bg-slate-950 rounded-xl p-4 border border-slate-800">
                <div className={`shrink-0 bg-${item.color}-500/20 border border-${item.color}-500/30 rounded-lg px-3 py-2 text-center min-w-[80px]`}>
                  <div className={`text-${item.color}-400 font-bold text-xs`}>{item.period}</div>
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold mb-2">{item.milestone}</div>
                  <div className="flex flex-wrap gap-2">
                    {item.actions.map((a) => (
                      <span key={a} className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded-md border border-slate-700">
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
