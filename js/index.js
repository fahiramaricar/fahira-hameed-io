document.addEventListener("DOMContentLoaded", function() {
    // Adding footer with copyright information
    const today = new Date();
    const thisYear = today.getFullYear();

    const footer = document.querySelector('footer');
    const copyright = document.createElement('p');
    copyright.innerHTML = `&copy; ${thisYear} Fahira Hameed. All rights reserved.`;
    footer.appendChild(copyright);

    // List of skills
    const skills = ["JavaScript", "HTML", "CSS", "Pyhton", "SQL", "Tableau", "PowerBI", "Excel", "GitHub"];

    // Select the skills section and the unordered list within it
    const skillsSection = document.getElementById('Skills');
    const skillsList = skillsSection.querySelector('ul');

    // Iterate over the skills array and append each skill to the unordered list
    skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.innerText = skill;
        skillsList.appendChild(skillItem);
    });

    // Handle message form submission
    const messageForm = document.forms['leave_message'];
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the page from refreshing

        // Get form values
        const usersName = event.target.usersName.value;
        const usersEmail = event.target.usersEmail.value;
        const usersMessage = event.target.usersMessage.value;

        // Log values to the console
        console.log(usersName, usersEmail, usersMessage);

        // Select the messages section and the unordered list within it
        const messageSection = document.getElementById('messages');
        const messageList = messageSection.querySelector('ul');

        // Create a new list item for the message
        const newMessage = document.createElement('li');
        newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a><span>: ${usersMessage}</span>`;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.innerText = 'remove';
        removeButton.type = 'button';
        removeButton.addEventListener('click', function() {
            const entry = removeButton.parentNode;
            entry.remove();
        });

        // Append the remove button and the message to the list item
        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

        // Reset the form
        messageForm.reset();
    });
});



