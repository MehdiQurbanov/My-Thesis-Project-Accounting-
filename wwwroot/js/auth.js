document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");

    const loginDto = {
        email: username,
        password: password
    };

    try {
        const response = await fetch("http://localhost:8080/api/user/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginDto)
        });

        const data = await response.json();

        if (response.ok) {
            localStorage.setItem("authToken", data.responseMessage);
            window.location.href = "dashboard.html";
        } else {
            errorMsg.textContent = data.message || "Giriş uğursuz oldu.";
        }
    } catch (err) {
        console.error(err);
        errorMsg.textContent = "Serverlə əlaqə qurulmadı.";
    }
});

function goToRegistration() {
    window.location.href = 'register.html';
}