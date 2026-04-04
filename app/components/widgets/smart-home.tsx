import * as React from 'react';\nimport * as Lucide from 'lucide-react';
const { Thermometer, Lightbulb, Shield } = Lucide;
import { motion } from 'framer-motion';

export function SmartHomeTemp() {
  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl">
          <Thermometer className="h-6 w-6 text-blue-400" />
        </div>
        <div>
          <h3 className="font-semibold text-zinc-200">Temperature</h3>
          <p className="text-zinc-500 text-sm">Living Room</p>
        </div>
      </div>
      <div className="text-4xl font-bold text-cyan-400">22°C</div>
      <div className="flex items-center gap-2 text-zinc-400">
        <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse" />
        <span>Comfortable</span>
      </div>
    </div>
  );
}

export function SmartHomeLights() {
  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl">
          <Lightbulb className="h-6 w-6 text-yellow-400" />
        </div>
        <div>
          <h3 className="font-semibold text-zinc-200">Lights</h3>
          <p className="text-zinc-500 text-sm">4/8 on</p>
        </div>
      </div>
      <div className="space-y-3">
        <motion.button whileTap={{ scale: 0.98 }} className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-4 rounded-2xl font-medium hover:from-yellow-600 hover:to-orange-600">
          Kitchen ON
        </motion.button>
        <motion.button whileTap={{ scale: 0.98 }} className="w-full bg-zinc-800 text-zinc-300 py-3 px-4 rounded-2xl font-medium hover:bg-zinc-700">
          Living OFF
        </motion.button>
      </div>
    </div>
  );
}

