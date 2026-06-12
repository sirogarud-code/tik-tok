const greeting = document.getElementById('greeting');

if (greeting) {
  const hour = new Date().getHours();
  const greetingText = hour < 6
    ? 'Нічний режим: переходь у Telegram або Instagram.'
    : hour < 12
      ? 'Доброго ранку! Куди йдемо сьогодні?'
      : hour < 18
        ? 'Гарного дня! Обери свій канал.'
        : 'Вечірній час — дай знати, куди перейти.';

  greeting.textContent = greetingText;
}
