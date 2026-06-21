param(
    [Parameter(Mandatory = $true)]
    [string]$SiteSlug,

    [Parameter(Mandatory = $true)]
    [string]$SiteType
)

$root = Resolve-Path (Join-Path $PSScriptRoot "..\..")

$sitePath = Join-Path $root "clients\$SiteSlug\site"

Write-Host ""
Write-Host "===================================="
Write-Host "Criando site Next.js..."
Write-Host "===================================="
Write-Host ""

Set-Location $sitePath

npx create-next-app@latest . `
    --ts `
    --tailwind `
    --eslint `
    --app `
    --src-dir `
    --import-alias "@/*"

Write-Host ""
Write-Host "Site Next.js criado com sucesso." -ForegroundColor Green