<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('resumes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('template')->default('bento'); // bento, editorial, executive
            $table->string('theme_color')->default('slate');
            $table->json('personal_info');
            $table->json('experiences')->nullable();
            $table->json('educations')->nullable();
            $table->json('certifications')->nullable();
            $table->json('skill_groups')->nullable();
            $table->json('projects')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('resumes');
    }
};
