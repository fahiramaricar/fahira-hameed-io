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
});
