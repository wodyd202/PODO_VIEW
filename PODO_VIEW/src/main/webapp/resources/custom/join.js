findAllMajor((success)=>{
	let innerHtml = ``;
	success.map(val=>{
		innerHtml += `<option>${val['value']}</option>`;
	})
	$("#major").html(innerHtml);
},(error)=>{
});

$("#registerBtn").click(()=>{
	let email = $("#email").val().trim();
	if($("#email_last").val() !== '직접 입력'){
		email += $("#email_last").val();
	}
	const password = $("#password").val().trim();
	const passwordChk = $("#passwordChk").val().trim();
	
	if(!isEmail(email)){
		showMsg('email_validation','email','red','- 이메일 형식으로 입력해주세요.');
		return;
	}
	
	if(password !== passwordChk){
		showMsg('password_validation','password','red','- 비밀번호와 비밀번호 확인란이 일치하지 않습니다.');
		return;
	}
	
	$("#registerModal").modal();
});

$("#email").blur(()=>{
	dupChkHandler();
});

$("#email_last").change(()=>{
	dupChkHandler();
});

$("#registerSuccessBtn").click(()=>{
	let email = $("#email").val().trim();
	if($("#email_last").val() !== '직접 입력'){
		email += $("#email_last").val();
	}
	
	const password = $("#password").val().trim();
	const passwordChk = $("#passwordChk").val().trim();
	const major = $("#major").val();
	const userType = $("#userType").val();
	
	const user = { 
		email : email,
		password : password,
		major : major,
		userType : userType
	};
	registerUser(user,(success)=>{
		$("#registerSuccessModal").modal();
	},(error)=>{
		showMsg(error['responseJSON']['field'] + '_validation',error['responseJSON']['field'],'red','- ' + error['responseJSON']['msg'] + ".");
	});
});

$("#registerSuccessResultBtn").click(()=>{
	location.href='./login';
});

function dupChkHandler(){
	let email = $("#email").val().trim();
	if($("#email_last").val() !== '직접 입력'){
		email += $("#email_last").val();
	}
	if(email === ''){
		showMsg('email_validation','email','red','- 이메일을 입력해주세요.');
		return;
	}
	dupChkUser(email,(success)=>{
		showMsg('email_validation','','green','- 사용 가능한 이메일입니다.');
	},(error)=>{
		showMsg('email_validation','email','red','- 중복된 이메일이 존재합니다. 다른 이메일을 입력해주세요.');
	});
}

function isEmail(asValue) {
	var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	return regExp.test(asValue); // 형식에 맞는 경우 true 리턴	
}