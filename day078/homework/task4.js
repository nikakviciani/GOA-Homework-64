// 5) შექმენით ღილაკი Logout რომელზე დაჭერისას localStorage გასუფთავდება removeItem ან clear-ით და ეკრანზე გამოჩნდება შეტყობინება თქვენ გახვედით სისტემიდან
let logoutButton = document.createElement('button');
logoutButton.textContent = 'Logout';        
let message = document.createElement('p');  
document.body.appendChild(logoutButton);
document.body.appendChild(message);
logoutButton.addEventListener('click', () => {      
    localStorage.clear();
    message.textContent = 'თქვენ გახვედით სისტემიდან';
});         
