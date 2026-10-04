import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRight, Zap } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

export const MobileStickyCTA: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const navigate = useNavigate();

  if (dismissed) return null;

  const handleAction = () => {
    trackEvent('mobile_sticky_cta_click', { action: 'start_learning' });
    navigate('/courses');
  };

  const handleDismiss = () => {
    trackEvent('mobile_sticky_cta_dismissed');
    setDismissed(true);
  };

  return (
    <div 
      className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-slate-900/95 dark:bg-[#070b14]/95 backdrop-blur-md border-t border-slate-700/80 px-4 py-3 shadow-2xl animate-in slide-in-from-bottom duration-300"
      role="region"
      aria-label="Mobile Call to Action"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="w-8 h-8 rounded-lg bg-brand-blue-600/30 border border-brand-cyan-400/40 flex items-center justify-center shrink-0">
            <Zap className="w-4 h-4 text-brand-cyan-400" />
          </div>
          <div className="truncate">
            <p className="text-xs font-semibold text-white leading-tight truncate">
              Ready to Start Learning?
            </p>
            <p className="text-[11px] text-slate-400 truncate">
              Free beginner-friendly resources
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleAction}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-brand-blue-600 to-brand-cyan-600 active:scale-95 transition-all shadow flex items-center gap-1"
          >
            <span>Start Learning</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <button
            onClick={handleDismiss}
            aria-label="Close sticky bar"
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
