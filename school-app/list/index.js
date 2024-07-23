function doConfetti(){
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 1 },
        
      });
}

window.onload = function() {
    const user = window.location.search.split('?user=')[1];
    fetch('http://localhost:3000/list/?user=' + user)
        .then(response => response.json())
        .then(data => {
            if(data.length === 0) {
                const noTasksElement = document.createElement('p');
                noTasksElement.textContent = "You finished! 🎉 No entries available.";
                doConfetti();
                document.getElementById('entries').appendChild(noTasksElement);
                return;
            }
            data.forEach(task => {
                const type = task.type.includes('homework') ? 'Homework' : 'Exam';
                const subject = task.subject;
                const description = task.description;
                const until = new Date(task.until).toLocaleDateString();

                const timeLeft = Math.round(((new Date(task.until).getTime() - Date.now()) / 1000 / 60 / 60 / 24) * 100) / 100;


                const entryElement = document.createElement('div');
                entryElement.className = 'entry';
                document.getElementById('entries').appendChild(entryElement);

                const typeElement = document.createElement('p');
                typeElement.textContent = (type.includes('Homework') ? '📝' : '📚') +  ' | Type: ' + type;
                entryElement.appendChild(typeElement);


                const subjectElement = document.createElement('p');
                subjectElement.textContent = '📚 | Subject: ' + subject;
                entryElement.appendChild(subjectElement);

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = '📋 | Description: ' + description;
                entryElement.appendChild(descriptionElement);

                const untilElement = document.createElement('p');
                untilElement.textContent = '🕒 | Until: ' + until;
                entryElement.appendChild(untilElement);

                const timeLeftElement = document.createElement('p');
                timeLeftElement.textContent = '⏳ | Time left: ' + timeLeft + " days / " + Math.round(timeLeft * 24) + " hours";
                entryElement.appendChild(timeLeftElement);

                const doneButton = document.createElement('button');
                doneButton.textContent = '✅ | Done!';
                doneButton.onclick = function() {
                    
                    fetch('http://localhost:3000/done', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: task.id
                        })
                    })
                        .then(() => {
                            entryElement.remove();
                            
                        });
                };
                entryElement.appendChild(doneButton);

            });
        });
};