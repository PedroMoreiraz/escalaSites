# EscalaSites - Architecture Migration V1.1
# Transforms current structure into definitive V1.1 architecture
# Date: 2026-06-20

$root = Split-Path -Parent $PSScriptRoot
$ErrorActionPreference = "Stop"

function New-Dir { param($p) New-Item -ItemType Directory -Path $p -Force | Out-Null }
function Move-File {
    param($src, $dst)
    if (Test-Path $src) {
        Move-Item -Path $src -Destination $dst -Force
        Write-Host "  OK  $(Split-Path $src -Leaf) -> $($dst.Replace($root,''))" -ForegroundColor Green
    } else {
        Write-Host "  --  $src not found" -ForegroundColor DarkGray
    }
}
function Move-Dir {
    param($src, $dst)
    if (Test-Path $src) {
        Move-Item -Path $src -Destination $dst -Force
        Write-Host "  OK  $(Split-Path $src -Leaf)/ -> $($dst.Replace($root,''))" -ForegroundColor Green
    } else {
        Write-Host "  --  $src not found" -ForegroundColor DarkGray
    }
}
function Remove-Safe { param($p) if (Test-Path $p) { Remove-Item $p -Recurse -Force } }

Write-Host ""
Write-Host "EscalaSites - Migration V1.1" -ForegroundColor White
Write-Host "=============================" -ForegroundColor White
Write-Host ""

# =================================================================
# STEP 1 - Create root domains
# =================================================================
Write-Host "STEP 1 - Root domains" -ForegroundColor Cyan
New-Dir "$root\rules"
New-Dir "$root\schemas"
New-Dir "$root\examples"
Write-Host "  OK  rules/ schemas/ examples/ created" -ForegroundColor Green
Write-Host ""

# =================================================================
# STEP 2 - Reorganize knowledge/
# =================================================================
Write-Host "STEP 2 - Reorganizing knowledge/" -ForegroundColor Cyan

New-Dir "$root\knowledge\design\principles"
New-Dir "$root\knowledge\design\systems"
New-Dir "$root\knowledge\design\patterns"
New-Dir "$root\knowledge\design\references"
New-Dir "$root\knowledge\design\source"
New-Dir "$root\knowledge\seo"
New-Dir "$root\knowledge\conversion"
New-Dir "$root\knowledge\copywriting"

# Move taste/extracted/* -> design/principles/ [READ-ONLY - content preserved]
if (Test-Path "$root\knowledge\taste\extracted") {
    Get-ChildItem "$root\knowledge\taste\extracted" | ForEach-Object {
        Move-Item $_.FullName "$root\knowledge\design\principles\" -Force
    }
    Write-Host "  OK  taste/extracted/* -> design/principles/" -ForegroundColor Green
}

# Move taste/source/ -> design/source/
if (Test-Path "$root\knowledge\taste\source") {
    Get-ChildItem "$root\knowledge\taste\source" | ForEach-Object {
        Move-Item $_.FullName "$root\knowledge\design\source\" -Force
    }
    Write-Host "  OK  taste/source/* -> design/source/" -ForegroundColor Green
}

Remove-Safe "$root\knowledge\taste"
Write-Host "  DEL knowledge/taste/ removed" -ForegroundColor Yellow
Write-Host ""

# =================================================================
# STEP 3 - Reorganize engine/prompts/
# =================================================================
Write-Host "STEP 3 - Reorganizing engine/prompts/" -ForegroundColor Cyan

New-Dir "$root\engine\prompts\strategy"
New-Dir "$root\engine\prompts\implementation"
New-Dir "$root\engine\prompts\components"
New-Dir "$root\engine\prompts\seo"

# strategy/
Move-File "$root\engine\prompts\01-generate-brand-profile.md"      "$root\engine\prompts\strategy\brand-profile.md"
Move-File "$root\engine\prompts\02-generate-page-architecture.md"  "$root\engine\prompts\strategy\page-architecture.md"
Move-File "$root\engine\prompts\03-generate-content-strategy.md"   "$root\engine\prompts\strategy\content-strategy.md"

# implementation/
Move-File "$root\engine\prompts\04-generate-site-config.md"        "$root\engine\prompts\implementation\site-config.md"
Move-File "$root\engine\prompts\05-generate-data-layer.md"         "$root\engine\prompts\implementation\data-layer.md"
Move-File "$root\engine\prompts\06-generate-implementation-plan.md" "$root\engine\prompts\implementation\implementation-plan.md"
Move-File "$root\engine\prompts\07-generate-site-blueprint.md"     "$root\engine\prompts\implementation\site-blueprint.md"

