import * as React from 'react';
import { Home, Calendar, DollarSign, CloudSun } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Widget } from '../../data/dashboard-config';
import { cn } from '../../utils';

function SmartHome() {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 grid grid-cols-2 gap-4 h-full">
      <div className="flex flex-col items-center p-4 bg-zinc-800/50 rounded-2xl">
        <Home className="text-emerald-400 h-8 w-8 mb-2" />
        <p className="text-xs text-zinc-400">Lights</p>
        <p className="text-lg font-bold text-emerald-400">On</p>
      </div>
      <div className="flex flex-col items-center p-4 bg-zinc-800/50 rounded-2xl">
        <CloudSun className="text-yellow-400 h-8 w-8 mb-2" />
        <p className="text-xs text-zinc-400">AC</p>
        <p className="text-lg font-bold text-yellow-400">22°</p>
      </div>
      <div className="col-span-2 text-center pt-4 border-t border-zinc-800">
        <p className="text-sm text-zinc-500">Energy: 2.4 kWh today</p>
      </div>
    </div>
  );
}

function CalendarEvents() {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
      <Calendar className="text-purple-400 mb-4 h-12 w-12" />
      <p className="text-zinc-400 text-xs">Next Event</p>
      <p className="text-2xl font-bold">Team Sync @ 2pm</p>
    </div>
  );
}

function Bills() {
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
      <DollarSign className="text-emerald-400 mb-4 h-12 w-12" />
      <p className="text-zinc-400 text-xs">Next Bill</p>
      <p className="text-2xl font-bold text-red-400">$89</p>
      <p className="text-xs text-zinc-500 mt-1">Due in 3 days</p>
    </div>
  );
}

export function HomeDashboard(): Widget[] {
  return [
    {
      id: 'home-smart',
      size: '2x2',
      component: <SmartHome />
    },
    {
      id: 'home-calendar',
      size: '1x1',
      component: <CalendarEvents />
    },
    {
      id: 'home-bills',
      size: '1x1',
      component: <Bills />
    },
    {
      id: 'home-weather',
      size: '2x1',
      component: <div>Weather Widget (reuse from personal)</div> // TODO integrate
    }
  ];
}

