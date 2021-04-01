isLogin();

function isLogin(){
	const token = localStorage.getItem('access_token');
	if(token === null || token === 'undefined' || token === undefined){
		$("#menu_login").show();
		$("#menu_logout").hide();
		$("#menu_mypage").hide();
	}else{
		tokenCheck(token,(success)=>{
		},(error)=>{
			refreshToken((res)=>{
			});
		});
		$("#menu_login").hide();
		$("#menu_logout").show();
		$("#menu_mypage").show();
	}
}

function moveRegisterPortfolio(){
	const token = localStorage.getItem('access_token');
	if(token === null || token === 'undefined' || token === undefined){
		$("#notLoginModal").modal();
	}else{
		location.href = './registerPortfolio';
	}
}

function moveMyPortfolio(){
	const token = localStorage.getItem('access_token');
	if(token === null || token === 'undefined' || token === undefined){
		$("#notLoginModal").modal();
	}else{
		location.href = './my-portfolioList';
	}
}

function get_query(){
    var url = document.location.href;
    var qs = url.substring(url.indexOf('?') + 1).split('&');
    for(var i = 0, result = {}; i < qs.length; i++){
        qs[i] = qs[i].split('=');
        result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    }
    return result;
}

$("#notLoginBtn").click(()=>{
	location.href = './login';
})

$("#portfolioNotFoundBtn").click(()=>{
	location.href = './index';
});
