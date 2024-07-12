document.getElementById('generate').addEventListener('click', function() {
    var text = document.getElementById('text').value;
    if (text.trim()) {
        var largeQrcodeContainer = document.getElementById('large-qrcode');
        largeQrcodeContainer.innerHTML = '';
        new QRCode(largeQrcodeContainer, {
            text: text,
            width: 256,
            height: 256,
        });

        document.getElementById('overlay').style.display = 'flex';    
    } else {
        alert('Please enter some text');
    }
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});