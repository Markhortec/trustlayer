import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CheckCircle, XCircle, AlertTriangle, Zap } from 'lucide-react';
import { competitors } from '../data/trustData';

export default function CompetitorsSection() {
  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Zap size={14} /> Section 9 — Competitor Analysis
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Why TrustLayer Wins</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            No one is building a portable, behavioral trust layer. Existing platforms own your reputation — we make it yours.
          </p>
        </div>

        {/* Score Chart */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 mb-10">
          <h3 className="text-lg font-bold text-white mb-6">Trust Signal Quality Score (Our Analysis)</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={competitors} barSize={55}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 13 }} />
              <YAxis tick={{ fill: '#64748b', fontSize: 11 }} domain={[0, 100]} />
              <Tooltip
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                labelStyle={{ color: '#94a3b8' }}
                itemStyle={{ color: '#a5b4fc' }}
                formatter={(val) => [`${val}/100`, 'Trust Quality']}
              />
              <Bar dataKey="score" radius={[8, 8, 0, 0]}>
                {competitors.map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Feature Matrix */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 mb-10 overflow-x-auto">
          <h3 className="text-lg font-bold text-white mb-6">Feature Comparison Matrix</h3>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left text-slate-500 font-medium text-sm pb-4 pr-4">Feature</th>
                {['Upwork', 'Fiverr', 'LinkedIn', 'TrustLayer'].map((col) => (
                  <th key={col} className={`text-center text-sm font-bold pb-4 px-3 ${col === 'TrustLayer' ? 'text-indigo-400' : 'text-slate-400'}`}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { feature: 'Real behavioral signals', upwork: false, fiverr: false, linkedin: false, tl: true },
                { feature: 'Portable score (cross-platform)', upwork: false, fiverr: false, linkedin: false, tl: true },
                { feature: 'B2B API for platforms', upwork: false, fiverr: false, linkedin: 'limited', tl: true },
                { feature: 'Anti-gaming system', upwork: 'basic', fiverr: 'basic', linkedin: false, tl: true },
                { feature: 'Explainable score breakdown', upwork: false, fiverr: false, linkedin: false, tl: true },
                { feature: 'Real-time tracking', upwork: false, fiverr: false, linkedin: false, tl: true },
                { feature: 'GitHub / tool integrations', upwork: false, fiverr: false, linkedin: 'limited', tl: true },
                { feature: 'Embeddable trust badge', upwork: false, fiverr: false, linkedin: false, tl: true },
                { feature: 'Delivery rate tracking', upwork: 'basic', fiverr: 'basic', linkedin: false, tl: true },
                { feature: 'AI anomaly detection', upwork: false, fiverr: false, linkedin: false, tl: 'v2' },
              ].map((row) => (
                <tr key={row.feature} className="border-t border-slate-800">
                  <td className="text-slate-400 text-sm py-3 pr-4">{row.feature}</td>
                  {[row.upwork, row.fiverr, row.linkedin, row.tl].map((val, idx) => (
                    <td key={idx} className="text-center py-3 px-3">
                      {val === true ? (
                        <CheckCircle size={16} className="text-green-400 mx-auto" />
                      ) : val === false ? (
                        <XCircle size={16} className="text-slate-700 mx-auto" />
                      ) : (
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          idx === 3 ? 'bg-indigo-500/20 text-indigo-400' : 'bg-yellow-500/10 text-yellow-500'
                        }`}>{val}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Individual Competitor Deep Dive */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {[
            {
              name: 'Upwork',
              icon: '🟢',
              color: 'green',
              strength: 'Massive marketplace with millions of freelancers. Strong brand recognition.',
              weakness: 'Trust model is entirely review-based. Reviews can be inflated via mutual agreements.',
              opportunity: 'Upwork has no portable score. We can be "the trust layer Upwork doesn\'t have." They\'re actually a potential API customer.',
            },
            {
              name: 'Fiverr',
              icon: '🎯',
              color: 'emerald',
              strength: 'Gig-based marketplace with strong consumer brand.',
              weakness: 'Ratings are highly gameable. Gig sellers buy fake reviews routinely. No behavioral tracking.',
              opportunity: 'Fiverr\'s trust problem is well-documented. Early content marketing attacking this will drive organic traffic.',
            },
            {
              name: 'LinkedIn',
              icon: '🔵',
              color: 'blue',
              strength: 'Largest professional network. Skills endorsements have scale.',
              weakness: 'Endorsements are 100% unverified opinions. Anyone can endorse anyone for anything.',
              opportunity: 'LinkedIn\'s trust signals are the weakest. Many professionals are building "LinkedIn vs reality" content — we ride this wave.',
            },
            {
              name: 'Web3 Reputation (SourceCred, Gitcoin)',
              icon: '⛓️',
              color: 'violet',
              strength: 'On-chain reputation is tamper-resistant. Good for crypto-native users.',
              weakness: 'Extremely niche. Poor UX. Non-developers won\'t understand. No mainstream adoption path.',
              opportunity: 'We can anchor trust scores to blockchain as a feature (not core) — getting Web3 credibility while remaining Web2 accessible.',
            },
          ].map((comp) => (
            <div key={comp.name} className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{comp.icon}</span>
                <h4 className="text-white font-bold text-lg">{comp.name}</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-3">
                  <div className="text-green-400 font-semibold text-xs mb-1">✅ Strength</div>
                  <p className="text-slate-400 text-xs">{comp.strength}</p>
                </div>
                <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-3">
                  <div className="text-red-400 font-semibold text-xs mb-1">❌ Weakness</div>
                  <p className="text-slate-400 text-xs">{comp.weakness}</p>
                </div>
                <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-xl p-3">
                  <div className="text-indigo-400 font-semibold text-xs mb-1">🎯 Our Opportunity</div>
                  <p className="text-slate-400 text-xs">{comp.opportunity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Risks */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-yellow-400" size={20} />
            <h3 className="text-xl font-bold text-white">Section 10 — Risks & Mitigations</h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                category: 'Technical Risks',
                icon: '⚙️',
                risks: [
                  { risk: 'API rate limits from GitHub/Jira', fix: 'Implement exponential backoff + queue system. Cache aggressively.' },
                  { risk: 'Score algorithm bias', fix: 'Publish methodology. Allow freelancers to dispute specific signals.' },
                  { risk: 'Data breach', fix: 'Encrypt all tokens at rest (AES-256). Zero-trust architecture. Annual pen tests.' },
                ],
              },
              {
                category: 'Adoption Challenges',
                icon: '👥',
                risks: [
                  { risk: 'Freelancers won\'t connect tools', fix: 'Show immediate value: score generated in 3 min. No data sold, ever.' },
                  { risk: 'Cold start (no network effect)', fix: 'Start with GitHub only. Developers trust open-source transparency.' },
                  { risk: 'Platforms build their own', fix: 'Move fast. Become the standard before they invest in internal tools.' },
                ],
              },
              {
                category: 'Privacy & Trust',
                icon: '🔒',
                risks: [
                  { risk: 'GDPR compliance', fix: 'Data minimization by design. Right to deletion. EU-hosted option.' },
                  { risk: 'Freelancers afraid of surveillance', fix: 'Clear messaging: "You own your data. You choose what to share."' },
                  { risk: 'False negatives (good freelancer, low score)', fix: 'Human appeal process + data correction flow in dashboard.' },
                ],
              },
            ].map((cat) => (
              <div key={cat.category} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <div className="text-2xl mb-3">{cat.icon}</div>
                <h4 className="text-white font-bold text-sm mb-4">{cat.category}</h4>
                <div className="space-y-3">
                  {cat.risks.map((item) => (
                    <div key={item.risk} className="bg-slate-950 rounded-xl p-3">
                      <div className="text-red-400 text-xs font-medium mb-1">⚠️ {item.risk}</div>
                      <div className="text-slate-400 text-xs">✅ {item.fix}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
