let qr_code = document.getElementById('qr_code');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');
    
function generateQRCode() {
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}
