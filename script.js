
const modal = document.getElementById('modal');
const stepContent = document.getElementById('stepContent');
const stepProgress = document.getElementById('stepProgress');
const mainTitle = document.getElementById('mainTitle');

const stepsData = {
  cert: [
    `<h2>1. Получение UDiD</h2>
    <p>1. Откройте <b>UDiD_Bot</b> и нажмите "Старт".</p>
    <p>2. Нажмите "Получить UDiD" → "Get UDiD" → "Разрешить" → "Закрыть".</p>
    <p>3. Перейдите в Настройки → Профиль загружен → Установить.</p>
    <p>4. После установки вас перекинет обратно в бот с вашим UDiD:</p>
    <pre><code>UDID: 00008101-001E5C1A36C0001E</code></pre>`,
    `<h2>2. Получение сертификата</h2>
    <p>1. Нажмите "Статус UDiD".</p>
    <p>2. Введите ваш UDID без пробелов.</p>
    <p>3. Подтвердите → Получите 2 файла сертификата.</p>
    <p>4. Сохраните их на устройство.</p>`
  ],
  ipa: [
    `<h2>Установщик IPA файлов</h2>
    <p><b>В UDiD_Bot вам будут предложены 4 варианта установщиков — выберите свой:</b></p>
    <div class="step-button" onclick="loadInstaller('esign')">ESign</div>
    <div class="step-button" onclick="loadInstaller('gbox')">Gbox</div>
    <div class="step-button" onclick="loadInstaller('feather')">Feather</div>
    <div class="step-button" onclick="loadInstaller('scarlet')">Scarlet</div>`
  ]
};

const installers = {
  esign: `<h2>ESign</h2><p>Инструкция по установке через ESign...</p>`,
  gbox: `<h2>Gbox</h2><p>Инструкция по установке через Gbox...</p>`,
  feather: `<h2>Feather</h2><p>Инструкция по установке через Feather...</p>`,
  scarlet: `<h2>Scarlet</h2><p>Инструкция по установке через Scarlet...</p>`,
};

let currentStep = 0;
let currentSection = 'cert';

function openModal(section) {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  mainTitle.style.display = 'none';
  currentSection = section;
  currentStep = 0;
  showStep();
}

function closeModal(e) {
  if (e.target === modal || e.target.classList.contains('close')) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    mainTitle.style.display = '';
  }
}

function showStep() {
  const steps = stepsData[currentSection];
  stepContent.innerHTML = steps[currentStep];
  stepProgress.textContent = `Шаг ${currentStep + 1} из ${steps.length}`;
}

function nextStep() {
  const steps = stepsData[currentSection];
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep();
  }
}

function loadInstaller(name) {
  stepContent.innerHTML = installers[name];
  stepProgress.textContent = name.toUpperCase();
}
