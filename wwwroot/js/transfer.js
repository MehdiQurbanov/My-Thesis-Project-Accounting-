document.getElementById("transferForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    const msg = document.getElementById("transferMsg");

    if (!token) {
        window.location.href = "index.html";
        return;
    }

    const fromAccount = document.getElementById("fromAccount").value.trim();
    const toAccount = document.getElementById("toAccount").value.trim();
    const amount = parseFloat(document.getElementById("amount").value);
    const description = document.getElementById("description").value.trim();

    const transferRequest = {
        sourceAccountNumber: fromAccount,
        destinationAccountNumber: toAccount,
        amount: amount,
        description: description
    };

    try {
        const response = await fetch("http://localhost:8080/api/user/transfer", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(transferRequest)
        });

        const data = await response.json();

        if (response.ok) {
            msg.style.color = "green";
            msg.textContent = "Pul köçürməsi uğurla tamamlandı.";
        } else {
            msg.style.color = "red";
            msg.textContent = data.message || "Köçürmə zamanı xəta baş verdi.";
        }
    } catch (err) {
        console.error(err);
        msg.style.color = "red";
        msg.textContent = "Serverlə əlaqə qurulmadı.";
    }
});