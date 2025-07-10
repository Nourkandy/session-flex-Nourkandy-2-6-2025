

// document.getElementById("userForm").addEventListener("submit", function(event) {
//       event.preventDefault(); 

   
//       const name = document.getElementById("name").value.trim();
//       const id = document.getElementById("id").value.trim();
//       const balance = document.getElementById("balance").value.trim();

//       if (name && id && balance) {
       
//         const tableBody = document.querySelector("#userTable tbody");
//         const newRow = document.createElement("tr");

//         newRow.innerHTML = `
//           <td>${name}</td>
//           <td>${id}</td>
//           <td>${balance}</td>
//         `;

        
//         tableBody.appendChild(newRow);

      
//         document.getElementById("userForm").reset();
//       } else {
//         alert("Please fill all fields.");
//       }
//     });




        var users = JSON.parse(localStorage.getItem('users')) || [];

        function displayUsers() {
            const list = document.getElementById("userList");
            list.innerHTML = "";
            users.forEach(user => {
                const li = document.createElement("li");
                li.textContent = `name: ${user.name}, ID: ${user.id}, balance: ${user.balance}`;
                list.appendChild(li);
            });
        }

        function addUser() {
            const name = document.getElementById("name").value;
            const id = document.getElementById("id").value;
            const balance = document.getElementById("balance").value;

            if (name && id && balance) {
                const newUser = { name, id, balance: parseFloat(balance) };
                users.push(newUser);

                localStorage.setItem('users', JSON.stringify(users));

            
                displayUsers();

                
                document.getElementById("name").value = "";
                document.getElementById("id").value = "";
                document.getElementById("balance").value = "";
            } else {
                alert("please enter your data");
            }
          }
        window.onload = displayUsers;
