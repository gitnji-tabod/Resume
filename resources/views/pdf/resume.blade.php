<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>{{ $resume->title }}</title>
    <style>
        @page {
            margin: 15mm 15mm;
            size: a4 portrait;
        }
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #1a1a1a;
            font-size: 11pt;
            line-height: 1.4;
            margin: 0;
            padding: 0;
        }
        h1 {
            font-size: 20pt;
            margin: 0 0 4px 0;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: #111827;
        }
        .job-title {
            font-size: 12pt;
            font-weight: bold;
            color: #374151;
            margin-bottom: 6px;
        }
        .contact-strip {
            font-size: 9pt;
            color: #4b5563;
            margin-bottom: 14px;
            border-bottom: 1px solid #d1d5db;
            padding-bottom: 8px;
        }
        .section-title {
            font-size: 11pt;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #111827;
            border-bottom: 1.5px solid #111827;
            padding-bottom: 2px;
            margin-top: 14px;
            margin-bottom: 8px;
        }
        .item-header {
            width: 100%;
            margin-bottom: 2px;
        }
        .item-role {
            font-weight: bold;
            color: #111827;
        }
        .item-company {
            color: #4b5563;
            font-weight: 600;
        }
        .item-date {
            float: right;
            font-size: 9pt;
            color: #6b7280;
            text-align: right;
        }
        .clear {
            clear: both;
        }
        ul {
            margin: 4px 0 10px 18px;
            padding: 0;
        }
        li {
            font-size: 9.5pt;
            color: #374151;
            margin-bottom: 3px;
            line-height: 1.35;
        }
        .skill-group {
            margin-bottom: 4px;
            font-size: 9.5pt;
        }
        .skill-group-title {
            font-weight: bold;
            color: #111827;
        }
        .summary-text {
            font-size: 9.5pt;
            color: #374151;
            margin-bottom: 10px;
            line-height: 1.4;
        }
    </style>
</head>
<body>
    <div style="text-align: center;">
        <h1>{{ $resume->personal_info['fullName'] ?? 'Full Name' }}</h1>
        <div class="job-title">{{ $resume->personal_info['jobTitle'] ?? '' }}</div>
        <div class="contact-strip">
            {{ $resume->personal_info['location'] ?? '' }}
            @if(!empty($resume->personal_info['phone'])) | {{ $resume->personal_info['phone'] }} @endif
            @if(!empty($resume->personal_info['email'])) | {{ $resume->personal_info['email'] }} @endif
            @if(!empty($resume->personal_info['linkedin'])) | {{ $resume->personal_info['linkedin'] }} @endif
            @if(!empty($resume->personal_info['github'])) | {{ $resume->personal_info['github'] }} @endif
        </div>
    </div>

    @if(!empty($resume->personal_info['summary']))
        <div class="section-title">Professional Summary</div>
        <div class="summary-text">{{ $resume->personal_info['summary'] }}</div>
    @endif

    @if(!empty($resume->skill_groups))
        <div class="section-title">Technical Skills</div>
        @foreach($resume->skill_groups as $group)
            <div class="skill-group">
                <span class="skill-group-title">{{ $group['category'] }}:</span>
                {{ implode(', ', array_column($group['skills'] ?? [], 'name')) }}
            </div>
        @endforeach
    @endif

    @if(!empty($resume->experiences))
        <div class="section-title">Experience</div>
        @foreach($resume->experiences as $exp)
            <div class="item-header">
                <span class="item-date">{{ $exp['startDate'] }} – {{ !empty($exp['current']) ? 'Present' : $exp['endDate'] }}</span>
                <span class="item-role">{{ $exp['role'] }}</span>
                <span class="item-company">| {{ $exp['company'] }} @if(!empty($exp['location']))({{ $exp['location'] }})@endif</span>
                <div class="clear"></div>
            </div>
            @if(!empty($exp['bullets']))
                <ul>
                    @foreach($exp['bullets'] as $bullet)
                        <li>{{ $bullet }}</li>
                    @endforeach
                </ul>
            @endif
        @endforeach
    @endif

    @if(!empty($resume->projects))
        <div class="section-title">Key Projects</div>
        @foreach($resume->projects as $proj)
            <div class="item-header">
                <span class="item-role">{{ $proj['title'] }}</span>
                @if(!empty($proj['role'])) <span class="item-company">({{ $proj['role'] }})</span> @endif
                @if(!empty($proj['url'])) <span class="item-date">{{ $proj['url'] }}</span> @endif
                <div class="clear"></div>
            </div>
            <div class="summary-text" style="margin-bottom: 2px;">{{ $proj['description'] }}</div>
            @if(!empty($proj['tags']))
                <div style="font-size: 8.5pt; color: #6b7280; margin-bottom: 6px;">Tech: {{ implode(', ', $proj['tags']) }}</div>
            @endif
        @endforeach
    @endif

    @if(!empty($resume->educations))
        <div class="section-title">Education</div>
        @foreach($resume->educations as $edu)
            <div class="item-header">
                <span class="item-date">{{ $edu['startDate'] }} – {{ !empty($edu['current']) ? 'Present' : $edu['endDate'] }}</span>
                <span class="item-role">{{ $edu['degree'] }} @if(!empty($edu['fieldOfStudy'])) in {{ $edu['fieldOfStudy'] }} @endif</span>
                <div class="clear"></div>
            </div>
            <div style="font-size: 9.5pt; color: #4b5563;">{{ $edu['institution'] }} @if(!empty($edu['gpaOrHonors'])) &middot; {{ $edu['gpaOrHonors'] }} @endif</div>
        @endforeach
    @endif
</body>
</html>
