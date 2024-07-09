document.getElementById("cv").onclick = function(){
    window.open("https://example.com");
}

document.getElementById("contact-submit").onclick = function(){
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const message = document.getElementById("contact-message").value;

    console.log(name, email, message);
}