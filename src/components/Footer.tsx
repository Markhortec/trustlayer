import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
              <Shield className="text-white" size={16} />
            </div>
            <span className="text-white font-bold text-lg">
              Trust<span className="text-indigo-400">Layer</span>
            </span>
          </div>

          <div className="text-slate-500 text-sm text-center">
            Full startup blueprint — Product + Architecture + GTM + Roadmap.{' '}
            <span className="text-indigo-400">Built for founders, by founders.</span>
          </div>

          <div className="flex items-center gap-4">
            {['Overview', 'Architecture', 'Trust Score', 'Pricing'].map((item) => (
              <span key={item} className="text-slate-500 hover:text-white text-xs cursor-pointer transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <span>© 2025 TrustLayer. Blueprint document — not a live product.</span>
          <div className="flex items-center gap-4">
            <span>React + Vite + TailwindCSS</span>
            <span>•</span>
            <span>Recharts</span>
            <span>•</span>
            <span>Lucide Icons</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
