import { Card } from './card';
import * as React from 'react';
import type { Widget } from '../../data/dashboard-config';

interface BentoGridProps {
  widgets: Widget[];
  loading?: boolean;
}

export function BentoGrid({ widgets, loading = false }: BentoGridProps) {
  const getSizeClass = (size: string) => {
    switch (size) {
      case '2x2':
        return 'md:col-span-2 md:row-span-2';
      case '2x1':
        return 'md:col-span-2';
      default:
        return '';
    }
  };

  if (loading) {
    const dummyWidgets: Widget[] = Array.from({ length: 8 }, (_, i) => ({
      id: `skeleton-${i}`,
      size: '1x1',
      component: <div className="h-full bg-gradient-to-r from-zinc-800/50 to-zinc-700/50 rounded-2xl animate-pulse shimmer" />
    }));
    widgets = dummyWidgets;
  }

  const renderWidget = (widget: Widget) => {
    try {
      return widget.component;
    } catch (error) {
      console.error('Widget render error:', error);
      // Fallback to simple error UI referencing 7 dashboards
      return (
        <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm h-full flex flex-col items-center justify-center">
          <p>Dashboard widget failed</p>
          <p className="text-xs mt-2">Try saas, dev, crypto, personal, home, social, or productivity dashboards</p>
        </div>
      );
    }
  };

  return (
    <div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(160px,1fr)] min-h-full">
      {widgets.map((widget) => (
        <div key={widget.id} className={`row-span-1 ${getSizeClass(widget.size)} h-full`}>
          <Card>
            {renderWidget(widget)}
          </Card>
        </div>
      ))}
    </div>
  );
}
