// Email form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.email-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            const email = this.querySelector('input[name="email"]').value;
            const button = this.querySelector('button');
            
            if (!email) {
                e.preventDefault();
                alert('Please enter your email address');
                return;
            }
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Please enter a valid email address');
                return;
            }
            
            // Show loading state
            const originalText = button.textContent;
            button.textContent = 'Subscribing...';
            button.disabled = true;
            
            // Allow form to submit normally to FormSubmit
            // FormSubmit will handle the redirect and email sending
        });
    }
});