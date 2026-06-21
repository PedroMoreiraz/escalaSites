param(
    [Parameter(Mandatory = $true)]
    [string]$SiteSlug
)

$root = Resolve-Path (Join-Path $PSScriptRoot "..\..")
$sitePath = Join-Path $root "clients\$SiteSlug\site"

Write-Host ""
Write-Host "====================================" -ForegroundColor Cyan
Write-Host "Instalando dependências..." -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

Set-Location $sitePath

npm install `
framer-motion `
class-variance-authority `
clsx `
tailwind-merge `
lucide-react `
next-themes `
zod `
react-hook-form `
@hookform/resolvers `
sonner `
lenis `
vaul

Write-Host ""
Write-Host "Dependências instaladas com sucesso!" -ForegroundColor Green