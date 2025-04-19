const tg = window.Telegram.WebApp;

tg.expand(); // Полноэкранный режим

function sendAction(action) {
    document.getElementById("status").textContent = `Отправлено: ${action}`;
    tg.sendData(action); // Отправка данных обратно в Telegram-бот
}