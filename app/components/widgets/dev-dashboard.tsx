import * as React from 'react';
import { GitCommit, GitPullRequest, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Widget } from '../../data/dashboard-config';
import { mockAPI, cn } from '../../utils';
import { Commits } from './dev-stats'; // Existing

// New components
function PRs() {
  const [data, setData] = React.useState(89);
  const isClient = typeof window !== 'undefined';
  
  React.useEffect(() => {
    if (!isClient) return;
    mockAPI('github').then((res: any) => setData(res?.stats?.prs || 89));
  }, [isClient]);
  
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
      <GitPullRequest className="text-blue-400 mb-4 h-12 w-12" />
      <p className="text-zinc-400 text-xs">Open PRs</p>
      <p className="text-2xl font-bold">{data}</p>
    </div>
  );
}

function Streak() {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
      <Flame className="text-orange-400 mb-4 h-12 w-12" />
      <p className="text-zinc-400 text-xs">Current Streak</p>
      <p className="text-2xl font-bold text-orange-400">42 days</p>
    </div>
  );
}

function Languages() {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col h-full">
      <p className="text-sm font-semibold mb-4">Top Languages</p>
      <div className="h-24 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-3 flex items-end">
        <div className="flex gap-1 h-16 w-full">
          {[30, 60, 40, 80, 50, 70, 90].map((h, i) => (
            <div 
              key={i}
              className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm" 
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export function DevDashboard(): Widget[] {
  return [
    {
      id: 'dev-commits',
      size: '2x2',
      component: <Commits />
    },
    {
      id: 'dev-prs',
      size: '1x1',
      component: <PRs />
    },
    {
      id: 'dev-streak',
      size: '1x1',
      component: <Streak />
    },
    {
      id: 'dev-languages',
      size: '2x1',
      component: <Languages />
    }
  ];
}
