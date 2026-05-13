function copyCode() {
  const text = document.querySelector('.mdn-code code').innerText;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.querySelector('.mdn-btn');
    btn.textContent = 'Copié !';
    setTimeout(() => btn.textContent = 'Copier', 2000);
  });
}