// Initial available balance
let avail_balance = 24900;

// Function to handle balance inquiry
function balanceInquiry() {
    const balanceAmount = document.getElementById("balanceAmount");
    balanceAmount.innerText = avail_balance;
    showMainMenu();
}

// Function to handle money withdraw
function withdraw() {
    hideAllSections();
    document.getElementById("withdrawOptions").classList.remove("hidden");
}

// Function to handle withdrawal
function handleWithdraw(amount) {
    if (amount > avail_balance) {
        alert("Insufficient Balance!");
    } else {
        avail_balance -= amount;
        alert("Withdrawal Successful. New Balance: " + avail_balance + " USD");
    }
    showMainMenu();
}

// Function to handle money deposit
function depositMoney() {
    hideAllSections();
    document.getElementById("depositOptions").classList.remove("hidden");
}

// Function to handle deposit
function handleDeposit(amount) {
    avail_balance += amount;
    alert("Deposit Successful. New Balance: " + avail_balance + " USD");
    showMainMenu();
}

// Function to exit the program
function exitProgram() {
    hideAllSections();
    document.getElementById("thankYouMessage").classList.remove("hidden");
    setTimeout(function() {
        alert("Thank you for banking with us!");
    }, 500);
}

// Function to go back to the main menu
function goBackToMainMenu() {
    showMainMenu();
}

// Function to display the main menu
function showMainMenu() {
    hideAllSections();
    document.querySelector(".menu").classList.remove("hidden");
}

// Function to hide all sections
function hideAllSections() {
    document.querySelector(".menu").classList.add("hidden");
    document.getElementById("withdrawOptions").classList.add("hidden");
    document.getElementById("depositOptions").classList.add("hidden");
    document.getElementById("thankYouMessage").classList.add("hidden");
}

// Start the program by displaying the main menu
showMainMenu();
