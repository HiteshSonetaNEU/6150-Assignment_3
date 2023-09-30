function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");
var studentN0=3;
var checkboxes1 = document.querySelectorAll("#myTable input[type='checkbox']");

document.addEventListener("DOMContentLoaded", function () {
  
  document.getElementById("button").disabled = true;
  document.getElementById("button").style.backgroundColor = "gray";
 
  function addNewStudent() {
    studentN0 +=1
    const table = document.getElementById("myTable");
    const rowCount = table.rows.length;

    const newRow = table.insertRow(rowCount - 1);
    newRow.innerHTML = `
      <td><input type="checkbox" /><br /><br /><img class="dropdown-button" src="down.png" width="25px" /></td>
      <td>Student ${studentN0}</td>
      <td>Teacher ${studentN0}</td>
      <td>Approved</td>
      <td>Fall</td>
      <td>TA</td>
      <td>${12345 + rowCount}</td>
      <td>100%</td>
    `;

    updateSubmitButtonState();

    alert(`Student ${studentN0} Record added successfully`);
    checkboxes2 = newRow.querySelectorAll("input[type='checkbox']");
    updateCheckboxState(checkboxes2);
  }

  function updateSubmitButtonState() {
    const checkboxes = document.querySelectorAll("#myTable input[type='checkbox']");
    const submitButton = document.getElementById("button");

    let anyChecked = false;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        anyChecked = true;
        return;
      }
    });

    if (anyChecked) {
      submitButton.disabled = false;
      submitButton.style.backgroundColor = "orange";      
      submitButton.style.border = "orange";
      const headers= document.getElementById("a")
      headers.style.display=""
      const headers1= document.getElementById("b")
      headers1.style.display=""
    } else {
      submitButton.disabled = true;
      submitButton.style.backgroundColor = "gray";
      const headers= document.getElementById("a")
      const headers1= document.getElementById("b")
      headers1.style.display="none"
      headers.style.display="none"
    }
  }

  document.getElementById("add").addEventListener("click", addNewStudent);
  
  function updateCheckboxState(checkboxes){
  checkboxes.forEach((checkbox) => {
    
    checkbox.addEventListener("change", function () {
      const row = this.parentElement.parentElement;
      row.style.backgroundColor = this.checked ? "yellow" : "";
      updateSubmitButtonState();

      
      if (this.checked) {
      
        const deleteButtonCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.className="newly"
        deleteButton.addEventListener("click", function () {
          const rowIndex = row.rowIndex;
          row.parentNode.removeChild(row);
          updateSubmitButtonState();
          alert(`Student ${rowIndex} Record deleted successfully`);
        });
        deleteButtonCell.appendChild(deleteButton);
        row.appendChild(deleteButtonCell);
        const editButtonCell = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.className="newly"
        editButton.addEventListener("click", function () {
          const studentName = row.cells[1].innerText;
          prompt(`what you want to edit in ${studentName}`);
          alert("changes done succesfully")
          
        });
        editButtonCell.appendChild(editButton);
        row.appendChild(editButtonCell);
      } else {
        row.removeChild(row.cells[row.cells.length - 1]);        
        row.removeChild(row.cells[row.cells.length - 1]);
      }
    });
  });
}
updateCheckboxState(checkboxes1);

  document.getElementById("button").addEventListener("click", function () {
    alert("Submit button clicked");
  });

  const dropdownButtons = document.querySelectorAll(".dropdown-button");
  dropdownButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const row = this.parentElement.parentElement;
      const dropdownRow = row.nextElementSibling;
      console.log("clicked!!")
      if (dropdownRow.style.display === "none" || dropdownRow.style.display === "") {
        dropdownRow.style.display = "table-row";
      } else {
        dropdownRow.style.display = "none";
      }
    });
  });
});
