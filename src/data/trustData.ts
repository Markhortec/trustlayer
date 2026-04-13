export const activityData = [
  { day: 'Mon', commits: 8, tasks: 5, hours: 7.5, score: 82 },
  { day: 'Tue', commits: 12, tasks: 8, hours: 9, score: 88 },
  { day: 'Wed', commits: 6, tasks: 4, hours: 6, score: 79 },
  { day: 'Thu', commits: 15, tasks: 10, hours: 10, score: 94 },
  { day: 'Fri', commits: 10, tasks: 7, hours: 8, score: 87 },
  { day: 'Sat', commits: 4, tasks: 2, hours: 3, score: 71 },
  { day: 'Sun', commits: 2, tasks: 1, hours: 2, score: 65 },
];

export const monthlyTrend = [
  { month: 'Jan', trust: 68, delivery: 72, quality: 65 },
  { month: 'Feb', trust: 71, delivery: 75, quality: 70 },
  { month: 'Mar', trust: 74, delivery: 78, quality: 73 },
  { month: 'Apr', trust: 79, delivery: 82, quality: 77 },
  { month: 'May', trust: 83, delivery: 85, quality: 81 },
  { month: 'Jun', trust: 87, delivery: 89, quality: 85 },
  { month: 'Jul', trust: 91, delivery: 92, quality: 90 },
];

export const scoreBreakdown = [
  { name: 'Consistency', value: 88, color: '#6366f1', weight: '25%' },
  { name: 'Delivery Rate', value: 94, color: '#8b5cf6', weight: '30%' },
  { name: 'Output Quality', value: 85, color: '#a78bfa', weight: '25%' },
  { name: 'Behavioral', value: 79, color: '#c4b5fd', weight: '20%' },
];

export const recentProjects = [
  {
    id: 1,
    title: 'E-commerce Platform Redesign',
    client: 'TechCorp Inc.',
    status: 'Delivered On-Time',
    statusColor: 'green',
    deliveryRate: 100,
    qualityScore: 94,
    date: '2024-07-10',
    tech: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'API Integration Suite',
    client: 'FinStart Labs',
    status: 'Delivered Early',
    statusColor: 'blue',
    deliveryRate: 100,
    qualityScore: 98,
    date: '2024-07-01',
    tech: ['Node.js', 'REST API', 'AWS'],
  },
  {
    id: 3,
    title: 'Mobile Dashboard UI',
    client: 'DataViz Co.',
    status: '2 Days Late',
    statusColor: 'yellow',
    deliveryRate: 85,
    qualityScore: 88,
    date: '2024-06-20',
    tech: ['React Native', 'Figma'],
  },
  {
    id: 4,
    title: 'Auth Microservice',
    client: 'CloudBase',
    status: 'Delivered On-Time',
    statusColor: 'green',
    deliveryRate: 100,
    qualityScore: 96,
    date: '2024-06-05',
    tech: ['Node.js', 'JWT', 'Redis'],
  },
];

export const connectedIntegrations = [
  { name: 'GitHub', icon: '🐙', status: 'connected', commits: 847, repos: 23 },
  { name: 'Jira', icon: '🔵', status: 'connected', tasks: 312, sprints: 18 },
  { name: 'Toggl', icon: '⏱️', status: 'connected', hours: 1240, projects: 31 },
  { name: 'Upwork', icon: '🟢', status: 'connected', contracts: 28, rating: 4.9 },
  { name: 'Slack', icon: '💬', status: 'pending', messages: 0, channels: 0 },
  { name: 'Notion', icon: '⬛', status: 'disconnected', docs: 0, pages: 0 },
];

export const competitors = [
  {
    name: 'Upwork',
    trustModel: 'Self-reported + reviews',
    gaming: 'High',
    realtime: false,
    b2bApi: false,
    score: 35,
    color: '#14a800',
  },
  {
    name: 'Fiverr',
    trustModel: 'Ratings & reviews',
    gaming: 'Very High',
    realtime: false,
    b2bApi: false,
    score: 28,
    color: '#1dbf73',
  },
  {
    name: 'LinkedIn',
    trustModel: 'Endorsements (unverified)',
    gaming: 'Extreme',
    realtime: false,
    b2bApi: false,
    score: 20,
    color: '#0a66c2',
  },
  {
    name: 'TrustLayer',
    trustModel: 'Real behavioral signals',
    gaming: 'Very Low',
    realtime: true,
    b2bApi: true,
    score: 94,
    color: '#6366f1',
  },
];

export const pricingPlans = [
  {
    name: 'Freelancer',
    price: '$0',
    period: 'forever',
    description: 'Build your trust profile and share it with clients',
    features: [
      '1 Trust Score badge',
      'Connect up to 2 integrations',
      'Monthly score updates',
      'Public profile link',
      'Basic analytics',
    ],
    cta: 'Start Free',
    highlight: false,
    color: 'from-slate-600 to-slate-700',
  },
  {
    name: 'Pro Freelancer',
    price: '$19',
    period: '/month',
    description: 'For serious freelancers building a premium reputation',
    features: [
      'Full Trust Score breakdown',
      'Unlimited integrations',
      'Real-time score updates',
      'Verified badge on profile',
      'Advanced analytics & trends',
      'Priority API access',
      'Custom share links',
    ],
    cta: 'Start 14-Day Trial',
    highlight: true,
    color: 'from-indigo-500 to-violet-600',
  },
  {
    name: 'Platform API',
    price: '$299',
    period: '/month',
    description: 'Embed trust scores into your hiring platform',
    features: [
      'REST API access',
      'Bulk score queries',
      'Webhook alerts',
      'White-label embedding',
      'SLA 99.9% uptime',
      'Dedicated support',
      'Custom scoring weights',
    ],
    cta: 'Contact Sales',
    highlight: false,
    color: 'from-violet-600 to-purple-700',
  },
];

export const roadmapPhases = [
  {
    phase: 'Phase 1',
    label: 'MVP (Weeks 1–6)',
    color: 'indigo',
    items: [
      'User auth (Supabase)',
      'GitHub & Toggl integrations',
      'Basic Trust Score algorithm',
      'Freelancer dashboard',
      'Public profile page',
      'Score badge embed code',
    ],
  },
  {
    phase: 'Phase 2',
    label: 'Growth (Weeks 7–14)',
    color: 'violet',
    items: [
      'Upwork & Jira integrations',
      'Advanced score breakdown UI',
      'B2B API (beta)',
      'Recruiter search portal',
      'Email alerts & digest',
      'Anti-gaming detection v1',
    ],
  },
  {
    phase: 'Phase 3',
    label: 'Scale (Month 4+)',
    color: 'purple',
    items: [
      'AI anomaly detection',
      'Skills verification via tests',
      'Platform SDK & webhooks',
      'Enterprise dashboard',
      'Trust history blockchain anchor',
      'Global leaderboard & ranking',
    ],
  },
];
