function sendEmail() {
    alert("ok")
	Email.send({
	Host: "smtp.gmail.com",
	Username : "Hrishitosh",
	Password : "#r18#1@Prern@",
	To : 'thakurhrishitosh@gmail.com',
	From : "thakurhrishi2003@gmail.com",
	Subject : "email subject",
	Body : "email body",
	}).then(
		message => alert("mail sent successfully")
	);
}