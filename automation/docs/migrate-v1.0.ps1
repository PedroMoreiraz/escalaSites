# EscalaSites - Architecture Migration Script
# Executa a reorganizacao de dominios aprovada em 2026-06-20

$root = Split-Path -Parent $PSScriptRoot
$ErrorActionPreference = "Stop"

function Move-Safe {
    param($Source, $Destination)
    if (Test-Path $Source) {
        Move-Item -Path $Source -Destination $Destination -Force
        Write-Host "  OK  $(Split-Path $Source -Leaf) -> $(Split-Path $Destination -Leaf)" -ForegroundColor Green
    } else {
        Write-Host "  --  $Source nao encontrado (ignorado)" -ForegroundColor DarkGray
    }
}

function Remove-Safe {
    param($Path)
    if (Test-Path $Path) {
        Remove-Item -Path $Path -Recurse -Force
        Write-Host "  DEL $(Split-Path $Path -Leaf)" -ForegroundColor Yellow
    }
}

function New-Dir {
    param($Path)
    New-Item -ItemType Directory -Path $Path -Force | Out-Null
}

Write-Host ""
Write-Host "EscalaSites - Reorganizacao Arquitetural" -ForegroundColor White
Write-Host "========================================" -ForegroundColor White
Write-Host ""

# -----------------------------------------------------------------
# FASE 1 - Criar nova estrutura de dominios
# -----------------------------------------------------------------
Write-Host "FASE 1 - Criando estrutura de dominios" -ForegroundColor Cyan

New-Dir "$root\engine\context"
New-Dir "$root\engine\prompts"
New-Dir "$root\engine\workflows"
New-Dir "$root\engine\playbooks"
New-Dir "$root\engine\qa"
New-Dir "$root\knowledge\taste"
New-Dir "$root\knowledge\sectors"
New-Dir "$root\knowledge\platform"
New-Dir "$root\templates\site"
New-Dir "$root\templates\documents"
New-Dir "$root\templates\specs"
New-Dir "$root\platform\decisions"
New-Dir "$root\platform\changelog"
New-Dir "$root\research\leads"
New-Dir "$root\research\market"

Write-Host "  OK  15 diretorios criados" -ForegroundColor Green
Write-Host ""

# -----------------------------------------------------------------
# FASE 2 - Mover conteudo para os dominios corretos
# -----------------------------------------------------------------
Write-Host "FASE 2 - Movendo conteudo" -ForegroundColor Cyan

# knowledge/taste/extracted <- skills/extracted [SOMENTE LEITURA]
Move-Safe "$root\skills\extracted" "$root\knowledge\taste\extracted"

# knowledge/taste/source <- skills/taste-skill
Move-Safe "$root\skills\taste-skill" "$root\knowledge\taste\source"

# knowledge/platform/
Move-Safe "$root\docs\site-generation-system.md" "$root\knowledge\platform\generation-system.md"
Move-Safe "$root\core\dependencies.json" "$root\knowledge\platform\dependencies.json"

# engine/context/ <- master context (renomeado: remove nome de IA)
Move-Safe "$root\ai\contexts\CLAUDE_MASTER_CONTEXT.md" "$root\engine\context\master-context.md"

# engine/prompts/ <- ai/prompts/*
if (Test-Path "$root\ai\prompts") {
    Get-ChildItem "$root\ai\prompts" | ForEach-Object {
        Move-Item $_.FullName "$root\engine\prompts\" -Force
    }
    Write-Host "  OK  ai/prompts/* -> engine/prompts/" -ForegroundColor Green
}

# engine/workflows/ <- ai/workflows/*
if (Test-Path "$root\ai\workflows") {
    Get-ChildItem "$root\ai\workflows" | ForEach-Object {
        Move-Item $_.FullName "$root\engine\workflows\" -Force
    }
    Write-Host "  OK  ai/workflows/* -> engine/workflows/" -ForegroundColor Green
}

