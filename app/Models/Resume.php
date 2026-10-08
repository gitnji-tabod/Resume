<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'template',
        'theme_color',
        'personal_info',
        'experiences',
        'educations',
        'certifications',
        'skill_groups',
        'projects',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'personal_info' => 'array',
            'experiences' => 'array',
            'educations' => 'array',
            'certifications' => 'array',
            'skill_groups' => 'array',
            'projects' => 'array',
        ];
    }
}
