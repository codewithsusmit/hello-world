const date = new Date();
const dateSection = document.getElementById("date");
dateSection.textContent = `Today is: ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
