import { CheckCircle, DollarSign, TrendingUp, Zap } from 'lucide-react';
import { pricingPlans } from '../data/trustData';

export default function PricingSection() {
  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <DollarSign size={14} /> Section 7 — Monetization Strategy
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Revenue Model</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            Dual revenue stream: B2C subscriptions from freelancers + B2B API licensing from platforms.
          </p>
        </div>

        {/* Revenue Split */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {[
            {
              title: 'B2C — Freelancers',
              icon: '👨‍💻',
              revenue: '$19/mo × 10,000 users',
              arr: '$2.28M ARR',
              color: 'indigo',
              desc: 'Freemium → Pro conversion targeting developers, designers, consultants.',
            },
            {
              title: 'B2B — Platforms',
              icon: '🏢',
              revenue: '$299/mo × 100 platforms',
              arr: '$3.59M ARR',
              color: 'violet',
              desc: 'White-label API sold to hiring platforms, staffing agencies, and job boards.',
            },
            {
              title: 'Enterprise',
              icon: '🌐',
              revenue: 'Custom deals $2K–20K/mo',
              arr: 'Uncapped potential',
              color: 'purple',
              desc: 'Custom scoring weights, SLA contracts, dedicated infrastructure for large platforms.',
            },
          ].map((rev) => (
            <div key={rev.title} className={`bg-${rev.color}-500/5 border border-${rev.color}-500/20 rounded-2xl p-6`}>
              <div className="text-4xl mb-4">{rev.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{rev.title}</h3>
              <div className={`text-${rev.color}-400 font-mono text-sm mb-1`}>{rev.revenue}</div>
              <div className="text-2xl font-black text-white mb-3">{rev.arr}</div>
              <p className="text-slate-400 text-sm">{rev.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl overflow-hidden border transition-all ${
                plan.highlight
                  ? 'border-indigo-500/50 bg-gradient-to-b from-indigo-600/10 to-slate-900 scale-105 shadow-2xl shadow-indigo-500/20'
                  : 'border-slate-800 bg-slate-950'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500" />
              )}
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="p-6 pt-8">
                {/* Plan Header */}
                <div className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-3`}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-slate-500 mb-1">{plan.period}</span>
                </div>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                {/* Features */}
                <div className="space-y-2.5 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-xl text-sm font-bold transition-all ${
                    plan.highlight
                      ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl'
                      : 'bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Financial Projections */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp size={18} className="text-green-400" />
            Financial Projections (3-Year)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="text-slate-500 font-medium pb-4 pr-4">Metric</th>
                  <th className="text-slate-500 font-medium pb-4 px-4">Year 1</th>
                  <th className="text-slate-500 font-medium pb-4 px-4">Year 2</th>
                  <th className="text-slate-500 font-medium pb-4 px-4">Year 3</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  { metric: 'Freelancer Users (B2C)', y1: '500', y2: '5,000', y3: '30,000' },
                  { metric: 'Pro Conversions (5% → 12%)', y1: '25 users', y2: '600 users', y3: '3,600 users' },
                  { metric: 'B2C MRR', y1: '$475', y2: '$11,400', y3: '$68,400' },
                  { metric: 'Platform API Clients', y1: '3', y2: '25', y3: '100' },
                  { metric: 'B2B MRR', y1: '$900', y2: '$7,500', y3: '$30,000' },
                  { metric: 'Total ARR', y1: '$16,500', y2: '$226,800', y3: '$1.18M' },
                  { metric: 'Team Size', y1: '2 (solo → co-founder)', y2: '6', y3: '18' },
                ].map((row) => (
                  <tr key={row.metric} className="border-t border-slate-800">
                    <td className="text-slate-400 py-3 pr-4">{row.metric}</td>
                    <td className="text-slate-300 py-3 px-4">{row.y1}</td>
                    <td className="text-slate-300 py-3 px-4">{row.y2}</td>
                    <td className="text-indigo-400 font-bold py-3 px-4">{row.y3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Partnership Section */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              { name: 'Platform Revenue Share', icon: '🤝', desc: '10–15% rev share on platform deals over $10K/yr. Aligns incentives — they grow, we grow.' },
              { name: 'Score API Calls', icon: '⚡', desc: '$0.01 per score query on pay-as-you-go tier. At 1M queries/mo = $10K additional MRR.' },
              { name: 'Verified Badge Upsell', icon: '🏆', desc: '$5/mo premium badge with animated verified checkmark and trust history timeline.' },
            ].map((item) => (
              <div key={item.name} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="text-white font-semibold text-sm mb-1">{item.name}</div>
                <div className="text-slate-400 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Partnership */}
        <div className="mt-8 bg-gradient-to-r from-indigo-600/20 to-violet-600/20 border border-indigo-500/30 rounded-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center shrink-0">
              <Zap className="text-indigo-400" size={24} />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg mb-2">🎯 Platform Partnership Strategy (Like Vetted)</h4>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-400">
                {[
                  'Offer 3-month free API trial to top platforms',
                  'Co-market: "Powered by TrustLayer" badge for credibility',
                  'Custom white-label: platform shows own brand, TrustLayer runs engine',
                  'Integration SLA: 99.9% uptime, sub-200ms response guaranteed',
                  'Revenue share model: platform keeps 90%, we take 10% on premium',
                  'Quarterly business reviews + roadmap input for enterprise clients',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} className="text-indigo-400 mt-0.5 shrink-0" />
                    {item}
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
