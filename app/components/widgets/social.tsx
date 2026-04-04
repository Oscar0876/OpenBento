import * as React from 'react';
import * as Lucide from 'lucide-react';
const { Users, Heart, MessageCircle } = Lucide;
import { motion } from 'framer-motion';

export function FollowerGrowth() {
  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl">
          <Users className="h-6 w-6 text-pink-400" />
        </div>
        <div>
          <h3 className="font-semibold text-zinc-200 text-lg">Followers</h3>
          <p className="text-zinc-500 text-sm">Growth</p>
        </div>
      </div>
      <div className="text-3xl font-bold text-pink-400">+1,247</div>
      <div className="flex gap-4">
        <motion.div className="flex-1 p-3 bg-gradient-to-b from-rose-500/10 to-pink-500/10 rounded-2xl text-center">
          <div className="font-bold text-lg">28k</div>
          <div className="text-xs text-zinc-400">Total</div>
        </motion.div>
        <motion.div className="flex-1 p-3 bg-zinc-800/50 rounded-2xl text-center">
          <div className="font-semibold text-emerald-400">+4.2%</div>
          <div className="text-xs text-zinc-400">30d</div>
        </motion.div>
      </div>
    </div>
  );
}
