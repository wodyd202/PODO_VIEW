const PORTFOLIO_API_URL = "http://localhost:8081/api/v1/portfolio";

function countAllPortfolio(callback,errorCallback){
	$.ajax({
		url : PORTFOLIO_API_URL + "/count",
		method : "GET",
		success : function(res){
			callback(res);
		},
		error : function(res){
			errorCallback(res);
		}
	})
}

function portfolioDelete(portfolio,callback,errorCallback){
	refreshToken(function(){
		const token = localStorage.getItem('access_token');
		$.ajax({
			url : PORTFOLIO_API_URL,
			method : "DELETE",
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Authorization", "Bearer " + token);
			},
			data : JSON.stringify(portfolio),
			contentType : "application/json",
			success : function(res){
				callback(res);
			},
			error : function(res){
				errorCallBack(res);
			}
		})
	});
}

function portfolioRegister(portfolio,callback,errorCallBack){
	refreshToken(function(){
		const token = localStorage.getItem('access_token');
		$.ajax({
			url : PORTFOLIO_API_URL,
			method : "POST",
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Authorization", "Bearer " + token);
			},
			data : JSON.stringify(portfolio),
			contentType : "application/json",
			success : function(res){
				callback(res);
			},
			error : function(res){
				errorCallBack(res);
			}
		})
	});
}

function portfolioUpdate(portfolio,callback,errorCallback){
	refreshToken(function(){
		const token = localStorage.getItem('access_token');
		$.ajax({
			url : PORTFOLIO_API_URL,
			method : "PUT",
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Authorization", "Bearer " + token);
			},
			data : JSON.stringify(portfolio),
			contentType : "application/json",
			success : function(res){
				callback(res);
			},
			error : function(res){
				errorCallBack(res);
			}
		})
	});
}

function findAllPortfolio(url,searchDTO, callback, errorCallback){
	const token = localStorage.getItem('access_token');
	if(token === 'undefined' || token === undefined || token === null){
		$.ajax({
			url : PORTFOLIO_API_URL + "/" + url,
			method : "GET",
			data : searchDTO,
			success : function(res){
				callback(res);
			},
			error : function(res){
				errorCallback(res);
			}
		})
	}else{
		$.ajax({
			url : PORTFOLIO_API_URL + "/" + url,
			method : "GET",
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Authorization", "Bearer " + token);
			},
			data : searchDTO,
			success : function(res){
				callback(res);
			},
			error : function(res){
				errorCallback(res);
			}
		})
	}
}

function findByIdPortfolio(url,id,callback,errorCallback){
	const token = localStorage.getItem('access_token');
	if(token === 'undefined' || token === undefined || token === null){
		$.ajax({
			url : PORTFOLIO_API_URL + url,
			method : "GET",
			data : {
				id : id
			},
			success : function(res){
				callback(res);
			},
			error : function(res){
				errorCallback(res);
			}
		})
	}else{
		$.ajax({
			url : PORTFOLIO_API_URL + url,
			method : "GET",
			beforeSend : function(xhr) {
				xhr.setRequestHeader("Authorization", "Bearer " + token);
			},
			data : {
				id : id
			},
			success : function(res){
				callback(res);
			},
			error : function(res){
				errorCallback(res);
			}
		})
	}
}

