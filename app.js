function loanAmount(){
    var customerName = document.getElementById("customerName").value;
    var phoneNumber = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var proof = document.getElementById("proof").value;
    var loanAmount = document.getElementById("loanamount").value;

    alert(`${customerName} \n ${phoneNumber} \n ${email} \n ${proof} \n ${loanAmount}`);

       
}

function computeLoan(){
	var amount = document.getElementById('amount').value;
	var interest_rate = document.getElementById('interest_rate').value;
	var months = document.getElementById('months').value;
	var interest = (amount * (interest_rate * .01)) / months;
	var payment = ((amount / months) + interest).toFixed(2);
	payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;
}



var classGold = document.getElementById('goldClass');
var classSilver = document.getElementById('silverClass');


function bookTicket(){
    var customerName = document.getElementById('customerName').value;
    var phoneNumber = document.getElementById("TelePhone").value;
    var email = document.getElementById('email').value;
    var movieName = document.getElementById("movieName").value;

    var ticket = document.getElementById("ticket").value;

    alert(customerName +  "\n" + phoneNumber + "\n" +  email + "\n" + movieName + "\n" + ticket);
}


classGold.addEventListener('click' , function(){
    document.getElementById("ticket").value = 300;

});
classSilver.addEventListener('click' , function(){
    document.getElementById("ticket").value = 250;

});