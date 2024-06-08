document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 

            
            const formData = new FormData(event.target);
            const data = {};
            formData.forEach((value, key) => data[key] = value);

            
            localStorage.setItem('appointmentData', JSON.stringify(data));

           
            window.location.href = 'appointmentconfirmation.html';
        });
    }

    const detailsContainer = document.getElementById('confirmation-details');
    if (detailsContainer) {
        const data = JSON.parse(localStorage.getItem('appointmentData'));
        if (data) {
            detailsContainer.innerHTML = `
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email Address:</strong> ${data.email_address}</p>
                <p><strong>Phone Number:</strong> ${data.phone}</p>
                <p><strong>Service:</strong> ${data.category}</p>
                <p><strong>Expert:</strong> ${data.expert}</p>
                <p><strong>Date:</strong> ${data.date}</p>
                <p><strong>Message:</strong> ${data.message}</p>
            `;
        }
    }
});