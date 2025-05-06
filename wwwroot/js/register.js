document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const msg = document.getElementById("registerMsg");

    const userRequest = {
        firstName: document.getElementById("firstName").value.trim(),
        lastName: document.getElementById("lastName").value.trim(),
        otherName: document.getElementById("otherName").value.trim(),
        gender: document.querySelector('input[name="gender"]:checked')?.value,
        address: document.getElementById("address").value.trim(),
        stateOfOrigin: document.getElementById("stateOfOrigin").value.trim(),
        email: document.getElementById("email").value.trim(),
        password: document.getElementById("password").value.trim(),
        phoneNumber: document.getElementById("phoneNumber").value.trim(),
        alternativePhoneNumber: document.getElementById("alternativePhoneNumber").value.trim()
    };

    if (!userRequest.gender) {
        msg.style.color = "red";
        msg.textContent = "Zəhmət olmasa cinsiyyət seçin.";
        return;
    }

    try {
        const response = await fetch("http://localhost:8080/api/user", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userRequest)
        });

        const data = await response.json();

        if (response.ok) {
            msg.style.color = "green";
            msg.textContent = "Qeydiyyat uğurludur. İndi giriş edə bilərsiniz.";
            setTimeout(() => window.location.href = "index.html", 2000);
        } else {
            msg.style.color = "red";
            msg.textContent = data.message || "Xəta baş verdi.";
        }
    } catch (err) {
        console.error(err);
        msg.style.color = "red";
        msg.textContent = "Serverlə əlaqə mümkün olmadı.";
    }
});

function goToLogin() {
    window.location.href = 'index.html';
}