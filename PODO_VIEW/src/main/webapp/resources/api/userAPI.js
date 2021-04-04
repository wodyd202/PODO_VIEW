const USER_API_URL = "http://localhost:8081/api/v1/user";

function countAllUser(callback,errorCallback){
	$.ajax({
		url : USER_API_URL + "/count",
		method : "GET",
		success : function(res){
			callback(res);
		},
		error : function(res){
			errorCallback(res);
		}
	})
}

function registerUser(user, callback, errorCallback){
	$.ajax({
		url : USER_API_URL,
		method : "POST",
		data : JSON.stringify(user),
		contentType : "application/json",
		success : function(res){
			callback(res);
		},
		error : function(res){
			errorCallback(res);
		}
	})
}

function dupChkUser(user,callback,errorCallback){
	$.ajax({
		url : USER_API_URL + "/is-dup",
		method : "GET",
		data : {
			email : user
		},
		success : function(res){
			callback(res);
		},
		error : function(res){
			errorCallback(res);
		}
	})
}