let qr_code = document.getElementById('qr_code');
let qrImage = document.getElementById('qrImage');
let qrInput = document.getElementById('qrInput');
    
function generateQRCode() {
    if(qrInput.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value;

        qr_code.classList.add('show-img');
    }else{
        qrInput.classList.add('error');
        setTimeout(() => {
            qrInput.classList.remove('error');
        }, 1000);
    }
}
