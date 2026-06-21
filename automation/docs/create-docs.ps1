param(
    [Parameter(Mandatory = $true)]
    [string]$SiteSlug
)

$root = Resolve-Path (Join-Path $PSScriptRoot "..\..")
$clientsPath = Join-Path $root "clients"
$siteRoot = Join-Path $clientsPath $SiteSlug

$folders = @(
    "",
    "assets",
    "assets\branding",
    "assets\images",
    "assets\logos",
    "assets\videos",
    "assets\references",

    "docs",
    "docs\01-discovery",
    "docs\02-brand",
    "docs\03-strategy",
    "docs\04-content",
    "docs\05-seo",
    "docs\06-design",
    "docs\07-build",
    "docs\08-delivery",

    "research",
    "research\firecrawl",
    "research\screenshots",
    "research\competitors",
    "research\exports",

    "site"
)

foreach ($folder in $folders) {
    $path = Join-Path $siteRoot $folder
    New-Item -ItemType Directory -Force -Path $path | Out-Null
}

$files = @(
    "README.md",

    "docs\01-discovery\MASTER_DISCOVERY_REPORT.md",

    "docs\02-brand\brand-profile.md",

    "docs\03-strategy\page-architecture.md",
    "docs\03-strategy\content-strategy.md",
    "docs\03-strategy\conversion-strategy.md",

    "docs\04-content\hero-copy.md",
    "docs\04-content\services-copy.md",
    "docs\04-content\faq-copy.md",
    "docs\04-content\cta-copy.md",
    "docs\04-content\footer-copy.md",

    "docs\05-seo\keywords.md",
    "docs\05-seo\metadata.md",
    "docs\05-seo\schema.md",
    "docs\05-seo\sitemap.md",

    "docs\06-design\design-direction.md",
    "docs\06-design\color-strategy.md",
    "docs\06-design\typography.md",
    "docs\06-design\layout-decisions.md",

    "docs\07-build\implementation-plan.md",
    "docs\07-build\site-blueprint.md",

    "docs\08-delivery\handoff.md",
    "docs\08-delivery\future-improvements.md"
)

foreach ($file in $files) {
    $path = Join-Path $siteRoot $file

    if (!(Test-Path $path)) {
        New-Item -ItemType File -Path $path | Out-Null
    }
}

Write-Host ""
Write-Host "Estrutura criada com sucesso!" -ForegroundColor Green
Write-Host $siteRoot