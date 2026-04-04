import * as React from 'react';
import { Bitcoin, DollarSign, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Widget } from '../../data/dashboard-config';
import { cn } from '../../utils';
import { BitcoinPrice, PortfolioValue } from './crypto'; // Existing

function TopAltcoins() {
  const data = ['ETH', 'SOL', 'ADA'];
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
      <p className="text-sm font-semibold mb-4">Top Altcoins</p>
      <div className="space-y-2">
        {data.map((coin, i) => (
          <div key={coin} className="flex justify-between text-sm">
            <span>{coin}</span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i*0.1 }} className="font-bold text-emerald-400">+$420</motion.span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FearGreedIndex() {
  const index = 75; // 0-100
  return (
    <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col h-full justify-between">
      <Activity className="text-emerald-400 h-12 w-12 mb-4" />
      <p className="text-zinc-400 text-xs">Fear & Greed</p>
      <p className="text-2xl font-bold text-emerald-400">Greed</p>
      <div className="w-full bg-zinc-800 rounded-full h-2">
        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${index}%` }} />
      </div>
    </div>
  );
}

export function CryptoDashboard(): Widget[] {
  return [
    {
      id: 'crypto-btc',
      size: '1x1',
      component: <BitcoinPrice />
    },
    {
      id: 'crypto-portfolio',
      size: '2x1',
      component: <PortfolioValue />
    },
    {
      id: 'crypto-altcoins',
      size: '1x1',
      component: <TopAltcoins />
    },
    {
      id: 'crypto-fear',
      size: '2x1',
      component: <FearGreedIndex />
    }
  ];
}

