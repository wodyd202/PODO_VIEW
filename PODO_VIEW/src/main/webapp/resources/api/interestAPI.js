const INTEREST_API_URL = "http://localhost:8081/api/v1/interest";

function findInterest(search,callback,errorCallback){
	const token = localStorage.getItem('access_token');
	$.ajax({
		url : INTEREST_API_URL,
		method : "GET",
		data : search,
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Authorization", "Bearer " + token);
		},
		success : function(res){
			callback(res);
		},
		error : function(res){
			errorCallback(res);
		}
	})
}

function registerInterest(interest,callback,errorCallback){
	refreshToken(function(){
		const token = localStorage.getItem('access_token');
		$.ajax({
			url : INTEREST_API_URL,
			method : "POST",
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Authorization", "Bearer " + token);
			},
			data : JSON.stringify(interest),
			contentType : "application/json",
			success : function(res){
				callback(res);
			},
			error : function(res){
				errorCallback(res);
			}
		})
	});
}

function deleteInterest(interest,callback,errorCallback){
	const token = localStorage.getItem('access_token');
	$.ajax({
		url : INTEREST_API_URL,
		method : "DELETE",
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Authorization", "Bearer " + token);
		},
		data : JSON.stringify(interest),
		contentType : "application/json",
		success : function(res){
			callback(res);
		},
		error : function(res){
			errorCallback(res);
		}
	})
}

