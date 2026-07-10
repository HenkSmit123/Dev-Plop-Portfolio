document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
    const submitBtn = document.getElementById('submitBtn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Voorkom dat de pagina ververst

            // Geef visuele feedback dat het formulier verzendt
            submitBtn.disabled = true;
            submitBtn.textContent = "Verzenden...";
            formFeedback.textContent = "";

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formFeedback.style.color = "#2ed573";
                    formFeedback.textContent = "✅ Bedankt! Je bericht is succesvol verzonden. Ik neem snel contact op.";
                    contactForm.reset(); // Maak het formulier leeg bij succes
                } else {
                    const data = await response.json();
                    if (data.hasOwnProperty('errors')) {
                        formFeedback.textContent = "❌ " + data['errors'].map(error => error.message).join(', ');
                    } else {
                        formFeedback.textContent = "❌ Oeps! Er ging iets mis bij het verzenden.";
                    }
                    formFeedback.style.color = "#ff4757";
                }
            } catch (error) {
                formFeedback.style.color = "#ff4757";
                formFeedback.textContent = "❌ Netwerkfout. Controleer je internetverbinding.";
            } finally {
                // Zet de knop altijd weer terug in de originele staat
                submitBtn.disabled = false;
                submitBtn.textContent = "Verstuur Bericht";
            }
        });
    }
});