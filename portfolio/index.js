document.getElementById("cv").onclick = function(){
    window.open("https://example.com");
}

document.getElementById("contact-submit").onclick = function(){
    const name = document.getElementById("contact-name");
    const email = document.getElementById("contact-email");
    const message = document.getElementById("contact-message");

    // Checking validity of fields

    let isEmailValid = email.value.includes("@") && email.value.includes(".");

    if(name.value === "" || email.value === "" || message.value === "" || !isEmailValid){
        alert("Message not sent! Check if all fields are filled and if the email is valid.");
        return;
    }

    // Contact API

    fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            message: message.value
        })
    }).then (response => {
        if(response.ok){
            alert("Message sent successfully!");
        } else {
            alert("Failed to send message. Try again later.");
        }
    }).catch(error => {
        alert("Failed to send message. Try again later.");
    });

    // REsetting form fields

    name.value = "";
    email.value = "";
    message.value = "";

}