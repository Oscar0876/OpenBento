import * as Lucide from 'lucide-react';
const { Bitcoin, DollarSign, ArrowUp, ArrowDown } = Lucide;
import { motion } from 'framer-motion';

export function BitcoinPrice() {
  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-2xl">
          <Bitcoin className="h-6 w-6 text-orange-400" />
        </div>
        <div>
          <h3 className="font-semibold text-zinc-200 text-lg">Bitcoin</h3>
          <p className="text-zinc-500 text-sm">BTC/USD</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-4xl font-bold text-zinc-200 mb-1"
        >
          $67,420
        </motion.div>
        <div className="flex items-center gap-2 text-emerald-400 font-semibold">
          <ArrowUp className="h-4 w-4" />
          +3.45%
        </div>
      </div>
    </div>
  );
}

export function PortfolioValue() {
  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl">
          <DollarSign className="h-6 w-6 text-emerald-400" />
        </div>
        <div>
          <h3 className="font-semibold text-zinc-200">Portfolio</h3>
          <p className="text-zinc-500 text-sm">Total Value</p>
        </div>
      </div>
      <div className="text-3xl font-bold text-emerald-400">$24,680</div>
      <div className="flex gap-4 text-sm">
        <div className="flex-1 text-center p-2 bg-zinc-800/50 rounded-xl">
          <div className="font-semibold text-zinc-300">+2.1%</div>
          <div>24h</div>
        </div>
        <div className="flex-1 text-center p-2 bg-zinc-800/50 rounded-xl">
          <div className="font-semibold text-zinc-300">+12%</div>
          <div>7d</div>
        </div>
      </div>
    </div>
  );
}

