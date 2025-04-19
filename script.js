function toggleTheme() {
  const body = document.body;
  const logo = document.querySelector('.logo');
  body.classList.toggle('light-theme');
  body.classList.toggle('dark-theme');
  logo.classList.toggle('light-theme');
  logo.classList.toggle('dark-theme');
}

function showInstallers() {
  document.getElementById('installersOverlay').style.display = 'flex';
}

function closeInstallersOverlay() {
  document.getElementById('installersOverlay').style.display = 'none';
}

function openInstallerModal(installType) {
  alert(`Инструкция для ${installType} будет добавлена позже!`);
}

function openModal(step) {
  document.getElementById('modal').style.display = 'flex';
}

function closeModal(event) {
  if (event.target === document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
}

function previousStep() {
  console.log('Шаг назад');
}

function nextStep() {
  console.log('Шаг вперед');
}
