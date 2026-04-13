import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';
import { Brain, Shield, AlertTriangle, Eye } from 'lucide-react';
import { scoreBreakdown } from '../data/trustData';

const radarData = [
  { subject: 'Consistency', A: 88, fullMark: 100 },
  { subject: 'Delivery', A: 94, fullMark: 100 },
  { subject: 'Quality', A: 85, fullMark: 100 },
  { subject: 'Behavioral', A: 79, fullMark: 100 },
  { subject: 'Volume', A: 91, fullMark: 100 },
  { subject: 'Reliability', A: 87, fullMark: 100 },
];

export default function TrustScoreSection() {
  const totalScore = Math.round(
    scoreBreakdown[0].value * 0.25 +
    scoreBreakdown[1].value * 0.30 +
    scoreBreakdown[2].value * 0.25 +
    scoreBreakdown[3].value * 0.20
  );

  return (
    <section className="bg-slate-950 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Brain size={14} /> Section 3 — Trust Score System
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">How The Score Works</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            A multi-dimensional, weighted algorithm converting real behavioral data into a single explainable number.
          </p>
        </div>

        {/* Score Formula */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 mb-12">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Brain size={18} className="text-purple-400" />
            The Scoring Formula
          </h3>

          <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6 mb-6 font-mono text-sm overflow-x-auto">
            <div className="text-slate-500 mb-2">{'// Trust Score Calculation (v1)'}</div>
            <div className="text-green-400 mb-4">
              TrustScore = (C × 0.25) + (D × 0.30) + (Q × 0.25) + (B × 0.20)
            </div>
            <div className="text-slate-400 space-y-1.5">
              <div><span className="text-indigo-400">C</span> = Consistency Score → Work regularity over 90 days</div>
              <div><span className="text-violet-400">D</span> = Delivery Score → On-time completion rate × deadline buffer</div>
              <div><span className="text-purple-400">Q</span> = Quality Score → Code review pass %, test coverage, revision requests</div>
              <div><span className="text-fuchsia-400">B</span> = Behavioral Score → Focus blocks, response time, communication patterns</div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800 text-yellow-400">
              {'// Anti-gaming penalty applied if anomaly_flag = true'}
              <br />
              FinalScore = TrustScore × (1 - PenaltyFactor)
            </div>
          </div>

          {/* Breakdown Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scoreBreakdown.map((dim) => (
              <div key={dim.name} className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-300 text-sm font-semibold">{dim.name}</span>
                  <span className="text-xs text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">
                    Weight: {dim.weight}
                  </span>
                </div>
                <div className="text-4xl font-black mb-3" style={{ color: dim.color }}>
                  {dim.value}
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{ width: `${dim.value}%`, backgroundColor: dim.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 flex items-center justify-center">
            <div className="bg-gradient-to-br from-indigo-600/20 to-violet-600/20 border border-indigo-500/40 rounded-2xl px-10 py-6 text-center">
              <div className="text-slate-400 text-sm mb-1">Weighted Total Trust Score</div>
              <div className="text-7xl font-black text-white">{totalScore}</div>
              <div className="text-indigo-400 font-semibold mt-1">Excellent — Top 15% of Freelancers</div>
            </div>
          </div>
        </div>

        {/* What Data Signals */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Radar Chart */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-lg font-bold text-white mb-6">Score Radar — Multi-Dimensional View</h3>
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#1e293b" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Radar
                  name="Score"
                  dataKey="A"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.25}
                  strokeWidth={2}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                  labelStyle={{ color: '#94a3b8' }}
                  itemStyle={{ color: '#a5b4fc' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Data Sources */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-lg font-bold text-white mb-6">Data Signal Sources</h3>
            <div className="space-y-4">
              {[
                {
                  source: 'GitHub',
                  icon: '🐙',
                  signals: ['Commit frequency', 'PR merge rate', 'Code review participation', 'Repo activity streak'],
                  color: 'indigo',
                },
                {
                  source: 'Time Tracker',
                  icon: '⏱️',
                  signals: ['Daily hours worked', 'Focus block length', 'Project time allocation', 'Overtime patterns'],
                  color: 'violet',
                },
                {
                  source: 'Task Manager',
                  icon: '📋',
                  signals: ['Task completion rate', 'Sprint velocity', 'Deadline adherence', 'Overdue frequency'],
                  color: 'purple',
                },
                {
                  source: 'Platform History',
                  icon: '🌐',
                  signals: ['Contract completion', 'Response time to messages', 'Dispute rate', 'Client re-hire rate'],
                  color: 'fuchsia',
                },
              ].map((src) => (
                <div key={src.source} className="flex items-start gap-4 bg-slate-950 rounded-xl p-4">
                  <span className="text-2xl">{src.icon}</span>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm mb-2">{src.source}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {src.signals.map((sig) => (
                        <span key={sig} className="text-xs bg-slate-800 text-slate-400 border border-slate-700 px-2 py-0.5 rounded-md">
                          {sig}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Anti-Gaming + Explainability */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Anti-Gaming */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                <AlertTriangle className="text-red-400" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Anti-Gaming System</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  rule: 'Velocity Check',
                  desc: 'Flag if commit rate increases >300% without linked tasks or issues',
                },
                {
                  rule: 'Time Inflation',
                  desc: 'Cross-reference tracked hours against actual deliverables and code output',
                },
                {
                  rule: 'Review Ratio',
                  desc: 'Unusually high delivery rate without revision requests triggers audit flag',
                },
                {
                  rule: 'Pattern Baseline',
                  desc: 'Each freelancer has a 90-day baseline; sudden spikes are weighted less',
                },
                {
                  rule: 'AI Anomaly Score',
                  desc: 'ML model detects behavioral patterns inconsistent with historical data',
                },
              ].map((item) => (
                <div key={item.rule} className="bg-slate-900 rounded-xl p-4">
                  <div className="text-red-400 font-semibold text-sm mb-1">🛡️ {item.rule}</div>
                  <div className="text-slate-400 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Explainability */}
          <div className="bg-indigo-500/5 border border-indigo-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                <Eye className="text-indigo-400" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white">Explainable Score</h3>
            </div>
            {/* Example explanation card */}
            <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
              <div className="text-lg font-bold text-white mb-1">Your Score: <span className="text-indigo-400">87</span></div>
              <div className="text-slate-500 text-xs mb-4">Updated 2 hours ago • Based on 847 signals</div>
              
              <div className="space-y-3">
                {[
                  { label: '✅ 94% delivery rate over last 6 months', impact: '+8 pts' },
                  { label: '✅ Consistent work 5.6 days/week avg', impact: '+6 pts' },
                  { label: '⚠️ 1 project delivered 2 days late in July', impact: '−3 pts' },
                  { label: '✅ PR review participation above median', impact: '+4 pts' },
                  { label: '⚠️ Response time >24hr on 3 occasions', impact: '−2 pts' },
                  { label: '✅ Zero disputes across all platforms', impact: '+5 pts' },
                ].map((exp) => (
                  <div key={exp.label} className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">{exp.label}</span>
                    <span className={`font-bold text-xs ${exp.impact.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {exp.impact}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-500">
                  💡 <strong className="text-slate-400">To reach 92:</strong> Maintain response time under 4 hours and deliver 2 more projects on-time.
                </div>
              </div>
            </div>

            <div className="mt-4 bg-slate-900 border border-slate-800 rounded-xl p-4">
              <div className="text-indigo-400 font-semibold text-sm mb-2 flex items-center gap-2">
                <Shield size={14} /> Trust Score Levels
              </div>
              <div className="space-y-2">
                {[
                  { range: '90–100', label: 'Elite', color: 'text-indigo-400', bg: 'bg-indigo-500/20' },
                  { range: '75–89', label: 'Excellent', color: 'text-violet-400', bg: 'bg-violet-500/20' },
                  { range: '60–74', label: 'Good', color: 'text-blue-400', bg: 'bg-blue-500/20' },
                  { range: '40–59', label: 'Fair', color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
                  { range: '0–39', label: 'Needs Work', color: 'text-red-400', bg: 'bg-red-500/20' },
                ].map((lvl) => (
                  <div key={lvl.range} className={`flex items-center justify-between ${lvl.bg} rounded-lg px-3 py-1.5`}>
                    <span className={`text-xs font-bold ${lvl.color}`}>{lvl.label}</span>
                    <span className="text-xs text-slate-400">{lvl.range}</span>
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
