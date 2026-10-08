import React from 'react';
import { Sun, Moon, Server } from 'lucide-react';

interface Props {
  currentView: 'dashboard' | 'builder';
  onNavigate: (view: 'dashboard' | 'builder') => void;
  onOpenLaravelModal: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<Props> = ({
  currentView,
  onNavigate,
  onOpenLaravelModal,
  isDarkMode,
  onToggleDarkMode,
}) => {
  return (
    <header className="no-print h-[64px] border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-4 sm:px-8 flex items-center justify-between shrink-0">
      {/* Zone 1: Brand Wordmark (Single text element) */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('dashboard');
        }}
        className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white hover:opacity-80 transition-opacity whitespace-nowrap"
      >
        FolioCraft
      </a>

      {/* Zone 2: 4-6 Clean Text Navigation Links */}
      <nav className="flex items-center gap-6 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
        <button
          type="button"
          onClick={() => onNavigate('dashboard')}
          className={`hover:text-neutral-900 dark:hover:text-white transition-colors whitespace-nowrap ${currentView === 'dashboard' ? 'text-neutral-900 dark:text-white font-semibold underline underline-offset-8 decoration-2' : ''}`}
        >
          Dashboard
        </button>

        <button
          type="button"
          onClick={() => onNavigate('builder')}
          className={`hover:text-neutral-900 dark:hover:text-white transition-colors whitespace-nowrap ${currentView === 'builder' ? 'text-neutral-900 dark:text-white font-semibold underline underline-offset-8 decoration-2' : ''}`}
        >
          Editor & Preview
        </button>

        <button
          type="button"
          onClick={onOpenLaravelModal}
          className="hover:text-neutral-900 dark:hover:text-white transition-colors whitespace-nowrap hidden sm:inline"
        >
          Laravel 11 Stack
        </button>
      </nav>

      {/* Zone 3: 1-2 Primary Actions */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpenLaravelModal}
          className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors sm:hidden"
          title="Inspect Laravel Architecture"
        >
          <Server className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={onToggleDarkMode}
          className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          title={isDarkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </header>
  );
};
