const RE_ATTENTION_API_URL = "http://localhost:8081/api/v1/re-attention";

function findAllReAttention(search,callback,errorCallback){
	$.ajax({
		url : RE_ATTENTION_API_URL,
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

function registerReAttention(attention,callback,errorCallback){
	refreshToken(function(){
		const token = localStorage.getItem('access_token');
		$.ajax({
			url : RE_ATTENTION_API_URL,
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

function updateReAttention(attention,callback,errorCallback){
	refreshToken(function(){
		const token = localStorage.getItem('access_token');
		$.ajax({
			url : RE_ATTENTION_API_URL,
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

function deleteReAttention(attention,callback,errorCallback){
	const token = localStorage.getItem('access_token');
	$.ajax({
		url : RE_ATTENTION_API_URL,
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

