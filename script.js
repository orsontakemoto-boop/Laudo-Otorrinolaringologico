document.addEventListener('DOMContentLoaded', () => {
    // 1. Set Current Date
    const dateElement = document.getElementById('current-date');
    const now = new Date();
    dateElement.textContent = now.toLocaleDateString('pt-BR');

    // 2. Exam Type Templates
    const examType = document.getElementById('exam-type');
    const examText = document.getElementById('exam-text');

    const examTemplates = {
        'video-endoscopia': `Equipamento:
·Microcâmera Olympus CH-S190-XZ
·Processador de Imagem Olympus Visera OTV-S190
·Fonte de Luz Xenon Olympus Visera CLV-S190
·Videoendoscópio Olympus Enf-V2

Preparo: 
·Retração de corneto com Cloridrato de Oximetazolina
·Anestesia tópica com tetracaína a 2%

Exame Endoscópico:
·Vestíbulo e válvula nasal: normal
·Concha nasal inferior: sem hipertrofia e sem lesão
·Meato inferior: sem secreção
·Concha média: de aspecto normal
·Meato médio: sem drenagem de secreção
·Recesso esfeno-etmoidal: sem drenagem de secreção.
·Coana: livre
·Tórus tubário: sem obstrução e sem secreção.
·Rinofaringe: sem lesão, sem hipertrofia adenoideana.
·Septo nasal: sem desvio / com desvio em região vestibular (I), valvular (II), do ático (III), turbinal (IV), retroturbinal (V).

Conclusão: Exame compatível com a normalidade.`,
        'video-naso-faringo': `Equipamento:
·Videoendoscópio Olympus Enf-V2
·Processador de Imagem Olympus Visera OTV-S190
·Fonte de Luz Xenon Olympus Visera CLV-S190

Preparo: 
·Retração de corneto com Cloridrato de Oximetazolina
·Anestesia tópica com tetracaína a 2%

Endoscópico Nasal:
·Vestíbulo e válvula nasal: normal
·Concha nasal inferior: sem hipertrofia e sem lesão
·Meato inferior: sem secreção
·Concha média: de aspecto normal
·Meato médio: sem drenagem de secreção
·Recesso esfeno-etmoidal: sem drenagem de secreção.
·Coana: livre
·Tórus tubário: sem obstrução e sem secreção.
·Septo nasal: sem desvio / com desvio em região vestibular (I), valvular (II), do ático (III), turbinal (IV), retroturbinal (V).
·Rinofaringe: sem lesão, sem hipertrofia adenoideana.

Laringoscopia:
·Base de língua: tonsilas linguais normais, sem lesão.
·Valécula: normal, sem lesão.
·Epiglote: morfologia normal, mobilidade preservada.
·Ligamento Ariepiglótica: normal, sem lesão.
·Aritenóides: sem lesão, simétricas, mobilidade preservada.
·Seio piriforme: normal, sem lesão.
·Pregas ventriculares: normais, simétricas.
·Pregas vocais: bordas lineares, coloração normal, mobilidade preservada, simétricas.
·Comissura posterior: de aspecto normal

Conclusão: Exame compatível com a normalidade.`,
        'video-laringoestroboscopia': `Equipamento: 
·Microcâmera Olympus CH-S190-XZ
·Processador de Imagem Olympus Visera OTV-S190
·Fonte de Luz Xenon Olympus Visera CLV-S190
·Videoendoscópio Olympus Enf-V2
·Laringoscópio Storz 10 mm 70°

Preparo: Anestesia tópica com tetracaína 2%.

Aspectos Anatômicos:
·Epiglote: normal.
·Valécula: normal, sem lesão.
·Aritenóides: normal, sem lesão, simétricas.
·Seio piriforme: normal, sem lesão.
·Pregas ventriculares: normais.
·Pregas vocais: Bordas lineares e coloração normal.
·Comissura posterior: de aspecto normal.

Aspectos Funcionais:
·Freqüência Fundamental: Hz
·Periodicidade: Regular / Irregular / Inconsistente
·Amplitude: Zero / Pequena / Normal / Grande (Direita > Esquerda / Direita = Esquerda / Direita < Esquerda)
·Fechamento Glótico: Completo / Incompleto / Inconsistente (Fenda Tipo: Fusiforme / Ampulheta / Irregular / Posterior / Anterior / Devido a massa oval unilateral / Arqueamento / Incompleto)
·Simetria do Movimento Bilateral: Simétrico / Assimétrico (Amplitude/Fase)
·Onda Mucosa: Ausentes / Pequenas / Normal / Grande (Direita > Esquerda / Direita = Esquerda / Direita < Esquerda)
·Porções Não-Vibrantes: Nenhuma / Ocasionalmente, Parcialmente / Sempre, Parcialmente / Ocasionalmente, Totalmente / Sempre, Totalmente
·Outros achados: Um pólipo que se move com uma defasagem em relação à prega vocal / A borda da prega vocal direita cruza a linha média em direção ao final da excursão medial para atingir a prega vocal esquerda / A borda da prega vocal esquerda cruza a linha média em direção final da excursão medial, mas não atinge a prega vocal direita / Os processos vocais bilaterais das cartilagens aritenóides estão envolvidos nos movimentos vibratórios
·Observações supra-glóticas: As pregas ventriculares bilaterais vibram / A região aritenóide esquerda apresenta vibração / A região aritenóide direita e a base da epiglote apresentam vibração irregular / Toda a estrutura glótica vibra / As estruturas supra-glóticas se contraem

Conclusão: Exame dentro da normalidade / Normal / Laringite Aguda / Laringite Crônica / Hemorragia Subepitelial da Prega Vocal / Nódulos de Prega Vocal / Pólipo de Prega Vocal / Edema de Reinke / Cisto de Prega Vocal / Sulco Vocal / Cicatriz da Prega Vocal / Membrana Laríngea / Displasia da Prega Vocal / Papiloma da Prega Vocal / Carcinoma da Prega Vocal / Paralisia do Nervo Laríngeo Recorrente / Hipertrofia ou Massa da Prega Ventricular / Prolapso do Ventrículo / Disfonia Hipercinética / Disfonia Hipocinética / Disfonia Espamódica.`,
        'video-faringoscopia': `Equipamento Utilizado: 

·Microcâmera Olympus CH-S190-XZ
·Processador de Imagem Olympus Visera OTV-S190
·Fonte de Luz Xenon Olympus Visera CLV-S190
·Videoendoscópio Olympus Enf-V2

História Clínica:
[Breve resumo da queixa principal, como hipernasalidade na fala, escape de ar nasal, dificuldades na deglutição, ou histórico de fissura labiopalatina, etc.]
Descrição do Procedimento:
O exame foi realizado por via nasal com nasofibroscópio flexível, sob anestesia tópica (se utilizada), com o paciente em posição [sentada/supina]. Foram observadas as estruturas da nasofaringe, orofaringe e hipofaringe durante a respiração e a fonação de estímulos específicos (vogais, frases, contagem) e, se aplicável, durante a deglutição de diferentes consistências (líquido, pastoso, sólido).

Achados Anatômicos:
Palato Mole (Véu Palatino): [Descrever tamanho, forma, simetria, presença de cicatrizes, fístulas ou outras anomalias].
Paredes Laterais e Posterior da Faringe: [Descrever a movimentação e a presença de coaptação (fechamento) simétrica].
Tonsilas Palatinas e Adenoides: [Descrever tamanho e se interferem na movimentação ou no espaço velofaríngeo].

Achados Funcionais (Avaliação do Fechamento Velofaríngeo):
Em Repouso e Respiração Nasal: [Descrever se o esfíncter permanece aberto, o que é normal].
Durante a Fonação:
Fechamento: Descrever se o fechamento é completo, incompleto (mínimo, pequeno, moderado, grande gap), o padrão de fechamento (coronal, sagital, circular, circular com rodízio de Passavant).
Escape de ar nasal: Observado durante a fonação de quais sons/frases.
Movimentação: Descrever a elevação do palato mole e a movimentação das paredes laterais e posterior.
Durante a Deglutição (se avaliada): [Descrever se há vedamento adequado, presença de penetração laríngea ou aspiração, resíduos faríngeos, etc.]

Impressão Diagnóstica / Conclusão:
[Ex: Fechamento velofaríngeo funcionalmente adequado, sem escape de ar nasal e sem sinais de incoordenação velofaríngea].
[Ex: Disfunção velofaríngea (insuficiência/incompetência/incoordenação) caracterizada por gap velofaríngeo de aproximadamente [X] mm durante a fonação da vogal /a/, predominantemente por falha na elevação do palato mole].
[Ex: Presença de microaspiração para líquidos finos devido à falha no vedamento velofaríngeo].

Conduta/Sugestões:
[Ex: Sugere-se avaliação fonoaudiológica detalhada, fonoterapia, discussão em equipe multiprofissional, ou indicação cirúrgica, etc`
    };

    examType.addEventListener('change', (e) => {
        const selectedTemplate = examTemplates[e.target.value];
        if (selectedTemplate !== undefined) {
            examText.value = selectedTemplate;
            updatePrintText();
        }
    });

    // Update print text on manual input
    examText.addEventListener('input', () => {
        updatePrintText();
        autoResizeTextarea();
    });

    function updatePrintText() {
        const printDiv = document.getElementById('exam-text-print');
        if (printDiv) {
            printDiv.textContent = examText.value;
        }
        autoResizeTextarea();
    }

    function autoResizeTextarea() {
        examText.style.height = 'auto';
        examText.style.height = examText.scrollHeight + 'px';
    }

    // 3. Camera Integration
    const videoFeed = document.getElementById('camera-feed');
    const captureBtn = document.getElementById('capture-btn');
    const photoGrid = document.getElementById('photo-grid');
    let stream = null;

    async function initCamera() {
        // Check if mediaDevices API is available
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            const errorMsg = "Erro: Seu navegador não suporta acesso à câmera ou a página não está segura (HTTPS/Localhost).";
            console.error(errorMsg);
            alert(errorMsg + "\n\nTente abrir via servidor local (http://localhost) ao invés de arquivo direto.");
            return;
        }

        try {
            stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment' }, // Prefer back camera on mobile
                audio: false
            });
            videoFeed.srcObject = stream;
        } catch (err) {
            console.error("Erro ao acessar a câmera:", err);
            alert("Não foi possível acessar a câmera. Verifique se você permitiu o acesso.\nErro: " + err.name);
        }
    }

    // Initialize camera on load
    initCamera();

    // 4. Capture Photo
    captureBtn.addEventListener('click', () => {
        if (!stream) {
            alert("Câmera não iniciada. Verifique as permissões.");
            return;
        }

        const canvas = document.createElement('canvas');
        canvas.width = videoFeed.videoWidth;
        canvas.height = videoFeed.videoHeight;
        const ctx = canvas.getContext('2d');

        // Draw current video frame to canvas
        ctx.drawImage(videoFeed, 0, 0, canvas.width, canvas.height);

        // Convert to image URL
        const imageUrl = canvas.toDataURL('image/jpeg');

        addPhotoToGrid(imageUrl);
    });

    function addPhotoToGrid(src) {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';

        const img = document.createElement('img');
        img.src = src;

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-photo no-print';
        removeBtn.innerHTML = '&times;';
        removeBtn.onclick = () => photoItem.remove();

        photoItem.appendChild(img);
        photoItem.appendChild(removeBtn);
        photoGrid.appendChild(photoItem);
    }

    // 5. Image Upload Handling
    const imageUpload = document.getElementById('image-upload');

    imageUpload.addEventListener('change', (e) => {
        const files = e.target.files;

        if (files && files.length > 0) {
            Array.from(files).forEach(file => {
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();

                    reader.onload = (event) => {
                        addPhotoToGrid(event.target.result);
                    };

                    reader.readAsDataURL(file);
                }
            });

            // Reset the input so the same file can be selected again
            imageUpload.value = '';
        }
    });

    // 6. YouTube & QR Code Handling
    const youtubeInput = document.getElementById('youtube-link');
    const videoSection = document.getElementById('video-section');
    const videoPreview = document.getElementById('video-preview');
    const qrcodeContainer = document.getElementById('qrcode');

    youtubeInput.addEventListener('input', (e) => {
        const url = e.target.value;
        const videoId = extractVideoID(url);

        if (videoId) {
            // Show section
            videoSection.style.display = 'block';

            // Embed Video
            videoPreview.innerHTML = `
                <iframe width="100%" height="315" 
                src="https://www.youtube.com/embed/${videoId}" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
            `;

            // Generate QR Code
            qrcodeContainer.innerHTML = ''; // Clear previous
            new QRCode(qrcodeContainer, {
                text: url,
                width: 128,
                height: 128,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
        } else {
            videoSection.style.display = 'none';
            videoPreview.innerHTML = '';
            qrcodeContainer.innerHTML = '';
        }
    });

    function extractVideoID(url) {
        // Supports standard, short URLs, embeds, Shorts, and Lives
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/|live\/)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    }

    // 7. Print Functionality
    const printBtn = document.getElementById('print-btn');
    printBtn.addEventListener('click', () => {
        window.print();
    });
});
