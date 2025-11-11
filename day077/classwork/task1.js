// 1) შექმენით ფორმა, სადაც მომხმარებელი შეიყვანს სრულ სახელს, ელფოსტას და ტელეფონის ნომერს. ფორმის გაგზავნისას ეს ინფორმაცია დაემატოს ქვემოთ არსებულ  ცხრილში ახალ რიგად. გამოიყენეთ JavaScript-ში შექმნილი container და presentational ფუნქციები, რომლებსაც ექნებათ განსხვავებული დანიშნულება, container  ფუნქცია მოამზადებს მონაცემებს და შექმნის tr ელემენტს, ხოლო presentational ფუნქცია დაამატებს მას ცხრილში. კომენტარებით ახსენით თითოეული ფუნქციის როლი
    function createUserRow(name, email, phone) {
      const tr = document.createElement('tr');
      const nameTd = document.createElement('td');
      const emailTd = document.createElement('td');
      const phoneTd = document.createElement('td');
      nameTd.textContent = name;
      emailTd.textContent = email;
      phoneTd.textContent = phone;
      tr.appendChild(nameTd);
      tr.appendChild(emailTd);
      tr.appendChild(phoneTd);
      return tr;
    }

    function addRowToTable(trElement) {
      const tableBody = document.getElementById('userTableBody');
      tableBody.appendChild(trElement);
    }

    document.getElementById('userForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const newRow = createUserRow(name, email, phone);
      addRowToTable(newRow);
      e.target.reset();
    });