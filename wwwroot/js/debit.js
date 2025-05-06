document.getElementById("debitForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    const msg = document.getElementById("debitMsg");

    if (!token) {
        window.location.href = "index.html";
        return;
    }

    const accountNumber = document.getElementById("accountNumber").value.trim();
    const amount = parseFloat(document.getElementById("amount").value);
    const description = document.getElementById("description").value.trim();

    const request = {
        accountNumber: accountNumber,
        amount: amount,
        description: description
    };

    try {
        const response = await fetch("http://localhost:8080/api/user/debit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(request)
        });

        const data = await response.json();

        if (response.ok) {
            msg.style.color = "green";
            msg.textContent = "Pul uğurla çıxarıldı.";
        } else {
            msg.style.color = "red";
            msg.textContent = data.message || "Çıxarış zamanı xəta baş verdi.";
        }
    } catch (err) {
        console.error(err);
        msg.style.color = "red";
        msg.textContent = "Serverlə əlaqə qurulmadı.";
    }
});