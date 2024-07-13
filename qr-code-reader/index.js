document.getElementById("read").onclick = function() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = function(event) {
        var file = event.target.files[0];
        if (!file) {
            alert("No file selected.");
            return;
        }

        document.getElementById("loading").style.display = "block";
        
        var reader = new FileReader();
        reader.onload = function(e) {
            var img = new Image();
            img.onload = function() {
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                var code = jsQR(imageData.data, imageData.width, imageData.height);
                
                if (code) {
                    document.getElementById("output").innerText = code.data;
                } else {
                    alert("No QR code found.");
                }
                document.getElementById("loading").style.display = "none";
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };
    input.click();
};
