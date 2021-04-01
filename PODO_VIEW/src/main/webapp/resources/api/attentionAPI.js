const ATTENTION_API_URL = "http://localhost:8081/api/v1/attention";

function findAllAttention(search,callback,errorCallback){
	$.ajax({
		url : ATTENTION_API_URL,
		method : "GET",
		data : search,
		success : function(res){
			callback(res);
		},
		error : function(res){
			errorCallback(res);
		}
	})
}

function registerAttention(attention,callback,errorCallback){
	refreshToken(function(){
		const token = localStorage.getItem('access_token');
		$.ajax({
			url : ATTENTION_API_URL,
			method : "POST",
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Authorization", "Bearer " + token);
			},
			data : JSON.stringify(attention),
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

function updateAttention(attention,callback,errorCallback){
	refreshToken(function(){
		const token = localStorage.getItem('access_token');
		$.ajax({
			url : ATTENTION_API_URL,
			method : "PUT",
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Authorization", "Bearer " + token);
			},
			data : JSON.stringify(attention),
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

function deleteAttention(attention,callback,errorCallback){
	const token = localStorage.getItem('access_token');
	$.ajax({
		url : ATTENTION_API_URL,
		method : "DELETE",
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Authorization", "Bearer " + token);
		},
		data : JSON.stringify(attention),
		contentType : "application/json",
		success : function(res){
			callback(res);
		},
		error : function(res){
			errorCallback(res);
		}
	})
}