# components/
Move-File "$root\engine\prompts\10-generate-hero.md"               "$root\engine\prompts\components\hero.md"
Move-File "$root\engine\prompts\11-generate-services.md"           "$root\engine\prompts\components\services.md"
Move-File "$root\engine\prompts\12-generate-testimonials.md"       "$root\engine\prompts\components\testimonials.md"
Move-File "$root\engine\prompts\13-generate-faq.md"                "$root\engine\prompts\components\faq.md"
Move-File "$root\engine\prompts\14-generate-cta.md"                "$root\engine\prompts\components\cta.md"
Move-File "$root\engine\prompts\15-generate-footer.md"             "$root\engine\prompts\components\footer.md"
Move-File "$root\engine\prompts\16-generate-home-page.md"          "$root\engine\prompts\components\home-page.md"

# seo/
Move-File "$root\engine\prompts\17-generate-metadata.md"           "$root\engine\prompts\seo\metadata.md"
Move-File "$root\engine\prompts\18-generate-structured-data.md"    "$root\engine\prompts\seo\structured-data.md"
Move-File "$root\engine\prompts\19-generate-sitemap.md"            "$root\engine\prompts\seo\sitemap.md"
Move-File "$root\engine\prompts\20-generate-robots.md"             "$root\engine\prompts\seo\robots.md"

Write-Host ""

# =================================================================
# STEP 4 - Reorganize engine/playbooks/
# =================================================================
Write-Host "STEP 4 - Reorganizing engine/playbooks/" -ForegroundColor Cyan

New-Dir "$root\engine\playbooks\restaurant"
New-Dir "$root\engine\playbooks\clinic"
New-Dir "$root\engine\playbooks\law-firm"
New-Dir "$root\engine\playbooks\saas"
New-Dir "$root\engine\playbooks\ecommerce"
New-Dir "$root\engine\playbooks\agency"

# restaurant
Move-File "$root\engine\playbooks\restaurant-playbook.md"      "$root\engine\playbooks\restaurant\homepage.md"
Move-File "$root\engine\playbooks\generate-restaurant-site.md" "$root\engine\playbooks\restaurant\landing-page.md"

# clinic
Move-File "$root\engine\playbooks\clinic-playbook.md"          "$root\engine\playbooks\clinic\homepage.md"
Move-File "$root\engine\playbooks\dentist-playbook.md"         "$root\engine\playbooks\clinic\dentist.md"

# law-firm
Move-File "$root\engine\playbooks\law-firm-playbook.md"        "$root\engine\playbooks\law-firm\homepage.md"
Move-File "$root\engine\playbooks\generate-law-firm-site.md"   "$root\engine\playbooks\law-firm\landing-page.md"

# saas
Move-File "$root\engine\playbooks\saas-playbook.md"            "$root\engine\playbooks\saas\homepage.md"
Move-File "$root\engine\playbooks\generate-saas-site.md"       "$root\engine\playbooks\saas\landing-page.md"

# ecommerce
Move-File "$root\engine\playbooks\ecommerce-playbook.md"       "$root\engine\playbooks\ecommerce\homepage.md"

# agency
Move-File "$root\engine\playbooks\agency-playbook.md"          "$root\engine\playbooks\agency\homepage.md"

# generic recipes - distribute to relevant folders
Move-File "$root\engine\playbooks\generate-full-homepage.md"      "$root\engine\playbooks\restaurant\full-homepage.md"
Move-File "$root\engine\playbooks\generate-full-landing-page.md"  "$root\engine\playbooks\saas\landing-page-generic.md"
Move-File "$root\engine\playbooks\generate-local-business-site.md" "$root\engine\playbooks\restaurant\local-business.md"

Write-Host ""

# =================================================================
# STEP 5 - Reorganize templates/documents/
# =================================================================
Write-Host "STEP 5 - Reorganizing templates/documents/" -ForegroundColor Cyan

New-Dir "$root\templates\documents\strategy"
New-Dir "$root\templates\documents\implementation"
New-Dir "$root\templates\documents\seo"

# strategy
Move-File "$root\templates\documents\brand-profile-template.md"      "$root\templates\documents\strategy\brand-profile.md"
Move-File "$root\templates\documents\page-architecture-template.md"  "$root\templates\documents\strategy\page-architecture.md"
Move-File "$root\templates\documents\content-strategy-template.md"   "$root\templates\documents\strategy\content-strategy.md"

# implementation
Move-File "$root\templates\documents\site-config-template.md"        "$root\templates\documents\implementation\site-config.md"
Move-File "$root\templates\documents\data-layer-template.md"         "$root\templates\documents\implementation\data-layer.md"
Move-File "$root\templates\documents\implementation-plan-template.md" "$root\templates\documents\implementation\implementation-plan.md"
Move-File "$root\templates\documents\site-blueprint-template.md"     "$root\templates\documents\implementation\site-blueprint.md"

