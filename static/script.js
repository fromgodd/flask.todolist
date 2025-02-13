// Function to Show Notifications
function showNotification(message, type) {
    let notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.innerText = message;

    document.body.appendChild(notification);
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Handle Delete Animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            let taskCard = button.closest('.task-card');
            taskCard.style.animation = 'fadeOut 0.5s forwards';

            setTimeout(() => {
                window.location.href = button.href;
            }, 500);
        });
    });
});
