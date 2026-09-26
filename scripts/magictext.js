/* Минимальный JS: разбиваем текст на буквы-обёртки.
     Всё остальное — чистый CSS (волна, свечение, качание). */
document.querySelectorAll(".magic-text").forEach((el) => {
  const text = el.textContent;

  // Оригинальный текст — в aria-label, чтобы скринридеры читали его целиком
  el.setAttribute("aria-label", text);
  el.textContent = "";

  [...text].forEach((ch, i) => {
    const s = document.createElement("span");
    s.className = "magic-letter";
    // Пробел оставляем реальным, но неразрывным, чтобы inline-block его не съел
    s.textContent = ch === " " ? "\u00A0" : ch;
    // Сдвиг по фазе — так вдоль слова бежит волна
    s.style.animationDelay = i * 0.07 + "s";
    el.appendChild(s);
  });
});
