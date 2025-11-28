# Sistema de Laudos Otorrinolaringológicos
# Script para iniciar servidor HTTP local no Windows

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Sistema de Laudos Otorrinolaringológicos" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Iniciando servidor local..." -ForegroundColor Yellow
Write-Host ""

# Porta do servidor
$porta = 8080

# Criar e iniciar o servidor HTTP
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$porta/")

try {
    $listener.Start()
    Write-Host "✓ Servidor rodando em: http://localhost:$porta/" -ForegroundColor Green
    Write-Host ""
    Write-Host "Abrindo navegador..." -ForegroundColor Yellow
    
    # Abrir navegador automaticamente
    Start-Process "http://localhost:$porta/index.html"
    
    Write-Host ""
    Write-Host "Pressione Ctrl+C para parar o servidor" -ForegroundColor Yellow
    Write-Host ""
    
    # Loop principal do servidor
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        # Determinar o arquivo solicitado
        $filePath = Join-Path $PWD.Path ($request.Url.LocalPath.TrimStart('/'))
        
        # Se for a raiz, redirecionar para index.html
        if ($filePath -eq (Join-Path $PWD.Path '')) {
            $filePath = Join-Path $PWD.Path 'index.html'
        }
        
        # Verificar se o arquivo existe
        if (Test-Path $filePath) {
            # Determinar o tipo de conteúdo
            $extension = [System.IO.Path]::GetExtension($filePath)
            $contentType = switch ($extension) {
                '.html' { 'text/html; charset=utf-8' }
                '.css'  { 'text/css; charset=utf-8' }
                '.js'   { 'application/javascript; charset=utf-8' }
                '.jpg'  { 'image/jpeg' }
                '.jpeg' { 'image/jpeg' }
                '.png'  { 'image/png' }
                '.gif'  { 'image/gif' }
                '.svg'  { 'image/svg+xml' }
                '.json' { 'application/json' }
                default { 'application/octet-stream' }
            }
            
            $response.ContentType = $contentType
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        }
        else {
            # Arquivo não encontrado
            $response.StatusCode = 404
            $errorMessage = "404 - Arquivo não encontrado: $($request.Url.LocalPath)"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($errorMessage)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        
        $response.Close()
    }
}
catch {
    Write-Host ""
    Write-Host "Erro ao iniciar servidor: $_" -ForegroundColor Red
    Write-Host ""
    Write-Host "Possíveis soluções:" -ForegroundColor Yellow
    Write-Host "1. Verifique se a porta $porta já está em uso" -ForegroundColor White
    Write-Host "2. Execute o PowerShell como Administrador" -ForegroundColor White
    Write-Host "3. Tente usar outra porta (edite a variável `$porta no script)" -ForegroundColor White
}
finally {
    if ($listener.IsListening) {
        $listener.Stop()
        Write-Host ""
        Write-Host "Servidor parado." -ForegroundColor Yellow
    }
    $listener.Close()
}
