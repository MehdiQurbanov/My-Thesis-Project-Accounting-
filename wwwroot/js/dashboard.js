document.addEventListener("DOMContentLoaded", async function () {
    const token = localStorage.getItem("authToken");
    const errorMsg = document.getElementById("errorMsg");

    if (!token) {
        window.location.href = "index.html";
        return;
    }

    try {
        
        const enquiryRequest = {
            accountNumber: "1234567890"
        };

        const response = await fetch("http://localhost:8080/api/user/balanceEnquiry", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(enquiryRequest)
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById("balance").textContent = data.balance + " AZN";
        } else {
            errorMsg.textContent = data.message || "Balans tapılmadı.";
        }
    } catch (err) {
        console.error(err);
        errorMsg.textContent = "Xəta baş verdi.";
    }
});

function logout() {
    localStorage.removeItem("authToken");
    window.location.href = "index.html";
}