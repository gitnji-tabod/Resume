<?php

namespace App\Http\Controllers;

use App\Models\Resume;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ResumeController extends Controller
{
    /**
     * Display a listing of resumes or render Inertia dashboard.
     */
    public function index(Request $request)
    {
        $resumes = Resume::latest('updated_at')->get();

        if ($request->wantsJson()) {
            return response()->json($resumes);
        }

        return Inertia::render('Dashboard', [
            'resumes' => $resumes,
        ]);
    }

    /**
     * Store a newly created resume in SQLite.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'template' => 'nullable|string|in:bento,editorial,executive',
            'theme_color' => 'nullable|string',
            'personal_info' => 'required|array',
            'experiences' => 'nullable|array',
            'educations' => 'nullable|array',
            'certifications' => 'nullable|array',
            'skill_groups' => 'nullable|array',
            'projects' => 'nullable|array',
        ]);

        $slug = Str::slug($validated['title']) . '-' . Str::random(6);
        $validated['slug'] = $slug;
        $validated['template'] = $validated['template'] ?? 'bento';
        $validated['theme_color'] = $validated['theme_color'] ?? 'slate';

        $resume = Resume::create($validated);

        if ($request->wantsJson()) {
            return response()->json($resume, 201);
        }

        return redirect()->route('resumes.edit', $resume->id);
    }

    /**
     * Display or edit the specified resume in the React Builder.
     */
    public function edit(Resume $resume, Request $request)
    {
        if ($request->wantsJson()) {
            return response()->json($resume);
        }

        return Inertia::render('Builder', [
            'resume' => $resume,
        ]);
    }

    /**
     * Update the specified resume in SQLite.
     */
    public function update(Request $request, Resume $resume)
    {
        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'template' => 'nullable|string|in:bento,editorial,executive',
            'theme_color' => 'nullable|string',
            'personal_info' => 'sometimes|required|array',
            'experiences' => 'nullable|array',
            'educations' => 'nullable|array',
            'certifications' => 'nullable|array',
            'skill_groups' => 'nullable|array',
            'projects' => 'nullable|array',
        ]);

        $resume->update($validated);

        return response()->json($resume);
    }

    /**
     * Remove the specified resume from SQLite.
     */
    public function destroy(Resume $resume)
    {
        $resume->delete();
        return response()->json(['message' => 'Resume deleted successfully.']);
    }

    /**
     * Clone an existing resume with all associated relations.
     */
    public function clone(Resume $resume)
    {
        $cloned = $resume->replicate();
        $cloned->title = $resume->title . ' (Copy)';
        $cloned->slug = Str::slug($cloned->title) . '-' . Str::random(6);
        $cloned->save();

        return response()->json($cloned);
    }

    /**
     * Handle local avatar file uploads into storage/app/public/avatars.
     */
    public function uploadAvatar(Request $request)
    {
        $request->validate([
            'avatar' => 'required|image|mimes:jpeg,png,jpg,webp|max:3072',
        ]);

        $file = $request->file('avatar');
        $filename = 'avatar_' . Str::random(12) . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs('avatars', $filename, 'public');

        return response()->json([
            'url' => Storage::url($path),
            'filename' => $filename,
        ]);
    }

    /**
     * Server-side PDF export engine using barryvdh/laravel-dompdf.
     */
    public function exportPdf(Resume $resume)
    {
        $pdf = Pdf::loadView('pdf.resume', [
            'resume' => $resume,
        ])->setPaper('a4', 'portrait')
          ->setWarnings(false);

        return $pdf->download("{$resume->slug}.pdf");
    }
}
