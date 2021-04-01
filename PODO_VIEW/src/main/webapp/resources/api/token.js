const TOKEN_API_URL = "http://localhost:8081/oauth";

function accessToken(user,success,error){
	$.ajax({
		url : TOKEN_API_URL + "/token",
		method : "POST",
		data : {
			username : user['username'],
			password : user['password'],
			grant_type : "password"
		},
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Authorization", "Basic cG9kbzpwb2Rv");
		},
		success : function(res){
			localStorage.setItem('access_token', res['access_token']);
			localStorage.setItem('token_type', res['token_type']);
			localStorage.setItem('refresh_token', res['refresh_token']);
			localStorage.setItem('expires_in', res['expires_in']);
			localStorage.setItem('email', user['username']);
			success();
		},
		error : function(res){
			error();
		}
	})
}

function tokenCheck(token,success,error){
	$.ajax({
		url : TOKEN_API_URL + "/check_token",
		method : "POST",
		data : {
			token : token
		},
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Authorization", "Basic cG9kbzpwb2Rv");
		},
		success : function(res){
			success(res);
		},
		error : function(res){
			error(res);
		}
	})
}

function refreshToken(callback){
	const refresh_token = localStorage.getItem('refresh_token');
	$.ajax({
		url : TOKEN_API_URL + "/token",
		method : "POST",
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Authorization",
					"Basic cG9kbzpwb2Rv");
		},
		data : {
			grant_type : "refresh_token",
			refresh_token : refresh_token
		},
		success : function(res){
			localStorage.setItem('access_token', res['access_token']);
			localStorage.setItem('token_type', res['token_type']);
			localStorage.setItem('refresh_token', res['refresh_token']);
			localStorage.setItem('expires_in', res['expires_in']);
			callback(res);
		},
		error : function(res){
		}
	})
}

function logout(){
	localStorage.setItem('access_token',undefined);
	localStorage.setItem('token_type',undefined);
	localStorage.setItem('refresh_token',undefined);
	localStorage.setItem('expires_in',undefined);
	localStorage.setItem('email',undefined);
	location.href='./index';
}