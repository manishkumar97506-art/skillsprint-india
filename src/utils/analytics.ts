import { AnalyticsEvent } from '../types';

type EventListener = (event: AnalyticsEvent) => void;

class AnalyticsTracker {
  private listeners: EventListener[] = [];
  private eventLog: AnalyticsEvent[] = [];
  private maxLogs = 50;

  constructor() {
    // Load stored events from session for testing across navigation
    try {
      const stored = sessionStorage.getItem('skillsprint_analytics_logs');
      if (stored) {
        this.eventLog = JSON.parse(stored);
      }
    } catch {
      // Ignore sessionStorage errors
    }

    // Expose on window for debugging & testing
    if (typeof window !== 'undefined') {
      (window as any).skillSprintAnalytics = {
        getEvents: () => this.eventLog,
        clearEvents: () => this.clear(),
        track: (name: string, params?: Record<string, any>) => this.track(name, params),
      };
    }
  }

  public track(eventName: string, params: Record<string, any> = {}): AnalyticsEvent {
    const event: AnalyticsEvent = {
      id: 'evt_' + Math.random().toString(36).substring(2, 9),
      timestamp: new Date().toLocaleTimeString(),
      eventName,
      params: {
        pagePath: typeof window !== 'undefined' ? window.location.pathname : '',
        ...params,
      },
    };

    this.eventLog.unshift(event);
    if (this.eventLog.length > this.maxLogs) {
      this.eventLog.pop();
    }

    try {
      sessionStorage.setItem('skillsprint_analytics_logs', JSON.stringify(this.eventLog));
    } catch {
      // Session storage limit safe
    }

    // Console logging with pleasant style for developers and marketers testing the site
    if (typeof console !== 'undefined') {
      console.log(
        `%c[SkillSprint Analytics 📊]%c ${eventName}`,
        'color: #06b6d4; font-weight: bold; background: #0f172a; padding: 2px 6px; border-radius: 4px;',
        'color: #9333ea; font-weight: bold;',
        event.params
      );
    }

    // Simulated / hookable Facebook Pixel integration
    if (typeof window !== 'undefined' && (window as any).fbq) {
      try {
        (window as any).fbq('trackCustom', eventName, params);
      } catch (err) {
        // Safe fbq call
      }
    }

    // Notify active listeners (e.g. Analytics Debug Inspector component)
    this.listeners.forEach((listener) => {
      try {
        listener(event);
      } catch (err) {
        console.error(err);
      }
    });

    return event;
  }

  public subscribe(listener: EventListener): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  public getEvents(): AnalyticsEvent[] {
    return [...this.eventLog];
  }

  public clear(): void {
    this.eventLog = [];
    try {
      sessionStorage.removeItem('skillsprint_analytics_logs');
    } catch {}
    this.listeners.forEach((listener) => listener({ id: 'clear', timestamp: '', eventName: '__CLEAR__' }));
  }
}

export const analytics = new AnalyticsTracker();

export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  return analytics.track(eventName, params);
};
