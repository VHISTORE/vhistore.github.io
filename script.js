
const modal = document.getElementById('modal');
const stepContent = document.getElementById('stepContent');

const steps = {
  certificate: `
    <h2>Получение сертификата</h2>
    <div class="step-progress">Шаг 1: Перейдите на сайт UDiD_Bot и нажмите кнопку "Старт".</div>
    <div class="step-progress">Шаг 2: Нажмите "Получить UDiD", разрешите загрузку профиля.</div>
    <div class="step-progress">Шаг 3: В настройках установите загруженный профиль.</div>
    <div class="step-progress">Шаг 4: Нажмите "Получить сертификат" — получите два файла.</div>
    <div class="step-progress">Шаг 5: Сохраните файлы на устройстве для использования с iPA.</div>
    <div class="step-progress">Шаг 6: Перейдите к инструкции по установке iPA файлов.</div>
  `,
  installers: `
    <h2>Установщик iPA файлов</h2>
    <div class="step-progress">Шаг 1: Выберите установщик:</div>
    <div class="step-button" onclick="openInstaller('ESign')">ESign</div>
    <div class="step-button" onclick="openInstaller('Gbox')">GBox</div>
    <div class="step-button" onclick="openInstaller('Feather')">Feather</div>
    <div class="step-button" onclick="openInstaller('Scarlet')">Scarlet</div>
  `,
  ESign: `
    <h2>Инструкция для ESign</h2>
    <div class="step-progress">Шаг 1: Нажмите кнопку ESign и выберите "Установить".</div>
    <div class="step-progress">Шаг 2: После установки включите "Режим разработчика" в настройках.</div>
    <div class="step-progress">Шаг 3: Откройте установщик → Файлы → "…" → "Импортировать сертификат".</div>
    <div class="step-progress">Шаг 4: Выберите .p12 и .mobileprovision файлы, введите пароль "1".</div>
    <div class="step-progress">Шаг 5: После импорта можно устанавливать iPA.</div>
  `,
  Gbox: `<h2>Инструкция для GBox</h2><p>Шаги для GBox...</p>`,
  Feather: `<h2>Инструкция для Feather</h2><p>Шаги для Feather...</p>`,
  Scarlet: `<h2>Инструкция для Scarlet</h2><p>Шаги для Scarlet...</p>`
};

function openModal(step) {
  stepContent.innerHTML = steps[step];
  modal.style.display = 'block';
}

function closeModal(event) {
  modal.style.display = 'none';
}

function openInstaller(installer) {
  openModal(installer);
}

function toggleTheme() {
  document.body.classList.toggle('light');
  document.querySelector('button').textContent =
    document.body.classList.contains('light') ? 'Тёмная тема' : 'Светлая тема';
}
