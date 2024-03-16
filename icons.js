function call(){
confirm("For more details contact us on +9234-564345");  
}

function shop(){
    confirm("for shopping visit our location or buy online");
}
$(function(){
    $.scrollUp({
    });
   });
   
   let count = 0;
  
   // Function to update the visitor count
   function updateVisitorCount() {
       count++;
       document.getElementById("visitorCount").innerText = `Total Visitors: ${count}`;
   }

   // Simulate updating the count every 3 seconds
   setInterval(updateVisitorCount, 3000);



   function addContact() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    var table = document.querySelector('table tbody');
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = phone;
    cell4.innerHTML = '<button onclick="removeContact(this)">Remove</button>';

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  }

  function removeContact(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
  
// ticker

function updateTicker() {
    var now = new Date();
    var dateStr = now.toDateString();
    var timeStr = now.toLocaleTimeString();

    var tickerContent = document.getElementById('tickerContent');
    tickerContent.innerHTML = dateStr + ' ' + timeStr;
  }

  // Update the ticker every second
  setInterval(updateTicker, 1000);

  // Initial update
  updateTicker();