$("#loginBtn").click(()=>{
	let email = $("#email").val().trim();
	if($("#email_last").val() !== '직접 입력'){
		email += $("#email_last").val();
	}
	const password = $("#password").val().trim();
	
	if(email === ''){
		showMsg('email_validation','email','red','- 이메일을 입력해주세요.');
		return;
	}

	if(!isEmail(email)){
		showMsg('email_validation','email','red','- 이메일 형식으로 입력해주세요.');
		return;
	}
	
	if(password === ''){
		showMsg('password_validation','password','red','- 비밀번호를 입력해주세요.');
		return;
	}
	
	const user = {
		username : email,
		password : password
	};
	
	accessToken(user,(success)=>{
		location.href = './index';
	},(error)=>{
		$("#loginErrorModal").modal();
	});
});

function isEmail(asValue) {
	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴	
}