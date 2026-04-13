import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import { Shield, TrendingUp, CheckCircle, Clock, GitCommit, Star, ExternalLink, Activity } from 'lucide-react';
import { activityData, monthlyTrend, recentProjects, connectedIntegrations } from '../data/trustData';

export default function DashboardSection() {
  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Activity size={14} /> Section 4 & 5 — Dashboard Demo
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">Live Dashboard Preview</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            This is exactly what a freelancer sees after connecting their tools. Real data, real insights.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
          {/* Dashboard Header Bar */}
          <div className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <Shield size={16} className="text-white" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Alex Rodriguez</div>
                <div className="text-slate-500 text-xs">Full-Stack Developer • Pro Plan</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <ExternalLink size={12} /> Share Profile
              </button>
              <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-sm font-bold text-white">
                AR
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: <Shield size={18} />, label: 'Trust Score', value: '87', sub: '↑ 4 pts this month', color: 'indigo', trend: 'up' },
                { icon: <CheckCircle size={18} />, label: 'Delivery Rate', value: '94%', sub: '28 of 30 on-time', color: 'green', trend: 'up' },
                { icon: <Clock size={18} />, label: 'Avg Hours/Week', value: '38.5h', sub: 'Last 30 days', color: 'violet', trend: 'neutral' },
                { icon: <GitCommit size={18} />, label: 'Total Commits', value: '847', sub: 'Across 23 repos', color: 'purple', trend: 'up' },
              ].map((stat) => (
                <div key={stat.label} className="bg-slate-900 border border-slate-800 rounded-2xl p-4">
                  <div className={`text-${stat.color}-400 mb-2`}>{stat.icon}</div>
                  <div className="text-2xl font-black text-white mb-0.5">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                  <div className={`text-xs mt-1 ${stat.trend === 'up' ? 'text-green-400' : 'text-slate-500'}`}>
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Trust Trend */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                  <TrendingUp size={16} className="text-indigo-400" />
                  Trust Score Trend (7 Months)
                </h4>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={monthlyTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 11 }} />
                    <YAxis tick={{ fill: '#64748b', fontSize: 11 }} domain={[60, 100]} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                      labelStyle={{ color: '#94a3b8' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px' }} />
                    <Line type="monotone" dataKey="trust" stroke="#6366f1" strokeWidth={2.5} dot={{ fill: '#6366f1', r: 4 }} name="Trust Score" />
                    <Line type="monotone" dataKey="delivery" stroke="#8b5cf6" strokeWidth={2} dot={false} name="Delivery" />
                    <Line type="monotone" dataKey="quality" stroke="#a78bfa" strokeWidth={2} dot={false} name="Quality" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Weekly Activity */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                  <Activity size={16} className="text-violet-400" />
                  Weekly Activity Breakdown
                </h4>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                    <XAxis dataKey="day" tick={{ fill: '#64748b', fontSize: 11 }} />
                    <YAxis tick={{ fill: '#64748b', fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                      labelStyle={{ color: '#94a3b8' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px' }} />
                    <Bar dataKey="commits" fill="#6366f1" radius={[4, 4, 0, 0]} name="Commits" />
                    <Bar dataKey="tasks" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Tasks" />
                    <Bar dataKey="hours" fill="#a78bfa" radius={[4, 4, 0, 0]} name="Hours" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bottom Row: Projects + Integrations */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Projects */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                  <Star size={16} className="text-yellow-400" />
                  Recent Projects
                </h4>
                <div className="space-y-3">
                  {recentProjects.map((project) => (
                    <div key={project.id} className="bg-slate-950 rounded-xl p-3 border border-slate-800">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="text-white text-sm font-semibold truncate">{project.title}</div>
                          <div className="text-slate-500 text-xs">{project.client}</div>
                          <div className="flex flex-wrap gap-1.5 mt-2">
                            {project.tech.map((t) => (
                              <span key={t} className="text-xs bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                            project.statusColor === 'green' ? 'bg-green-500/20 text-green-400' :
                            project.statusColor === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {project.status}
                          </span>
                          <div className="text-xs text-slate-500 mt-1">Q: {project.qualityScore}/100</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrations */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h4 className="text-white font-bold text-sm mb-4">Connected Integrations</h4>
                <div className="space-y-3">
                  {connectedIntegrations.map((int) => (
                    <div key={int.name} className="bg-slate-950 rounded-xl p-3 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{int.icon}</span>
                        <div>
                          <div className="text-white text-sm font-semibold">{int.name}</div>
                          {int.status === 'connected' ? (
                            <div className="text-xs text-slate-500">
                              {int.commits !== undefined && `${int.commits} commits`}
                              {int.hours !== undefined && `${int.hours} hours`}
                              {int.tasks !== undefined && `${int.tasks} tasks`}
                              {int.contracts !== undefined && `${int.contracts} contracts`}
                            </div>
                          ) : (
                            <div className="text-xs text-slate-600">{int.status}</div>
                          )}
                        </div>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        int.status === 'connected' ? 'bg-green-500/20 text-green-400' :
                        int.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-slate-700 text-slate-500'
                      }`}>
                        {int.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Badge Embed Preview */}
                <div className="mt-4 bg-slate-950 border border-indigo-500/30 rounded-xl p-4">
                  <div className="text-xs text-slate-500 mb-2 font-mono">{'// Embed your trust badge'}</div>
                  <div className="bg-slate-900 rounded-lg p-3 font-mono text-xs text-indigo-300 break-all">
                    {'<script src="https://trustlayer.io/badge.js"'}
                    <br />
                    {'  data-user="alex-rodriguez" />'}
                  </div>
                  <div className="flex items-center gap-2 mt-3 p-2 bg-indigo-600/10 border border-indigo-500/30 rounded-lg">
                    <Shield size={16} className="text-indigo-400" />
                    <span className="text-white text-sm font-semibold">Trust Score: 87</span>
                    <span className="text-indigo-400 text-xs ml-auto">Verified ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
