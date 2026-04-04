import { TrendingUp, Users, DollarSign } from "lucide-react";
import * as React from 'react';

interface Widget {
  id: string;
  size: '1x1' | '2x1' | '2x2';
  component: React.ReactNode;
}

export function MRRGrowth() {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between h-full">
      <div>
        <p className="text-zinc-400 text-sm font-medium">Monthly Revenue</p>
        <h3 className="text-4xl font-bold mt-2">$42,450</h3>
      </div>
      <div className="h-32 bg-gradient-to-t from-emerald-500/20 to-transparent rounded-xl border-b border-emerald-500/50 flex items-end p-2">
        <div className="w-full flex justify-between items-end gap-1 h-12">
          {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
            <div key={i} className="bg-emerald-500 w-full rounded-t-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ActiveUsers() {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
      <Users className="text-blue-400 mb-4 h-12 w-12" />
      <p className="text-zinc-400 text-xs">Active Users</p>
      <p className="text-2xl font-bold">12.4k</p>
    </div>
  );
}

export function ChurnRate() {
  return (
    <div className="col-span-1 p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
      <TrendingUp className="text-purple-400 mb-4 h-12 w-12" />
      <p className="text-zinc-400 text-xs">Churn</p>
      <p className="text-2xl font-bold text-red-400">2.1%</p>
    </div>
  );
}

export function RecentSubs() {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-between h-full">
      <div>
        <p className="text-sm font-semibold">Latest Upgrades</p>
        <p className="text-xs text-zinc-500">3 users went Pro in the last hour</p>
      </div>
      <div className="flex -space-x-2">
        {[1,2,3].map(i => (
          <div key={i} className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-zinc-900" />
        ))}
      </div>
    </div>
  );
}

export function SaasDashboard(): Widget[] {
  return [
    {
      id: 'mrr-growth',
      size: '2x2' as const,
      component: <MRRGrowth />
    },
    {
      id: 'active-users',
      size: '1x1' as const,
      component: <ActiveUsers />
    },
    {
      id: 'churn-rate',
      size: '1x1' as const,
      component: <ChurnRate />
    },
    {
      id: 'recent-subs',
      size: '2x1' as const,
      component: <RecentSubs />
    }
  ];
}

