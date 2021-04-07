isLogin();

$("#searchTxt").keyup(()=>{
	const input = $("#searchTxt").val().trim();
	if(input === ''){
		$("#searchResult").html('');
		return;
	}
	searchPortfolio({
		keyword : input,
		page : 0,
		size : 10
	},(success)=>{
		success = success['content'];
		let innerHtml = ``;
		success.map(val=>{
			innerHtml += `
				<tr onclick="location.href='./portfolioDetail?seq=${val['id']}'" style="cursor:pointer;">
					<td>${val['title']}</td>
				</tr>
			`;
		});
		$("#searchResult").html(innerHtml);
	},(error)=>{
	});
});

function isLogin(){
	const token = localStorage.getItem('access_token');
	if(token === null || token === 'undefined' || token === undefined){
		$("#menu_login").show();
		$("#menu_logout").hide();
		$("#menu_mypage").hide();
		$("#searchTxt").hide();
	}else{
		tokenCheck(token,(success)=>{
		},(error)=>{
			refreshToken((res)=>{
			});
		});
		$("#searchTxt").show();
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

function formatDate(date){
	date = new Date(date);
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);

    return year + "-" + month + "-" + day;
}

$("#notLoginBtn").click(()=>{
	location.href = './login';
})

$("#portfolioNotFoundBtn").click(()=>{
	location.href = './index';
});
