import * as React from 'react';
import * as Lucide from 'lucide-react';
const { Github, Code, Heart } = Lucide;
import { motion } from 'framer-motion';

export function GitHubStats() {
  return (
    <div className="flex flex-col h-full space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl">
          <Github className="h-6 w-6 text-purple-400" />
        </div>
        <div>
          <h3 className="font-semibold text-zinc-200">GitHub Stats</h3>
          <p className="text-zinc-500 text-sm">@yourusername</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Stars</span>
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="font-bold text-2xl text-yellow-400"
          >
            1.2k
          </motion.div>
        </div>
        <div className="flex justify-between">
          <span>Forks</span>
          <span className="font-bold text-emerald-400">420</span>
        </div>
        <div className="flex justify-between">
          <span>PRs</span>
          <span className="font-bold text-blue-400">89</span>
        </div>
      </div>
      <div className="pt-4 border-t border-zinc-800">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          View Profile
        </motion.button>
      </div>
    </div>
  );
}
