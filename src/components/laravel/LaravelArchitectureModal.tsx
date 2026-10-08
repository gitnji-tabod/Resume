import React, { useState } from 'react';
import { X, Check, Copy, Terminal, Database, Server, FileCode2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const LaravelArchitectureModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'commands' | 'structure' | 'seeder' | 'controller'>('commands');
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const commands = [
    {
      id: 'cmd1',
      title: '1. Clone & Install Dependencies',
      cmd: 'composer install && npm install',
      desc: 'Installs Laravel 11 dependencies (Inertia, DomPDF) and React Vite front-end packages.'
    },
    {
      id: 'cmd2',
      title: '2. Prepare Local Database & Symlinks',
      cmd: 'touch database/database.sqlite && php artisan migrate --seed && php artisan storage:link',
      desc: 'Runs DatabaseSeeder.php to seed sample resumes and links storage/app/public for avatars.'
    },
    {
      id: 'cmd3',
      title: '3. Launch Concurrently on Localhost',
      cmd: 'npm run dev & php artisan serve',
      desc: 'Starts Vite HMR compiler and Laravel 11 local development server on http://localhost:8000.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-neutral-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Server className="w-5 h-5 text-neutral-800 dark:text-neutral-200" />
            <div>
              <h2 className="text-base font-bold text-neutral-900 dark:text-white">
                Laravel 11.x Monorepo Architecture
              </h2>
              <p className="text-xs text-neutral-500">
                Complete local scaffolding: SQLite, Artisan Seeders, Vite & Inertia.js React entry.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-neutral-700 dark:hover:text-white rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-5 pt-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/50">
          <button
            type="button"
            onClick={() => setActiveTab('commands')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-all ${activeTab === 'commands' ? 'border-neutral-900 dark:border-white text-neutral-900 dark:text-white' : 'border-transparent text-neutral-500 hover:text-neutral-800'}`}
          >
            Execution Commands
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('structure')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-all ${activeTab === 'structure' ? 'border-neutral-900 dark:border-white text-neutral-900 dark:text-white' : 'border-transparent text-neutral-500 hover:text-neutral-800'}`}
          >
            Directory Topology
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('seeder')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-all ${activeTab === 'seeder' ? 'border-neutral-900 dark:border-white text-neutral-900 dark:text-white' : 'border-transparent text-neutral-500 hover:text-neutral-800'}`}
          >
            DatabaseSeeder.php
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('controller')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-all ${activeTab === 'controller' ? 'border-neutral-900 dark:border-white text-neutral-900 dark:text-white' : 'border-transparent text-neutral-500 hover:text-neutral-800'}`}
          >
            ResumeController.php
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {activeTab === 'commands' && (
            <div className="space-y-4">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                To run this application locally with full Laravel 11 backend services on your machine:
              </p>

              {commands.map((c) => (
                <div
                  key={c.id}
                  className="bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-neutral-900 dark:text-white">{c.title}</span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(c.cmd, c.id)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 hover:underline"
                    >
                      {copiedCmd === c.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-2.5 bg-neutral-900 text-neutral-100 rounded-lg text-xs font-mono overflow-x-auto selection:bg-neutral-700">
                    {c.cmd}
                  </pre>
                  <p className="text-[11px] text-neutral-500">{c.desc}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'structure' && (
            <div className="space-y-3">
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Laravel 11 streamlined monorepo directory layout with unified React Vite assets:
              </p>
              <pre className="p-4 bg-neutral-900 text-neutral-200 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed">
{`├── composer.json               # Laravel 11.x, Inertia, DomPDF, SQLite
├── artisan                     # Laravel CLI execution binary
├── bootstrap/
│   ├── app.php                 # Slim Laravel 11 bootstrapping & middleware
│   └── providers.php
├── config/
│   ├── app.php
│   ├── database.php            # SQLite zero-config driver default
│   └── filesystems.php         # Public disk driver for avatar uploads
├── database/
│   ├── database.sqlite         # SQLite local storage
│   ├── migrations/
│   │   └── 2024_01_01_000001_create_resumes_table.php
│   └── seeders/
│       └── DatabaseSeeder.php  # High-fidelity sample resumes hydration
├── app/
│   ├── Models/Resume.php       # Eloquent model with JSON casts
│   └── Http/Controllers/
│       └── ResumeController.php# CRUD, clone, avatar upload, DomPDF export
├── routes/
│   ├── web.php                 # Inertia/React entry routes
│   └── api.php                 # RESTful endpoints (/api/resumes)
├── resources/
│   ├── js/                     # Native React components & Inertia root
│   └── views/
│       ├── app.blade.php       # Root HTML blade template
│       └── pdf/resume.blade.php# Barryvdh DomPDF ATS printable blade
└── storage/app/public/avatars/ # Local disk storage symlinked to public/storage`}
              </pre>
            </div>
          )}

          {activeTab === 'seeder' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>database/seeders/DatabaseSeeder.php</span>
                <span>Laravel 11 Eloquent Seeder</span>
              </div>
              <pre className="p-4 bg-neutral-900 text-emerald-400 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed max-h-[380px]">
{`<?php

namespace Database\\Seeders;

use Illuminate\\Database\\Seeder;
use App\\Models\\Resume;
use App\\Models\\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database with pre-configured high-fidelity resumes.
     */
    public function run(): void
    {
        $user = User::firstOrCreate(
            ['email' => 'local.developer@foliocraft.dev'],
            [
                'name' => 'Local Developer',
                'password' => bcrypt('secret-local-password'),
            ]
        );

        // Seed Principal Full-Stack Engineer Resume
        Resume::updateOrCreate(
            ['slug' => 'alex-rivera-systems-architect'],
            [
                'user_id' => $user->id,
                'title' => 'Alex Rivera — Principal Full-Stack & Systems Architect',
                'template' => 'bento',
                'theme_color' => 'slate',
                'personal_info' => [
                    'fullName' => 'Alex Rivera',
                    'jobTitle' => 'Principal Full-Stack Engineer & Systems Architect',
                    'email' => 'alex.rivera@example.com',
                    'phone' => '+1 (415) 890-4421',
                    'location' => 'San Francisco, CA',
                    'summary' => 'Systems-focused software engineer with 9+ years building high-throughput distributed microservices, low-latency React architectures, and robust Laravel applications.'
                ],
                'experiences' => [/* ... hydrated with Vanguard Systems, Apex Cloud ... */],
                'educations' => [/* ... UC Berkeley CS ... */],
                'skill_groups' => [/* ... Languages, Frontend, DevOps ... */],
                'projects' => [/* ... FolioCraft Engine, Chronos Queue ... */],
            ]
        );
    }
}`}
              </pre>
            </div>
          )}

          {activeTab === 'controller' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-neutral-500 font-mono">
                <span>app/Http/Controllers/ResumeController.php</span>
                <span>REST + Inertia Controller</span>
              </div>
              <pre className="p-4 bg-neutral-900 text-blue-300 rounded-xl text-xs font-mono overflow-x-auto leading-relaxed max-h-[380px]">
{`<?php

namespace App\\Http\\Controllers;

use App\\Models\\Resume;
use Illuminate\\Http\\Request;
use Barryvdh\\DomPDF\\Facade\\Pdf;
use Illuminate\\Support\\Facades\\Storage;

class ResumeController extends Controller
{
    public function index()
    {
        return response()->json(Resume::latest('updated_at')->get());
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'template' => 'required|in:bento,editorial,executive',
            'theme_color' => 'nullable|string',
            'personal_info' => 'required|array',
            'experiences' => 'nullable|array',
            'educations' => 'nullable|array',
            'certifications' => 'nullable|array',
            'skill_groups' => 'nullable|array',
            'projects' => 'nullable|array',
        ]);

        $resume = Resume::create($validated);
        return response()->json($resume, 201);
    }

    public function clone(Resume $resume)
    {
        $cloned = $resume->replicate();
        $cloned->title = $resume->title . ' (Copy)';
        $cloned->slug = $resume->slug . '-copy-' . time();
        $cloned->save();

        return response()->json($cloned);
    }

    public function exportPdf(Resume $resume)
    {
        $pdf = Pdf::loadView('pdf.resume', ['resume' => $resume]);
        return $pdf->download("{$resume->slug}.pdf");
    }
}`}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 rounded-lg hover:opacity-90 transition-opacity"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
