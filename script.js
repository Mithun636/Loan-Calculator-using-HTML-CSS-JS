function calculateLoan() {
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    const principal = parseFloat(amount);
    const calculateInterest = parseFloat(interest) / 100 / 12;
    const calculatePayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculateInterest, calculatePayments);
    const monthly = (principal * x * calculateInterest) / (x - 1);

    if (isFinite(monthly)) {
        document.getElementById('monthly-payment').innerHTML = `Monthly Payment: ₹${monthly.toFixed(2)}`;
        document.getElementById('total-payment').innerHTML = `Total Payment: ₹${(monthly * calculatePayments).toFixed(2)}`;
        document.getElementById('total-interest').innerHTML = `Total Interest: ₹${((monthly * calculatePayments) - principal).toFixed(2)}`;
    } else {
        alert('Please check your input');
    }
}
