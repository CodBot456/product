const generateBtn = document.getElementById(generate);
const dawnloadBtn = document.getElementById(dawnload);
function generateQRCode() {
    const text = document.getElementById('text-url').value.trim();
    if (!text) {
        alert("Введите текст");
        return;
    }
    const size = parseInt(document.querySelector("input[name='qr-size']:checked").value);
    const canvas = document.getElementById('qr_code');
    const ctx = canvas.getContext('2d');

    canvas.width = size;
    canvas.height = size;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const qr = new QRious({
        level: 'H',
        size: size,
        value: text
    });

    const img = new Image();
    img.src = qr.toDataURL();

    img.onload = () => {
        ctx.drawImage(img, 0, 0, size, size)
    };
}

// generateBtn.addEventListener('click', generateQRCode());