document.getElementById('viewEntriesButton').onclick = function() {
    const userID = document.getElementById('userID').value;
    const userIDNumber = Number(userID); // Parsing the input to a number

    if (isNaN(userIDNumber) || userIDNumber < 0 || userIDNumber > 1) {
        alert('Invalid user ID!');
        return;
    }


    const newURL = '/list/?user=' + userID;
    window.location.href = newURL;
}