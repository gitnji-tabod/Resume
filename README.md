# FolioCraft — Laravel 11.x & React Resume Builder

FolioCraft is a localized, lightweight, modern Resume Builder web application built on a unified **Laravel 11** back-end and a high-performance **React (Vite)** front-end. It features zero-config local storage with SQLite, instantaneous reactive split-screen previewing, multiple design templates (Bento Grid, Clean Editorial, Classic Executive ATS), and a dual PDF export engine (ATS-compliant `@media print` and `barryvdh/laravel-dompdf`).

---

## Key Modules & Capabilities

1. **Dashboard View**
   - High-density card grid displaying all created and seeded resumes.
   - Live client-side search by candidate name, document title, or job position.
   - Filter by layout architecture (Bento Grid, Editorial, Executive ATS).
   - Instant actions: Edit, Duplicate/Clone, Export ATS PDF, Download JSON, Delete, or Reset to seed data.

2. **Multi-Step React Builder UI**
   - **Personal Info**: Full legal name, professional title, local profile avatar upload (persisted to Laravel's native storage driver `storage/app/public/avatars`), email, phone, location, portfolio website, LinkedIn, and GitHub.
   - **Experience**: Reorderable employment positions with company, title, dates, "Present" toggle, markdown bullet points, and quick action-verb helpers (Spearheaded, Engineered, Optimized, Scaled).
   - **Education & Certifications**: Academic degrees, honors, GPA, coursework descriptions, and professional credentials (AWS, CKA, PMP).
   - **Skills & Tools**: Grouped categories (Languages, Frontend, Cloud & DevOps) with distinct proficiency levels (Beginner, Intermediate, Advanced, Expert).
   - **Projects & Portfolio**: Live portfolio showcases with repository URLs, tech stack tags, descriptions, and metric-driven bullet highlights.

3. **Reactive Live Preview & Bento Grid Canvas**
   - Real-time split-screen panel updating instantaneously on keystrokes with zero latency.
   - Zoom controls (50% to 130%), fullscreen presentation mode, and sheet canvas scaling.
   - **Bento Grid Layout**: Modular structured cards, hairline borders, scannable technical metadata.
   - **Clean Minimalist Editorial**: Asymmetric 2-column typographic framework with timeless rhythm.
   - **Classic Executive ATS**: Single-column linear layout strictly optimized for automated Applicant Tracking Systems (Workday, Greenhouse, Lever).

4. **Template & Theme Palette Switcher**
   - Seamlessly toggle between Bento, Editorial, and Executive ATS layouts.
   - Accent color system: Slate, Indigo, Emerald, Amber, Rose, Monochrome.
   - Global Light/Dark mode switcher with persistent preference.

5. **ATS PDF Export Engine**
   - Explicit `@media print` CSS engine: produces pixel-perfect A4/Letter documents hiding all UI chrome, preserving page margins, preventing awkward page breaks (`break-inside: avoid`).
   - Server-side backup via `barryvdh/laravel-dompdf` controller (`/resumes/{id}/pdf`).

---

## Local Development Setup (`localhost`)

FolioCraft is completely scaffolded for immediate zero-config execution.

### Prerequisites
- PHP 8.2 or higher & Composer
- Node.js 18+ and npm
- SQLite3 extension enabled in PHP (`php -m | grep sqlite3`)

### 1. Install Dependencies
```bash
composer install
npm install
```

### 2. Configure Environment & Database
Copy the environment file and create the zero-config SQLite file:
```bash
cp .env.example .env
touch database/database.sqlite
php artisan key:generate
```

### 3. Run Migrations & Seed Sample Resumes
Inject rich, production-grade sample resumes (Principal Architect, Product Designer, DevOps Lead) into SQLite:
```bash
php artisan migrate --seed
```

### 4. Link Storage for Avatars
Symlink the local public disk driver for profile photos:
```bash
php artisan storage:link
```

### 5. Launch Local Dev Servers Concurrently
Run both Vite and Laravel artisan development servers:
```bash
npm run dev & php artisan serve
```
- Web Application: **http://localhost:8000** (or Vite standalone preview on **http://localhost:3000**)
- SQLite Database: `database/database.sqlite`
- Public Storage: `storage/app/public`

---

## Monorepo Directory Layout

```
├── composer.json               # Laravel 11.x dependencies & scripts
├── artisan                     # Laravel CLI execution binary
├── bootstrap/app.php           # Slim Laravel 11 bootstrapping & middleware
├── config/
│   ├── app.php
│   ├── database.php            # SQLite default connection
│   └── filesystems.php         # Local public disk for avatar uploads
├── database/
│   ├── database.sqlite         # SQLite storage file
│   ├── migrations/
│   │   └── 2024_01_01_000001_create_resumes_table.php
│   └── seeders/
│       └── DatabaseSeeder.php  # Rich sample resumes hydration
├── app/
│   ├── Models/
│   │   ├── Resume.php          # Eloquent model with JSON casts
│   │   └── User.php
│   └── Http/Controllers/
│       └── ResumeController.php# RESTful CRUD, clone, upload, DomPDF export
├── routes/
│   ├── web.php                 # Web application routes
│   └── api.php                 # Local REST API endpoints (/api/v1/resumes)
├── resources/
│   ├── js/app.tsx              # Inertia/React entry point
│   └── views/
│       ├── app.blade.php       # Root HTML blade view
│       └── pdf/resume.blade.php# Barryvdh DomPDF ATS printable blade
└── src/                        # React 19 + TypeScript + Tailwind source
    ├── components/
    │   ├── Header.tsx
    │   ├── Dashboard.tsx
    │   ├── builder/            # Multi-step tabbed editor
    │   ├── preview/            # Reactive live preview & templates
    │   └── laravel/            # Monorepo architecture modal inspector
    ├── data/seedResumes.ts     # Pre-seeded client data
    ├── services/storageService.ts
    └── types/resume.ts
```

---

## License
MIT License. Built for modern engineers and designers seeking rapid, ATS-certified resumes.
