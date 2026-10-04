import React, { useState, useEffect } from 'react';
import { Activity, X, Trash2, CheckCircle2, ChevronUp, ChevronDown, ExternalLink } from 'lucide-react';
import { analytics } from '../utils/analytics';
import { AnalyticsEvent } from '../types';

export const AnalyticsInspector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<AnalyticsEvent[]>(() => analytics.getEvents());
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const unsubscribe = analytics.subscribe((newEvent) => {
      setEvents(analytics.getEvents());
      setPulse(true);
      const timer = setTimeout(() => setPulse(false), 800);
      return () => clearTimeout(timer);
    });
    return unsubscribe;
  }, []);

  const handleClear = () => {
    analytics.clear();
    setEvents([]);
  };

  return (
    <aside 
      aria-label="Marketing Analytics and Facebook Pixel Inspector"
      className="fixed bottom-4 left-4 z-50 font-sans"
    >
      {/* Minimized Pill Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`flex items-center gap-2 px-3 py-2 rounded-full bg-slate-900/90 dark:bg-slate-800/90 text-white text-xs font-medium shadow-lg border border-slate-700 hover:border-brand-cyan-400 transition-all backdrop-blur-md ${
            pulse ? 'ring-2 ring-brand-cyan-400 scale-105' : ''
          }`}
          title="Click to inspect real-time Facebook Marketing & Analytics events"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan-500"></span>
          </span>
          <Activity className="w-3.5 h-3.5 text-brand-cyan-400" />
          <span>Marketing Events</span>
          <span className="bg-brand-purple-600/60 px-1.5 py-0.5 rounded-full text-[10px] font-mono">
            {events.length}
          </span>
        </button>
      )}

      {/* Expanded Live Event Drawer */}
      {isOpen && (
        <div className="w-80 sm:w-96 max-h-[460px] bg-slate-950 text-slate-200 rounded-2xl shadow-2xl border border-slate-800 flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-200">
          
          {/* Header */}
          <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <h4 className="text-xs font-bold text-white tracking-wide uppercase">
                  Campaign &amp; Pixel Tracker
                </h4>
                <p className="text-[10px] text-slate-400">
                  Real-time event dispatcher for Meta &amp; GA4
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClear}
                title="Clear event history"
                className="p-1 rounded text-slate-400 hover:text-red-400 hover:bg-slate-800 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Minimize inspector"
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Event Stream */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-xs divide-y divide-slate-900/50">
            {events.length === 0 ? (
              <div className="py-8 text-center text-slate-500 space-y-1">
                <Activity className="w-6 h-6 mx-auto opacity-40 text-brand-cyan-400" />
                <p className="text-xs font-medium">No events captured yet</p>
                <p className="text-[10px]">Click buttons, submit forms, or navigate to see events</p>
              </div>
            ) : (
              events.map((evt) => (
                <div key={evt.id} className="pt-2 first:pt-0 space-y-1">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-brand-cyan-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 inline" />
                      {evt.eventName}
                    </span>
                    <span className="text-[10px] text-slate-500">{evt.timestamp}</span>
                  </div>
                  {evt.params && Object.keys(evt.params).length > 0 && (
                    <pre className="bg-slate-900 p-1.5 rounded text-[10px] text-slate-300 font-mono overflow-x-auto whitespace-pre-wrap border border-slate-800/80">
                      {JSON.stringify(evt.params, null, 2)}
                    </pre>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer Helper Note */}
          <div className="px-3 py-2 bg-slate-900/80 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
            <span>Ready for Meta Pixel &amp; Google Tag Manager</span>
            <span className="text-brand-purple-400 font-mono">window.skillSprintAnalytics</span>
          </div>

        </div>
      )}
    </aside>
  );
};
