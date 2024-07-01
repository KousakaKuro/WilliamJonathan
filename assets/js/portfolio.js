document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.learn-more-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const moreText = this.previousElementSibling.querySelector('.more');
            const dots = this.previousElementSibling.querySelector('.dots');
            
            if (moreText.style.display === 'none' || moreText.style.display === '') {
                moreText.style.display = 'inline';
                dots.style.display = 'none';
                this.textContent = 'Show Less';
            } else {
                moreText.style.display = 'none';
                dots.style.display = 'inline';
                this.textContent = 'Learn More';
            }
        });
    });
});
