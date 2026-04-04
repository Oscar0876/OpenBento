import * as React from 'react';
import * as Lucide from 'lucide-react';
const { GitCommit, GitPullRequest, CircleCheck } = Lucide;
import { motion } from 'framer-motion';

export function Commits() {
  return (
    <div className="flex flex-col h-full space-y-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl">
          <GitCommit className="h-6 w-6 text-indigo-400" />
        </div>
        <div>
          <h3 className="font-semibold text-zinc-200 text-lg">Recent Commits</h3>
          <p className="text-zinc-500 text-sm">Last 7 days</p>
        </div>
      </div>
      <div className="space-y-3 flex-1">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-xl">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <div className="flex-1">
            <p className="font-medium text-zinc-300">feat: add bento grid</p>
            <p className="text-xs text-zinc-500">2 hours ago</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-xl">
          <div className="w-2 h-2 bg-blue-400 rounded-full" />
          <div className="flex-1">
            <p className="font-medium text-zinc-300">fix: type errors</p>
            <p className="text-xs text-zinc-500">1 day ago</p>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-xl">
          <div className="w-2 h-2 bg-yellow-400 rounded-full" />
          <div className="flex-1">
            <p className="font-medium text-zinc-300">docs: update readme</p>
            <p className="text-xs text-zinc-500">3 days ago</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