# engine/playbooks/ <- ai/playbooks/* + ai/recipes/* (merged)
if (Test-Path "$root\ai\playbooks") {
    Get-ChildItem "$root\ai\playbooks" | ForEach-Object {
        Move-Item $_.FullName "$root\engine\playbooks\" -Force
    }
    Write-Host "  OK  ai/playbooks/* -> engine/playbooks/" -ForegroundColor Green
}

if (Test-Path "$root\ai\recipes") {
    Get-ChildItem "$root\ai\recipes" | ForEach-Object {
        Move-Item $_.FullName "$root\engine\playbooks\" -Force
    }
    Write-Host "  OK  ai/recipes/* -> engine/playbooks/ (merged)" -ForegroundColor Green
}

# engine/qa/ <- ai/checklists/*
if (Test-Path "$root\ai\checklists") {
    Get-ChildItem "$root\ai\checklists" | ForEach-Object {
        Move-Item $_.FullName "$root\engine\qa\" -Force
    }
    Write-Host "  OK  ai/checklists/* -> engine/qa/" -ForegroundColor Green
}

# templates/documents/ <- ai/templates/*
if (Test-Path "$root\ai\templates") {
    Get-ChildItem "$root\ai\templates" | ForEach-Object {
        Move-Item $_.FullName "$root\templates\documents\" -Force
    }
    Write-Host "  OK  ai/templates/* -> templates/documents/" -ForegroundColor Green
}

# templates/specs/ <- docs/master-boilerplate-spec.md (renomeado)
Move-Safe "$root\docs\master-boilerplate-spec.md" "$root\templates\specs\next-premium-spec.md"

# templates/site/next-premium <- factory/boilerplates/next-premium
Move-Safe "$root\factory\boilerplates\next-premium" "$root\templates\site\next-premium"

# automation/ - renomear scripts
if (Test-Path "$root\automation\copy-boilerplate.ps1") {
    Rename-Item "$root\automation\copy-boilerplate.ps1" "copy-template.ps1"
    Write-Host "  OK  copy-boilerplate.ps1 -> copy-template.ps1" -ForegroundColor Green
}
if (Test-Path "$root\automation\setup-next.ps1") {
    Rename-Item "$root\automation\setup-next.ps1" "setup-stack.ps1"
    Write-Host "  OK  setup-next.ps1 -> setup-stack.ps1" -ForegroundColor Green
}

Write-Host ""

# -----------------------------------------------------------------
# FASE 3 - Remover pastas obsoletas
# -----------------------------------------------------------------
Write-Host "FASE 3 - Removendo pastas obsoletas" -ForegroundColor Cyan

Remove-Safe "$root\ai"
Remove-Safe "$root\skills"
Remove-Safe "$root\factory"
Remove-Safe "$root\boilerplates"
Remove-Safe "$root\core"
Remove-Safe "$root\tools"
Remove-Safe "$root\docs"

Write-Host ""

# -----------------------------------------------------------------
# FASE 4 - Verificacao da estrutura final
# -----------------------------------------------------------------
Write-Host "FASE 4 - Verificacao da estrutura final" -ForegroundColor Cyan

$expected = @(
    "$root\knowledge\taste\extracted",
    "$root\knowledge\taste\source",
    "$root\knowledge\platform",
    "$root\engine\context",
    "$root\engine\prompts",
    "$root\engine\workflows",
    "$root\engine\playbooks",
    "$root\engine\qa",
    "$root\templates\site\next-premium",
    "$root\templates\documents",
    "$root\templates\specs",
    "$root\clients\suzaku_sushi",
    "$root\automation",
    "$root\platform\decisions",
    "$root\research\leads"
)

$allOk = $true
foreach ($path in $expected) {
    if (Test-Path $path) {
        Write-Host "  OK  $($path.Replace($root, ''))" -ForegroundColor Green
    } else {
        Write-Host "  !! $($path.Replace($root, '')) NAO ENCONTRADO" -ForegroundColor Red
        $allOk = $false
    }
}

Write-Host ""
if ($allOk) {
    Write-Host "Reorganizacao concluida com sucesso!" -ForegroundColor Green
} else {
    Write-Host "Reorganizacao concluida com alertas." -ForegroundColor Yellow
}
Write-Host ""
