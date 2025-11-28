# Sistema de Laudos Otorrinolaringológicos

Sistema web para geração de laudos médicos de exames otorrinolaringológicos com captura de fotos, integração com vídeos do YouTube e impressão otimizada.

## 📋 Características

- ✅ Formulário completo para dados do paciente
- ✅ Templates pré-definidos para diferentes tipos de exames
- ✅ Captura de fotos diretamente da câmera
- ✅ Upload de imagens do computador
- ✅ Integração com vídeos do YouTube (com QR Code para impressão)
- ✅ Impressão otimizada em formato A4
- ✅ Design moderno e responsivo
- ✅ Totalmente gratuito e open-source

## 🚀 Como Usar

### Opção 1: Servidor Local com PowerShell (Windows)

1. Abra o PowerShell na pasta do projeto
2. Execute o arquivo `iniciar-servidor.ps1`:
   ```powershell
   .\iniciar-servidor.ps1
   ```
3. O navegador abrirá automaticamente em `http://localhost:8080`
4. Para parar o servidor, pressione `Ctrl+C`

### Opção 2: Servidor Local com Python

1. Certifique-se de ter Python instalado
2. Abra o terminal na pasta do projeto
3. Execute:
   ```bash
   python -m http.server 8080
   ```
4. Abra o navegador em `http://localhost:8080`

### Opção 3: Servidor Local com Node.js

1. Certifique-se de ter Node.js instalado
2. Execute:
   ```bash
   npx http-server -p 8080 -o
   ```

### Opção 4: Abrir Diretamente (Limitações)

Você pode abrir o arquivo `index.html` diretamente no navegador, mas:
- ⚠️ A câmera não funcionará (requer HTTPS ou localhost)
- ⚠️ Vídeos do YouTube podem apresentar erros

## 📁 Estrutura de Arquivos

```
laudo-otorrino/
├── index.html          # Página principal
├── style.css           # Estilos e layout
├── script.js           # Funcionalidades JavaScript
├── logo.jpg            # Logo da clínica (substitua pelo seu)
├── iniciar-servidor.ps1 # Script para Windows
├── README.md           # Este arquivo
└── LICENSE             # Licença MIT
```

## 🎨 Personalização

### Alterar Logo da Clínica

Substitua o arquivo `logo.jpg` pela logo da sua clínica. Recomendado:
- Formato: JPG ou PNG
- Tamanho: 400x400px ou maior
- Fundo transparente (se PNG)

### Alterar Informações da Clínica

Edite o arquivo `index.html` e procure por:
```html
<h1>Clínica de Otorrinolaringologia</h1>
<p>Dr. [Seu Nome Aqui]</p>
<p>CRM: [Seu CRM] | RQE: [Seu RQE]</p>
```

E também na seção de assinatura:
```html
<p class="doctor-name">Dr. [Seu Nome Aqui]</p>
<p class="doctor-crm">Otorrinolaringologista - CRM/UF: [00000]</p>
```

### Adicionar Novos Templates de Exames

Edite o arquivo `script.js` e adicione novos templates no objeto `examTemplates`:
```javascript
const examTemplates = {
    'seu-novo-exame': `Seu template aqui...`,
    // ...
};
```

E adicione a opção no `index.html`:
```html
<option value="seu-novo-exame">Nome do Exame</option>
```

## 🖨️ Impressão

O sistema possui layout otimizado para impressão em A4:
- Fontes reduzidas para economia de espaço
- Campos sem bordas
- Fotos em tamanho adequado (180px)
- QR Code para vídeos do YouTube
- Assinatura posicionada corretamente

Para imprimir:
1. Preencha todos os campos
2. Clique em "Imprimir / Salvar PDF"
3. Na janela de impressão, selecione "Salvar como PDF" para gerar um arquivo

## 🔧 Requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari)
- Para usar a câmera: servidor local (localhost) ou HTTPS
- Para vídeos do YouTube: conexão com internet

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

Isso significa que você pode:
- ✅ Usar comercialmente
- ✅ Modificar como quiser
- ✅ Distribuir
- ✅ Usar em projetos privados

Sem nenhuma garantia ou responsabilidade do autor original.

## 🤝 Contribuições

Sinta-se livre para:
- Reportar bugs
- Sugerir melhorias
- Fazer fork e modificar
- Compartilhar com outros profissionais

## 📧 Suporte

Este é um projeto de código aberto fornecido "como está". Não há suporte oficial, mas você pode:
- Modificar o código conforme suas necessidades
- Contratar um desenvolvedor para customizações
- Compartilhar melhorias com a comunidade

## 🎯 Casos de Uso

- Consultórios de Otorrinolaringologia
- Clínicas médicas
- Hospitais
- Ensino médico
- Documentação de procedimentos

---

**Desenvolvido para a comunidade médica brasileira** 🇧🇷

Distribuído gratuitamente sob licença MIT.
