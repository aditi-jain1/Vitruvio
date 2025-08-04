// Email form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.email-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const button = this.querySelector('button');
            
            if (!email) {
                alert('Please enter your email address');
                return;
            }
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Simulate form submission
            const originalText = button.textContent;
            button.textContent = 'Subscribing...';
            button.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for subscribing! We\'ll keep you updated.');
                this.reset();
                button.textContent = originalText;
                button.disabled = false;
            }, 1000);
        });
    }
});