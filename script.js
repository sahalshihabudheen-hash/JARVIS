
const inviteBtn = document.getElementById('invite-btn');
const popup = document.getElementById('invite-popup');
const closePopup = document.getElementById('close-popup');

inviteBtn.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});
