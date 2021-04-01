const MAJOR_API_URL = "http://localhost:8081/api/v1/major";

function findAllMajor(callback, errorCallback){
	$.ajax({
		url : MAJOR_API_URL,
		method : "GET",
		success : function(res){
			callback(res);
		},
		error : function(res){
			errorCallback(res);
		}
	})
}
