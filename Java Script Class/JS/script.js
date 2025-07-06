

document.getElementById("userForm").addEventListener("submit", function(event) {
      event.preventDefault(); 

   
      const name = document.getElementById("name").value.trim();
      const id = document.getElementById("id").value.trim();
      const balance = document.getElementById("balance").value.trim();

      if (name && id && balance) {
       
        const tableBody = document.querySelector("#userTable tbody");
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
          <td>${name}</td>
          <td>${id}</td>
          <td>${balance}</td>
        `;

        
        tableBody.appendChild(newRow);

      
        document.getElementById("userForm").reset();
      } else {
        alert("Please fill all fields.");
      }
    });
