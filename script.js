document.addEventListener('DOMContentLoaded', function() {
const form = document.querySelector('.signup-form');
function handleSubmit(event) {
        event.preventDefault(); 
 const email = form.querySelector('input[type="email"]').value;
console.log('Email submitted:', email);

        form.querySelector('input[type="email"]').value = '';

        
        showResponseModal();
    }
form.addEventListener('submit', handleSubmit);
function showResponseModal() {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);

        
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>You're all set!</p>
            </div>
        `;
        overlay.appendChild(modal);
const closeButton = modal.querySelector('.close');
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay || e.target === closeButton) {
                document.body.removeChild(overlay);
            }
        });
    }
});