Write-Host ""

# =================================================================
# STEP 6 - clients/*/project -> clients/*/site
# =================================================================
Write-Host "STEP 6 - Renaming clients/*/project -> clients/*/site" -ForegroundColor Cyan

Get-ChildItem "$root\clients" -Directory | ForEach-Object {
    $clientPath = $_.FullName
    $projectPath = "$clientPath\project"
    $sitePath = "$clientPath\site"
    if (Test-Path $projectPath) {
        Rename-Item $projectPath "site"
        Write-Host "  OK  $($_.Name)/project -> $($_.Name)/site" -ForegroundColor Green
    } elseif (-not (Test-Path $sitePath)) {
        New-Dir $sitePath
        Write-Host "  OK  $($_.Name)/site created" -ForegroundColor Green
    }
}

Write-Host ""

# =================================================================
# STEP 7 - Reorganize automation/
# =================================================================
Write-Host "STEP 7 - Reorganizing automation/" -ForegroundColor Cyan

New-Dir "$root\automation\project"
New-Dir "$root\automation\setup"
New-Dir "$root\automation\deploy"
New-Dir "$root\automation\docs"

# project scripts
Move-File "$root\automation\new-client.ps1"       "$root\automation\project\new-client.ps1"
Move-File "$root\automation\copy-template.ps1"    "$root\automation\project\copy-template.ps1"
Move-File "$root\automation\init-project.ps1"     "$root\automation\project\init-project.ps1"

# setup scripts
Move-File "$root\automation\install-dependencies.ps1" "$root\automation\setup\install-dependencies.ps1"
Move-File "$root\automation\setup-stack.ps1"          "$root\automation\setup\setup-stack.ps1"

# docs scripts
Move-File "$root\automation\create-docs.ps1"      "$root\automation\docs\create-docs.ps1"

# migrate.ps1 -> historical record in docs
Move-File "$root\automation\migrate.ps1"           "$root\automation\docs\migrate-v1.0.ps1"

Write-Host ""

# =================================================================
# STEP 8 - Create examples/ structure
# =================================================================
Write-Host "STEP 8 - Creating examples/ structure" -ForegroundColor Cyan

New-Dir "$root\examples\restaurant"
New-Dir "$root\examples\clinic"
New-Dir "$root\examples\law-firm"
New-Dir "$root\examples\ecommerce"
New-Dir "$root\examples\saas"
New-Dir "$root\examples\agency"

Write-Host "  OK  6 segment folders created" -ForegroundColor Green
Write-Host ""

# =================================================================
# STEP 9 - Verification
# =================================================================
Write-Host "STEP 9 - Verification" -ForegroundColor Cyan

$expected = @(
    "$root\knowledge\design\principles",
    "$root\knowledge\design\source",
    "$root\knowledge\seo",
    "$root\knowledge\conversion",
    "$root\knowledge\copywriting",
    "$root\knowledge\sectors",
    "$root\knowledge\platform",
    "$root\engine\prompts\strategy",
    "$root\engine\prompts\implementation",
    "$root\engine\prompts\components",
    "$root\engine\prompts\seo",
    "$root\engine\playbooks\restaurant",
    "$root\engine\playbooks\clinic",
    "$root\engine\playbooks\law-firm",
    "$root\engine\playbooks\saas",
    "$root\engine\playbooks\ecommerce",
    "$root\engine\playbooks\agency",
    "$root\templates\documents\strategy",
    "$root\templates\documents\implementation",
    "$root\templates\documents\seo",
    "$root\templates\site\next-premium",
    "$root\rules",
    "$root\schemas",
    "$root\examples\restaurant",
    "$root\examples\clinic",
    "$root\examples\law-firm",
    "$root\examples\ecommerce",
    "$root\examples\saas",
    "$root\examples\agency",
    "$root\automation\project",
    "$root\automation\setup",
    "$root\automation\deploy",
    "$root\automation\docs",
    "$root\clients\suzaku_sushi\site",
    "$root\platform\decisions",
    "$root\research\leads"
)

$allOk = $true
foreach ($path in $expected) {
    if (Test-Path $path) {
        Write-Host "  OK  $($path.Replace($root, ''))" -ForegroundColor Green
    } else {
        Write-Host "  !! $($path.Replace($root, '')) NOT FOUND" -ForegroundColor Red
        $allOk = $false
    }
}

Write-Host ""
if ($allOk) {
    Write-Host "V1.1 Migration complete - all checks passed!" -ForegroundColor Green
} else {
    Write-Host "V1.1 Migration complete with warnings." -ForegroundColor Yellow
}
Write-Host ""
