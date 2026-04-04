import * as React from 'react';
import * as Lucide from 'lucide-react';
const { Clock, List, Calendar } = Lucide;
import { motion } from 'framer-motion';

export function PomodoroTimer() {
  return (
    <div className="flex flex-col h-full items-center justify-center space-y-6">
      <motion.div 
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="w-24 h-24 border-8 border-zinc-800 rounded-full flex items-center justify-center bg-gradient-to-r from-orange-500/20 to-red-500/20"
      >
        <Clock className="h-12 w-12 text-orange-400" />
      </motion.div>
      <div className="text-center">
        <div className="text-4xl font-bold text-orange-400">25:00</div>
        <div className="text-zinc-500 uppercase text-xs tracking-wide">Work</div>
      </div>
      <div className="flex gap-2">
        <motion.button whileTap={{ scale: 0.95 }} className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 rounded-xl font-medium text-sm">
          Start
        </motion.button>
        <motion.button whileTap={{ scale: 0.95 }} className="p-2 bg-zinc-800 rounded-xl">
          <List className="h-5 w-5" />
        </motion.button>
      </div>
    </div>
  );
}
