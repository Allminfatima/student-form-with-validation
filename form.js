document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('details-form');
    
    form.addEventListener('submit', (event) => {
        alert('Form submitted successfully!');
    });

    form.addEventListener('reset', (event) => {
        alert('Form has been reset.');
    });
});
