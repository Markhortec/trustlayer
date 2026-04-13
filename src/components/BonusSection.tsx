import { Sparkles, Globe, Zap, ArrowRight, Star } from 'lucide-react';

export default function BonusSection() {
  return (
    <section className="bg-slate-950 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Sparkles size={14} /> Section 11 — Billion Dollar Features
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">The Billion Dollar Vision</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            These three features transform TrustLayer from a freelancer tool into global trust infrastructure.
          </p>
        </div>

        {/* 3 Power Features */}
        <div className="space-y-6 mb-16">
          {[
            {
              number: '01',
              title: 'Trust Score as Credit Score',
              subtitle: 'Financial Products for Freelancers',
              icon: '💳',
              color: 'from-indigo-600/20 to-violet-600/10',
              border: 'border-indigo-500/30',
              headerColor: 'text-indigo-400',
              description: 'Partner with fintechs (Brex, Stripe Capital, Mercury) to use TrustLayer scores as an alternative credit score for freelancers. A freelancer with a score of 90+ could access instant business loans, equipment financing, or invoice factoring — WITHOUT a traditional credit history.',
              why: 'The $1.5 trillion gig economy has virtually no access to financial products. Banks use FICO scores. We create the FICO for freelancers.',
              revenue: '$15–50 per loan referral × millions of freelancers = massive B2B2C fintech revenue',
              examples: [
                'Score 90+ → instant $5K credit line from partner bank',
                'Score 75+ → invoice factoring at 2% fee (vs 5% from competitors)',
                'Score 60+ → equipment financing for home office',
                'Score history → proof of income for mortgage applications',
              ],
            },
            {
              number: '02',
              title: 'TrustLayer for Teams / Companies',
              subtitle: 'Organizational Trust Intelligence',
              icon: '🏗️',
              color: 'from-violet-600/20 to-purple-600/10',
              border: 'border-violet-500/30',
              headerColor: 'text-violet-400',
              description: 'Extend the model from individuals to teams and entire companies. "Company Trust Score" aggregates individual scores of all employees/freelancers. Enterprise clients can see the trust DNA of an entire agency before hiring them. Agencies can market their team\'s collective trust.',
              why: 'Enterprises don\'t just hire individuals — they hire teams and agencies. No tool gives them behavioral insight into the whole team. This is "Glassdoor meets GitHub analytics" for team performance.',
              revenue: 'Enterprise deals at $2K–20K/month. 1,000 enterprise clients = $2M–20M MRR',
              examples: [
                'Agency dashboard: view team avg. delivery rate, consistency across all members',
                'Enterprise buyer: score entire shortlisted agency in 30 seconds',
                'Team score used in RFP responses as competitive differentiator',
                '"TrustLayer Certified Team" badge for agencies with score 85+',
              ],
            },
            {
              number: '03',
              title: 'Open Trust Protocol (OTP)',
              subtitle: 'Become the Infrastructure Layer',
              icon: '⛓️',
              color: 'from-purple-600/20 to-pink-600/10',
              border: 'border-purple-500/30',
              headerColor: 'text-purple-400',
              description: 'Open-source the trust score specification (not the engine). Create an industry standard for how freelancer trust is measured — like OAuth is for authentication or JSON Schema is for data. Other platforms can be "OTP compliant." TrustLayer runs the reference implementation and certification program.',
              why: 'This is how you become infrastructure. Stripe didn\'t just process payments — they defined how payments work on the internet. We define how trust works in the global talent economy.',
              revenue: 'Certification fees ($500–5K/yr per platform). Enterprise API licensing. Becomes de-facto standard = defensible moat + acquisition target ($500M–2B exit)',
              examples: [
                'Publish "TrustLayer Trust Score Standard v1.0" as open spec',
                'Platforms can self-certify or pay for official TrustLayer certification',
                'Job boards show "OTP Verified" badge on freelancer profiles',
                'Regulators adopt OTP as gig worker protection standard (EU Digital Markets Act)',
              ],
            },
          ].map((feature) => (
            <div key={feature.number} className={`bg-gradient-to-br ${feature.color} border ${feature.border} rounded-3xl p-8`}>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <div className="flex items-start gap-4 mb-5">
                    <span className={`text-5xl font-black ${feature.headerColor} opacity-30 leading-none`}>
                      {feature.number}
                    </span>
                    <div>
                      <div className="text-3xl mb-2">{feature.icon}</div>
                      <h3 className="text-2xl font-black text-white">{feature.title}</h3>
                      <div className={`text-sm font-semibold ${feature.headerColor} mt-1`}>{feature.subtitle}</div>
                    </div>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-5">{feature.description}</p>
                  <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-4">
                    <div className={`text-xs font-bold ${feature.headerColor} mb-1`}>💡 WHY THIS IS BIG</div>
                    <p className="text-slate-400 text-sm">{feature.why}</p>
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <div className="bg-slate-900/70 border border-slate-700 rounded-2xl p-5 h-full">
                    <div className="text-white font-bold text-sm mb-3 flex items-center gap-2">
                      <Zap size={14} className="text-yellow-400" />
                      How It Works
                    </div>
                    <div className="space-y-2.5 mb-5">
                      {feature.examples.map((ex) => (
                        <div key={ex} className="flex items-start gap-2 text-xs text-slate-400">
                          <ArrowRight size={12} className="mt-0.5 shrink-0 text-slate-600" />
                          {ex}
                        </div>
                      ))}
                    </div>
                    <div className={`bg-gradient-to-br ${feature.color} border ${feature.border} rounded-xl p-3`}>
                      <div className="text-xs font-bold text-green-400 mb-1">💰 Revenue Potential</div>
                      <div className="text-slate-300 text-xs">{feature.revenue}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Infrastructure Vision */}
        <div className="bg-gradient-to-r from-indigo-600/20 via-violet-600/20 to-purple-600/20 border border-indigo-500/30 rounded-3xl p-10 text-center">
          <div className="text-5xl mb-6">🌐</div>
          <h3 className="text-3xl font-black text-white mb-4">
            "Stripe for Trust" — The Infrastructure Vision
          </h3>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
            Just like Stripe abstracted away payment complexity and became the default financial infrastructure 
            of the internet, <strong className="text-white">TrustLayer abstracts away reputation complexity</strong>{' '}
            and becomes the default trust infrastructure for the global talent economy.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            {[
              { icon: '⚡', title: 'API-First', desc: 'Any platform can embed trust scores in one line of code' },
              { icon: '🌍', title: 'Universal', desc: 'Works across freelancer platforms, job boards, and enterprise HR tools' },
              { icon: '🔒', title: 'Owned by You', desc: 'Freelancers own their reputation — it goes wherever they go' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-900/50 border border-slate-700/50 rounded-2xl p-5">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-white font-bold mb-2">{item.title}</div>
                <div className="text-slate-400 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Target Acquisition Value', value: '$500M–2B', icon: '🎯' },
              { label: 'Total Addressable Market', value: '$50B+', icon: '🌐' },
              { label: 'Global Freelancers (2025)', value: '1.6 Billion', icon: '👥' },
              { label: 'Gig Economy Value (2025)', value: '$1.5 Trillion', icon: '💰' },
            ].map((stat) => (
              <div key={stat.label} className="bg-slate-900/70 border border-slate-700 rounded-xl p-4 flex items-center gap-4">
                <span className="text-2xl">{stat.icon}</span>
                <div className="text-left">
                  <div className="text-white font-black text-xl">{stat.value}</div>
                  <div className="text-slate-400 text-xs">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-yellow-400 text-sm mb-4">
            <Star size={14} className="fill-yellow-400" />
            <Star size={14} className="fill-yellow-400" />
            <Star size={14} className="fill-yellow-400" />
          </div>
          <h3 className="text-3xl font-black text-white mb-4">Ready to Build This?</h3>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            This blueprint is production-ready. The architecture is proven. The market is massive. 
            The only thing missing is you executing Phase 1.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-xl hover:shadow-indigo-500/30"
            >
              <Globe size={20} />
              Start with Supabase
              <ArrowRight size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
            >
              🐙 Clone the Starter Repo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
