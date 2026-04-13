import { Database, Server, Globe, Code, ArrowRight, ArrowDown, Layers } from 'lucide-react';

export default function ArchitectureSection() {
  const dbSchema = [
    {
      table: 'users',
      color: 'indigo',
      fields: ['id (uuid)', 'email', 'name', 'role (freelancer|recruiter|platform)', 'created_at', 'plan'],
    },
    {
      table: 'trust_scores',
      color: 'violet',
      fields: ['id', 'user_id (fk)', 'total_score (0–100)', 'consistency', 'delivery_rate', 'quality_score', 'behavioral', 'calculated_at', 'version'],
    },
    {
      table: 'integrations',
      color: 'purple',
      fields: ['id', 'user_id (fk)', 'provider (github|toggl|jira|upwork)', 'access_token (encrypted)', 'refresh_token', 'status', 'last_synced_at'],
    },
    {
      table: 'raw_signals',
      color: 'fuchsia',
      fields: ['id', 'user_id (fk)', 'source', 'signal_type (commit|task|hour|delivery)', 'value', 'timestamp', 'metadata (jsonb)'],
    },
    {
      table: 'projects',
      color: 'pink',
      fields: ['id', 'user_id (fk)', 'title', 'client', 'deadline', 'delivered_at', 'is_on_time', 'quality_feedback', 'tech_tags'],
    },
    {
      table: 'api_keys',
      color: 'rose',
      fields: ['id', 'platform_id (fk)', 'key_hash', 'name', 'rate_limit', 'created_at', 'last_used_at'],
    },
  ];

  const colorMap: Record<string, string> = {
    indigo: 'border-indigo-500/30 bg-indigo-500/5',
    violet: 'border-violet-500/30 bg-violet-500/5',
    purple: 'border-purple-500/30 bg-purple-500/5',
    fuchsia: 'border-fuchsia-500/30 bg-fuchsia-500/5',
    pink: 'border-pink-500/30 bg-pink-500/5',
    rose: 'border-rose-500/30 bg-rose-500/5',
  };

  const headerColorMap: Record<string, string> = {
    indigo: 'text-indigo-400',
    violet: 'text-violet-400',
    purple: 'text-purple-400',
    fuchsia: 'text-fuchsia-400',
    pink: 'text-pink-400',
    rose: 'text-rose-400',
  };

  return (
    <section className="bg-slate-900 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            <Layers size={14} /> Section 2 — System Architecture
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">How It's Built</h2>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto">
            API-first, event-driven architecture designed to scale from 100 to 1M freelancers.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 mb-12 overflow-x-auto">
          <h3 className="text-lg font-bold text-white mb-8 text-center">High-Level Architecture Diagram</h3>

          {/* Layer 1: Clients */}
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            {[
              { label: 'Freelancer App (React)', icon: '👨‍💻', color: 'indigo' },
              { label: 'Platform API Consumer', icon: '🏢', color: 'violet' },
              { label: 'Recruiter Portal', icon: '🔍', color: 'purple' },
              { label: 'Mobile (PWA)', icon: '📱', color: 'fuchsia' },
            ].map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-2">
                <div className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-center min-w-[140px]">
                  <div className="text-2xl mb-1">{c.icon}</div>
                  <div className="text-xs text-slate-300 font-medium">{c.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center my-2">
            <ArrowDown size={20} className="text-slate-600" />
          </div>

          {/* Layer 2: API Gateway */}
          <div className="flex justify-center mb-4">
            <div className="bg-indigo-600/20 border border-indigo-500/40 rounded-xl px-8 py-3 text-center">
              <div className="text-xs text-indigo-300 font-bold uppercase tracking-wider mb-1">API Gateway / Edge (Cloudflare Workers)</div>
              <div className="text-xs text-slate-500">Rate limiting · Auth · Routing · CORS</div>
            </div>
          </div>

          <div className="flex justify-center my-2">
            <ArrowDown size={20} className="text-slate-600" />
          </div>

          {/* Layer 3: Services */}
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            {[
              { label: 'Auth Service\n(Supabase)', icon: '🔐' },
              { label: 'Score Engine\n(Node.js)', icon: '🧠' },
              { label: 'Integration\nService', icon: '🔗' },
              { label: 'Notification\nService', icon: '🔔' },
              { label: 'B2B API\nService', icon: '⚡' },
            ].map((s) => (
              <div key={s.label} className="bg-violet-500/10 border border-violet-500/30 rounded-xl px-4 py-3 text-center min-w-[110px]">
                <div className="text-xl mb-1">{s.icon}</div>
                <div className="text-xs text-violet-300 font-medium whitespace-pre-line">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center my-2">
            <ArrowDown size={20} className="text-slate-600" />
          </div>

          {/* Layer 4: Data */}
          <div className="flex flex-wrap gap-4 justify-center mb-4">
            {[
              { label: 'PostgreSQL (Supabase)', icon: '🐘', sub: 'User & score data' },
              { label: 'Redis (Upstash)', icon: '🔴', sub: 'Cache & rate limits' },
              { label: 'Message Queue (BullMQ)', icon: '📋', sub: 'Signal processing' },
              { label: 'Object Storage', icon: '📦', sub: 'Profile assets' },
            ].map((d) => (
              <div key={d.label} className="bg-purple-500/10 border border-purple-500/30 rounded-xl px-4 py-3 text-center min-w-[140px]">
                <div className="text-xl mb-1">{d.icon}</div>
                <div className="text-xs text-purple-300 font-medium">{d.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{d.sub}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center my-2">
            <ArrowDown size={20} className="text-slate-600" />
          </div>

          {/* Layer 5: Integrations */}
          <div className="flex flex-wrap gap-3 justify-center">
            {['🐙 GitHub API', '⏱️ Toggl API', '🔵 Jira API', '🟢 Upwork API', '💬 Slack API', '⬛ Notion API'].map((i) => (
              <div key={i} className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-400">
                {i}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            {
              icon: <Globe size={20} />,
              title: 'Frontend',
              color: 'indigo',
              stack: ['React 18 + Vite', 'TailwindCSS', 'Recharts / D3', 'React Query', 'Framer Motion'],
            },
            {
              icon: <Server size={20} />,
              title: 'Backend',
              color: 'violet',
              stack: ['Node.js + Express', 'TypeScript', 'BullMQ (job queues)', 'Zod (validation)', 'Cloudflare Workers'],
            },
            {
              icon: <Database size={20} />,
              title: 'Database / Infra',
              color: 'purple',
              stack: ['Supabase (Postgres)', 'Redis (Upstash)', 'Supabase Auth', 'S3 / Cloudflare R2', 'Vercel deploy'],
            },
            {
              icon: <Code size={20} />,
              title: 'Integrations',
              color: 'fuchsia',
              stack: ['GitHub OAuth App', 'Toggl API v9', 'Jira REST API', 'Upwork API', 'Slack Webhooks'],
            },
          ].map((t) => (
            <div key={t.title} className="bg-slate-950 border border-slate-800 rounded-2xl p-5">
              <div className={`text-${t.color}-400 mb-3`}>{t.icon}</div>
              <h4 className="text-white font-bold mb-3">{t.title}</h4>
              <ul className="space-y-1.5">
                {t.stack.map((s) => (
                  <li key={s} className="text-slate-400 text-sm flex items-center gap-2">
                    <ArrowRight size={12} className="text-slate-600" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* DB Schema */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Database Schema</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dbSchema.map((table) => (
              <div
                key={table.table}
                className={`border ${colorMap[table.color]} rounded-2xl p-5`}
              >
                <div className={`font-mono text-sm font-bold ${headerColorMap[table.color]} mb-3 flex items-center gap-2`}>
                  <Database size={14} />
                  {table.table}
                </div>
                <ul className="space-y-1.5">
                  {table.fields.map((f) => (
                    <li key={f} className="text-slate-400 text-xs font-mono flex items-center gap-2">
                      <span className="text-slate-600">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* API Design */}
        <div className="mt-12 bg-slate-950 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Code size={18} className="text-indigo-400" />
            Key API Endpoints
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { method: 'GET', path: '/api/v1/score/:userId', desc: 'Fetch trust score for a freelancer' },
              { method: 'POST', path: '/api/v1/score/calculate', desc: 'Trigger score recalculation' },
              { method: 'GET', path: '/api/v1/signals/:userId', desc: 'Get raw signal history' },
              { method: 'POST', path: '/api/v1/integrations/connect', desc: 'Connect a new tool (OAuth)' },
              { method: 'GET', path: '/api/v1/profile/:slug', desc: 'Public freelancer profile' },
              { method: 'POST', path: '/api/v1/b2b/score/bulk', desc: 'Bulk score query (B2B API)' },
              { method: 'GET', path: '/api/v1/b2b/webhook/register', desc: 'Register webhook endpoint' },
              { method: 'GET', path: '/api/v1/analytics/trends', desc: 'Score trend over time' },
            ].map((api) => (
              <div key={api.path} className="flex items-start gap-3 bg-slate-900 rounded-xl p-3">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-md shrink-0 mt-0.5 ${
                  api.method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {api.method}
                </span>
                <div>
                  <code className="text-indigo-300 text-xs font-mono">{api.path}</code>
                  <p className="text-slate-500 text-xs mt-0.5">{api.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
