import * as React from 'react';
import { Clock, Eye, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Widget } from '../../data/dashboard-config';
import { cn } from '../../utils';

function Pomodoro() {
  // SSR-safe: static countdown, client-side timer
  const [time, setTime] = React.useState(25 * 60);
  const isClient = typeof window !== 'undefined';
  
  React.useEffect(() => {
    if (!isClient) return;
    
    const id = setInterval(() => {
      setTime((t) => t > 0 ? t - 1 : 25 * 60);
    }, 1000);
    return () => clearInterval(id);
  }, [isClient]);
  
  const min = Math.floor(time / 60);
  const sec = time % 60;
  return (
    <div className="p-6 rounded-3xl bg-gradient-to-b from-emerald-500/10 to-indigo-500/10 border border-emerald-500/30 flex flex-col items-center h-full">
      <Clock className="text-emerald-400 h-12 w-12 mb-4" />
      <div className="text-3xl font-mono font-bold mb-2">{min.toString().padStart(2,'0')}:{sec.toString().padStart(2,'0')}</div>
      <p className="text-emerald-400 font-semibold">Pomodoro{!isClient && ' (Demo)'}</p>
    </div>
  );
}

function FocusTime() {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
      <Eye className="text-blue-400 mb-4 h-12 w-12" />
      <p className="text-zinc-400 text-xs">Focus Sessions</p>
      <p className="text-2xl font-bold">4/6</p>
    </div>
  );
}

function Tasks() {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col h-full">
      <p className="text-sm font-semibold mb-4">Productivity Tasks</p>
      <div className="space-y-2 flex-1">
        {['Code review', 'Deploy v2', 'Docs'].map((task, i) => (
          <div key={task} className="flex items-center gap-2 p-2 bg-zinc-800/50 rounded-xl">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
            <span className="text-sm">{task}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Habits() {
  const data = [{ name: 'Code', value: 85 }, { name: 'Read', value: 70 }, { name: 'Exercise', value: 60 }];
  const COLORS = ['#10b981', '#3b82f6', '#f59e0b'];
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col h-full">
      <p className="text-sm font-semibold mb-4">Habit Tracker</p>
      <div className="relative w-full h-24 mx-auto mb-4">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-conic from-emerald-500/20 via-blue-500/20 to-amber-500/20 border-4 border-zinc-800 animate-spin-slow"></div>
        <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center">
          <span className="text-lg font-bold text-zinc-400">85%</span>
        </div>
      </div>
      <div className="space-y-1">
        {data.map((entry) => (
          <div key={entry.name} className="flex items-center justify-between text-xs">
            <span className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[data.indexOf(entry)] }}></div>
              {entry.name}
            </span>
            <span className="font-bold">{entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductivityDashboard(): Widget[] {
  return [
    {
      id: 'prod-pomodoro',
      size: '2x1',
      component: <Pomodoro />
    },
    {
      id: 'prod-focus',
      size: '1x1',
      component: <FocusTime />
    },
    {
      id: 'prod-tasks',
      size: '2x1',
      component: <Tasks />
    },
    {
      id: 'prod-habits',
      size: '1x1',
      component: <Habits />
    }
  ];
}
