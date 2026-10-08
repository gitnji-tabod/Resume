import { ThemeColor } from '../types/resume';

export interface ThemeClasses {
  accentText: string;
  accentBg: string;
  accentBorder: string;
  accentRing: string;
  badgeBg: string;
  badgeText: string;
  subtleBg: string;
}

export function getThemeClasses(color: ThemeColor): ThemeClasses {
  switch (color) {
    case 'indigo':
      return {
        accentText: 'text-indigo-600 dark:text-indigo-400',
        accentBg: 'bg-indigo-600 hover:bg-indigo-700 text-white',
        accentBorder: 'border-indigo-500/30',
        accentRing: 'focus:ring-indigo-500',
        badgeBg: 'bg-indigo-50 dark:bg-indigo-950/40',
        badgeText: 'text-indigo-700 dark:text-indigo-300',
        subtleBg: 'bg-indigo-50/50 dark:bg-indigo-950/20',
      };
    case 'emerald':
      return {
        accentText: 'text-emerald-600 dark:text-emerald-400',
        accentBg: 'bg-emerald-600 hover:bg-emerald-700 text-white',
        accentBorder: 'border-emerald-500/30',
        accentRing: 'focus:ring-emerald-500',
        badgeBg: 'bg-emerald-50 dark:bg-emerald-950/40',
        badgeText: 'text-emerald-700 dark:text-emerald-300',
        subtleBg: 'bg-emerald-50/50 dark:bg-emerald-950/20',
      };
    case 'amber':
      return {
        accentText: 'text-amber-600 dark:text-amber-400',
        accentBg: 'bg-amber-600 hover:bg-amber-700 text-white',
        accentBorder: 'border-amber-500/30',
        accentRing: 'focus:ring-amber-500',
        badgeBg: 'bg-amber-50 dark:bg-amber-950/40',
        badgeText: 'text-amber-700 dark:text-amber-300',
        subtleBg: 'bg-amber-50/50 dark:bg-amber-950/20',
      };
    case 'rose':
      return {
        accentText: 'text-rose-600 dark:text-rose-400',
        accentBg: 'bg-rose-600 hover:bg-rose-700 text-white',
        accentBorder: 'border-rose-500/30',
        accentRing: 'focus:ring-rose-500',
        badgeBg: 'bg-rose-50 dark:bg-rose-950/40',
        badgeText: 'text-rose-700 dark:text-rose-300',
        subtleBg: 'bg-rose-50/50 dark:bg-rose-950/20',
      };
    case 'neutral':
      return {
        accentText: 'text-neutral-800 dark:text-neutral-200',
        accentBg: 'bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-900',
        accentBorder: 'border-neutral-400/30',
        accentRing: 'focus:ring-neutral-500',
        badgeBg: 'bg-neutral-100 dark:bg-neutral-800',
        badgeText: 'text-neutral-800 dark:text-neutral-200',
        subtleBg: 'bg-neutral-100/50 dark:bg-neutral-800/40',
      };
    case 'slate':
    default:
      return {
        accentText: 'text-slate-800 dark:text-slate-200',
        accentBg: 'bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-100 dark:text-slate-900',
        accentBorder: 'border-slate-400/30',
        accentRing: 'focus:ring-slate-500',
        badgeBg: 'bg-slate-100 dark:bg-slate-800',
        badgeText: 'text-slate-800 dark:text-slate-200',
        subtleBg: 'bg-slate-100/60 dark:bg-slate-800/40',
      };
  }
}
