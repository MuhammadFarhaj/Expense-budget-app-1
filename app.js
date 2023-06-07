let expenses = [];
let totalAmount = 0;

const expCategory = document.getElementById("category");
const amountInput = document.getElementById("expense-input");
const dateInput = document.getElementById("date");
const doneButton = document.getElementById("done-btn");
const expensesTableBody = document.getElementById("expense-tbody");
const totalAmountVal = document.getElementById("Total Amount");


doneButton.addEventListener('click', function (){
  const category = expCategory.value;
  const amount = parseInt(amountInput.value);
  const date = dateInput.value;
  

  if (category === "" && date === "") {
    alert("Enter the Category and Date")
    return;
  }

  if (isNaN(amount) || amount <= 0){
    alert("Enter a Valid Amount")
    return;
  }

  if (date === "") {
    alert("Select the Date")
    return;
  }
  expenses.push({amount, category, date});

  totalAmount += amount;
  totalAmountVal.textContent = totalAmount;

  const newRow = expensesTableBody.insertRow();

  const amountCell = newRow.insertCell();
  const categoryCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', function (){
    expenses.splice(expenses.indexOf(expense), 1);

    totalAmount -= expense.amount;
    totalAmountVal.textContent = totalAmount;

    expensesTableBody.removeChild(newRow);

  });

  const expense = expenses[expenses.length - 1];
  amountCell.textContent = expense.amount;
  categoryCell.textContent = expense.category;
   dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);


});

for(const expense of expenses) {
  totalAmount += expense.amount;
  totalAmountVal.textContent = totalAmount;

  const newRow = expensesTableBody.insertRow();
  const amountCell = newRow.insertCell();
  const categoryCell = newRow.insertCell();
  const dateCell = newRow.insertCell();
  const deleteCell = newRow.insertCell();
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', function (){
    expenses.splice(expenses.indexOf(expense), 1);

    totalAmount -= expense.amount;
    totalAmountVal.textContent = totalAmount;

    expensesTableBody.removeChild(newRow);

  });
  amountCell.textContent = expense.amount;
  categoryCell.textContent = expense.category;
  dateCell.textContent = expense.date;
  deleteCell.appendChild(deleteBtn);
}
