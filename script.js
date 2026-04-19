const qrInput = document.getElementById('qr-input');
const qrBtn = document.getElementById('generate-btn');
const qrContainer = document.getElementById('qrcode');

qrBtn.addEventListener('click', () => {
    const text = qrInput.value;

    if (text.trim() === "") {
        alert("يرجى إدخال نص أو رابط أولاً!");
        return;
    }

    // مسح الكود القديم إن وجد
    qrContainer.innerHTML = "";

    // توليد الكود الجديد
    new QRCode(qrContainer, {
        text: text,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});

