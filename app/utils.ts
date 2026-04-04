import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as React from 'react';

// Existing cn util
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Theme hook (local, later context)
export function useTheme() {
  const [theme, setTheme] = React.useState<'dark' | 'light'>('dark');
  
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as 'dark' | 'light' | null;
      if (saved) setTheme(saved);
    }
  }, []);
  
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);
  
  const toggleTheme = () => setTheme((prev) => prev === 'dark' ? 'light' : 'dark');
  
  return { theme, toggleTheme };
}

// Generic localStorage hook
export function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [storedValue, setStoredValue] = React.useState<T>(initialValue);
  
  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const item = window.localStorage.getItem(key);
      if (item) setStoredValue(JSON.parse(item));
    } catch {}
  }, [key]);
  
  const setValue = (value: React.SetStateAction<T>) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch {}
  };
  
  return [storedValue, setValue];
}

// Mock API data (later real fetches)
export async function mockAPI(endpoint: string) {
  // Simulate network delay
  await new Promise(r => setTimeout(r, 500 + Math.random() * 500));
  
  const mocks = {
    github: {
      commits: [
        { message: 'feat: bento animations', time: Date.now() - 2*60*60*1000, type: 'feat' as const },
        { message: 'fix: responsive grid', time: Date.now() - 24*60*60*1000, type: 'fix' as const },
      ],
      stats: { stars: 1245, forks: 420, prs: 89 }
    },
    crypto: {
      btc: 67420,
      change: 3.45,
      portfolio: 24680
    },
    // Add more for other dashboards
  };
  
  return mocks[endpoint as keyof typeof mocks] ?? null;
}

// Native date utils - no date-fns needed
export const timeAgo = (timestamp: number) => {
  const now = Date.now();
  const diff = now - timestamp;
  if (diff < 60000) return 'just now';
  if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
  if (diff < 2592000000) return `${Math.floor(diff / 86400000)}d ago`;
  return `${Math.floor(diff / 2592000000)}mo ago`;
};
