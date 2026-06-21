# ==========================================
# EscalaSites Project Generator
# ==========================================

Clear-Host

Write-Host ""
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "      ESCALASITES PROJECT GENERATOR      " -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Nome do cliente
$clientName = Read-Host "Nome do cliente"

if ([string]::IsNullOrWhiteSpace($clientName)) {
    Write-Host ""
    Write-Host "Nome inválido." -ForegroundColor Red
    exit
}

# Slug do site
$siteSlug = $clientName.Trim().ToLower()

$siteSlug = $siteSlug `
-replace '[áàãâä]', 'a' `
-replace '[éèêë]', 'e' `
-replace '[íìîï]', 'i' `
-replace '[óòõôö]', 'o' `
-replace '[úùûü]', 'u' `
-replace '[ç]', 'c'

$siteSlug = $siteSlug -replace '\s+', '_'
$siteSlug = $siteSlug -replace '[^a-z0-9_]', ''

Write-Host ""
Write-Host "Site Slug:" -NoNewline
Write-Host " $siteSlug" -ForegroundColor Green

Write-Host ""
Write-Host "Tipo do site"
Write-Host ""
Write-Host "[1] Landing Page"
Write-Host "[2] Site Institucional"
Write-Host "[3] Restaurante"
Write-Host "[4] Advocacia"
Write-Host "[5] Clínica"
Write-Host "[6] SaaS"
Write-Host ""

$siteTypeChoice = Read-Host "Escolha"

switch ($siteTypeChoice) {
    "1" { $type = "landing-page" }
    "2" { $type = "institutional" }
    "3" { $type = "restaurant" }
    "4" { $type = "law-firm" }
    "5" { $type = "clinic" }
    "6" { $type = "saas" }
    default { $type = "custom" }
}

Write-Host ""
Write-Host "Tipo selecionado:" -NoNewline
Write-Host " $type" -ForegroundColor Yellow

Write-Host ""
Write-Host "Criando estrutura..." -ForegroundColor Cyan
Write-Host ""

& "$PSScriptRoot\..\docs\create-docs.ps1" -SiteSlug $siteSlug

& "$PSScriptRoot\..\setup\setup-stack.ps1" `
    -SiteSlug $siteSlug `
    -SiteType $type

& "$PSScriptRoot\..\setup\install-dependencies.ps1" `
    -SiteSlug $siteSlug

# Em breve
# & "$PSScriptRoot\copy-template.ps1" -SiteSlug $siteSlug
# & "$PSScriptRoot\init-project.ps1" -SiteSlug $siteSlug

Write-Host ""
Write-Host "=========================================" -ForegroundColor Green
Write-Host "Site criado com sucesso!" -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Green

Write-Host ""
Write-Host "Cliente   :" $clientName
Write-Host "Site Slug :" $siteSlug
Write-Host "Tipo      :" $type