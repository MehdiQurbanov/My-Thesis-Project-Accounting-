document.getElementById("statementForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    const msg = document.getElementById("statementMsg");
    const table = document.getElementById("transactionTable");
    const tbody = table.querySelector("tbody");

    if (!token) {
        window.location.href = "index.html";
        return;
    }

    const accountNumber = document.getElementById("accountNumber").value.trim();
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    const url = `http://localhost:8080/bank-statement?accountNumber=${encodeURIComponent(accountNumber)}&startDate=${startDate}&endDate=${endDate}`;

    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const data = await response.json();
            msg.style.color = "red";
            msg.textContent = data.message || "Xəta baş verdi.";
            table.style.display = "none";
            return;
        }

        const transactions = await response.json();
        if (transactions.length === 0) {
            msg.style.color = "orange";
            msg.textContent = "Bu tarix aralığında heç bir əməliyyat yoxdur.";
            table.style.display = "none";
            return;
        }

        msg.textContent = "";
        tbody.innerHTML = "";
        transactions.forEach(tx => {
            const row = document.createElement("tr");
            row.innerHTML = `
          <td>${tx.transactionDate}</td>
          <td>${tx.amount}</td>
          <td>${tx.description || "-"}</td>
          <td>${tx.transactionType}</td>
        `;
            tbody.appendChild(row);
        });

        table.style.display = "table";
    } catch (err) {
        console.error(err);
        msg.style.color = "red";
        msg.textContent = "Serverlə əlaqə qurulmadı.";
        table.style.display = "none";
    }
});