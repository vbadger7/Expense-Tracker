const categories = ["Utilites", "Insurance","Housing", "Groceries", "Transportation", "Entertainment", "Other"];
// need to update values to take in user data from form
let yValues = [10, 10, 10, 10, 10,10,10];
let barColors = ["red","green","blue","orange","purple", "black", "yellow"];
new Chart("expensesChart", {
  type: "doughnut",
  data: {
    labels: categories,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
    }]
  },
  options: {
    title: {
      display: true,
      text: "Budget Tracker"
    }
  }
});