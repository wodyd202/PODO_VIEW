let temporaryPortfolioList = [];
let showTemporary = false;
let selectTemporaryId = null;
getTemporaryPortfolio();

$("#temporaryCallBtn").click(()=>{
	if(temporaryPortfolioList.length === 0){
		$("#emptyTemporaryModal").modal();
		return;
	}
	$("#newPortfolioWriteModal").modal();
});

$("#deleteTemporaryBtn").click(()=>{
	const temporary = $("#temporaryList").val();
	if(temporary === ''){
		$("#temporaryDeleteTitle").text('임시 저장글이 존재하지 않습니다.');
		$("#temporaryDeleteStateModal").modal();
		return;
	}
	const portfolio = {
		id : temporary
	};
	portfolioDelete(portfolio,(success)=>{
		getTemporaryPortfolio();
		$("#temporaryDeleteTitle").text('임시 저장글을 정상적으로 삭제했습니다.');
		$("#temporaryDeleteStateModal").modal();
	},(error)=>{
		$("#temporaryDeleteTitle").text(error['responseJSON']['msg']);
		$("#temporaryDeleteStateModal").modal();
	});
});

$("#temporaryCallModalBtn").click(()=>{
	const temporary = $("#temporaryList").val();
	for(let i =0;i<temporaryPortfolioList.length;i++){
		if(temporaryPortfolioList[i]['id'] === temporary){
			showTemporary = true;
			selectTemporaryId = temporary;
			$("#portfolio_title").val(temporaryPortfolioList[i]['title']);
			$("#portfolio_header").val(temporaryPortfolioList[i]['header']);
			$("#summernote").summernote('code',temporaryPortfolioList[i]['content']);
			$("#newWriterPortfolioBtn").show();
			$("#deleteTemporaryConfrimBtn").hide();
			return;
		}
	}
});

$("#newWriterPortfolioBtn").click(()=>{
	showTemporary = false;
	selectTemporaryId = null;
	$("#portfolio_title").val('');
	$("#portfolio_header").val('');
	$("#summernote").summernote('code','');
	$("#newWriterPortfolioBtn").hide();
	$("#deleteTemporaryConfrimBtn").show();
});

$("#registerPortfolioBtn").click(()=>{
	const portfolio_title = $("#portfolio_title").val().trim();
	const portfolio_header = $("#portfolio_header").val().trim();
	const summernote = $("#summernote").summernote('isEmpty');
	if(portfolio_title === ''){
		showMsg('title_validation','portfolio_title','red','- 포트폴리오 제목을 입력해주세요.');
		return;
	}
	if(portfolio_header === ''){
		showMsg('header_validation','portfolio_header','red','- 포트폴리오 주제를 입력해주세요.');
		return;
	}
	if(summernote){
		showMsg('content_validation','summernote','red','- 포트폴리오 내용을 입력해주세요.');
		return;
	}
	$("#registerModal").modal();
});

$("#temporaryPortfolioBtn").click(()=>{
	const portfolio_title = $("#portfolio_title").val().trim();
	const portfolio_header = $("#portfolio_header").val().trim();
	const summernote = $("#summernote").summernote('isEmpty');
	if(portfolio_title === ''){
		showMsg('title_validation','portfolio_title','red','- 포트폴리오 제목을 입력해주세요.');
		return;
	}
	if(portfolio_header === ''){
		showMsg('header_validation','portfolio_header','red','- 포트폴리오 주제를 입력해주세요.');
		return;
	}
	if(summernote){
		showMsg('content_validation','summernote','red','- 포트폴리오 내용을 입력해주세요.');
		return;
	}
	$("#temporaryModal").modal();
});

$("#registerBtn").click(()=>{
	const portfolio_title = $("#portfolio_title").val().trim();
	const portfolio_header = $("#portfolio_header").val().trim();
	const summernote = $("#summernote").summernote('code');
	const showType = $("#showType").val();
	
	const portfolio = {
		title : portfolio_title,
		showType : showType,
		header : portfolio_header,
		content : summernote,
		state : 'CREATE'
	};
	
	if(showTemporary){
		portfolio['id'] = selectTemporaryId;
		portfolioUpdate(portfolio,(success)=>{
			$("#portfolioRegisterSuccessModal").modal();
		},(error)=>{
			showMsg(error['responseJSON']['field'] + '_validation',error['responseJSON']['field'],'red','- ' + error['responseJSON']['msg'] + ".");
		});
	}else{
		portfolioRegister(portfolio,(success)=>{
			$("#portfolioRegisterSuccessModal").modal();
		},(error)=>{
			showMsg(error['responseJSON']['field'] + '_validation',error['responseJSON']['field'],'red','- ' + error['responseJSON']['msg'] + ".");
		});
	}
});

$("#temporaryBtn").click(()=>{
	const portfolio_title = $("#portfolio_title").val().trim();
	const portfolio_header = $("#portfolio_header").val().trim();
	const summernote = $("#summernote").summernote('code');
	const showType = $("#showType").val();
	
	const portfolio = {
		title : portfolio_title,
		showType : showType,
		header : portfolio_header,
		content : summernote,
		state : 'TEMPORARY'
	};
	
	if(showTemporary){
		portfolio['id'] = selectTemporaryId;
		portfolioUpdate(portfolio,(success)=>{
			getTemporaryPortfolio();
			$("#temporaryRegisterSuccessModal").modal();
		},(error)=>{
			showMsg(error['responseJSON']['field'] + '_validation',error['responseJSON']['field'],'red','- ' + error['responseJSON']['msg'] + ".");
		});
	}else{
		portfolioRegister(portfolio,(success)=>{
			getTemporaryPortfolio();
			$("#temporaryRegisterSuccessModal").modal();
		},(error)=>{
			showMsg(error['responseJSON']['field'] + '_validation',error['responseJSON']['field'],'red','- ' + error['responseJSON']['msg'] + ".");
		});
	}
	$("#newWriterPortfolioBtn").click();
});

$("#confirmSuccessBtn").click(()=>{
	location.href = './index';
});

$("#type_1").click(function(){
	const type = "<center><h1 style=\"font-family:굴림; font-size:20px; font-weight:bold; text-decoration:underline;\">이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;력&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;서</h1></center><table cellspacing=\"1\"cellpadding=\"0\"border=\"1\" align=\"center\"><tbody><tr><td colspan=\"3\"rowspan=\"3\"width=\"120\"class=\"ti\">사진</td><td rowspan=\"2\"class=\"ti\"width=\"100\">성명</td><td rowspan=\"2\"width=\"150\"></td><td colspan=\"2\"class=\"ti\"width=\"200\">주민등록번호</td></tr><tr><td colspan=\"2\"></td></tr><tr><td colspan=\"4\"style=\"font-size:12px;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;생년월일&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;년&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;월&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;일생&nbsp;&nbsp;&nbsp;&nbsp;(만&nbsp;&nbsp;&nbsp;세)</td></tr><tr><td colspan=\"3\"class=\"ti\">주소</td><td colspan=\"4\"class=\"ti\"><br></td></tr><tr><td class=\"ti\"colspan=\"3\"rowspan=\"2\">연락처</td><td class=\"ti\">집</td><td></td><td class=\"ti\"rowspan=\"2\"width=\"100\">전자우편</td><td rowspan=\"2\"></td></tr><tr><td class=\"ti\">핸드폰</td><td></td></tr><tr><td class=\"ti\"colspan=\"3\">호적관계</td><td class=\"ti\">호주와의관계</td><td><br></td><td class=\"ti\"width=\"100\">호주성명</td><td></td></tr><tr><td colspan=\"3\"class=\"ti\">년월일</td><td colspan=\"3\"class=\"ti\">학력및자격증</td><td colspan=\"3\"class=\"ti\">발행처</td></tr><tr><td>년도</td><td>``</td><td>``</td><td colspan=\"3\">``</td><td>``</td></tr><tr><td><br></td><td><br></td><td><br></td><td colspan=\"3\"></td><td></td></tr><tr><td><br></td><td><br></td><td><br></td><td colspan=\"3\"></td><td></td></tr><tr><td><br></td><td><br></td><td><br></td><td colspan=\"3\"></td><td>&nbsp;</td></tr><tr><td><br></td><td><br></td><td><br></td><td colspan=\"3\"></td><td></td></tr><tr><td><br></td><td><br></td><td><br></td><td colspan=\"3\"></td><td></td></tr><tr><td><br></td><td><br></td><td><br></td><td colspan=\"3\"></td><td></td></tr><tr><td><br></td><td><br></td><td><br></td><td colspan=\"3\"></td><td></td></tr><tr><td><br></td><td><br></td><td><br></td><td colspan=\"3\"></td><td></td></tr><tr><td><br></td><td><br></td><td><br></td><td colspan=\"3\"></td><td></td></tr><tr><td><br></td><td><br></td><td><br></td><td colspan=\"3\"></td><td></td></tr><tr><td><br></td><td><br></td><td><br></td><td colspan=\"3\"></td><td></td></tr><tr><td><br></td><td><br></td><td><br></td><td colspan=\"3\"></td><td><br></td></tr></tbody></table>";
	$("#summernote").summernote('code', type);
});

$("#type_2").click(function(){
	const type = "<style>._h1,._ul{font-family:'Do Hyeon',sans-serif}._hr{margin:0 30px}.profile{background-color:#8977ad;background-color:white;border-top:10px solid#6b5892;border-bottom:10px solid#6b5892;border-radius:10px;margin:0 auto;width:900px;text-align:center}.profile-image{width:200px;height:200px;border-radius:75px;margin-top:-100px}._text{color:gray;text-align:left;font-size:1.2em;list-style:none}</style><div class=\"profile\"><br>사진<br><h1 class='_h1'>타이틀&nbsp;</h1><hr class='_hr'><ul class=\"_text _ul\"><li>내용</li></ul></div>";
	$("#summernote").summernote('code', type);
});

$("#type_3").click(function(){
	const type = "<div class=\"width-small\"style=\"margin: auto; width: 660px; color: rgb(51, 51, 51); font-family: sans-serif, Helvetica, &quot;Apple SD Gothic Neo&quot;; font-size: 16px; letter-spacing: -1px;\"><p class=\"text-center\"style=\"margin-bottom: 0px; line-height: 25.6px; padding-bottom: 50px; color: rgb(0, 0, 0);\"><br></p><p class=\"text-center\"style=\"margin-bottom: 0px; line-height: 25.6px; padding-bottom: 50px; color: rgb(0, 0, 0);\">사진</p><p class=\"text-center\"style=\"margin-bottom: 0px; line-height: 25.6px; padding-bottom: 50px; color: rgb(0, 0, 0);\">우리는일에서다쓰고남은잉여의몫을누리기위해삶을살고있는것이아닙니다</p><h3 class=\"doc-title2\"style=\"margin-bottom: 0px; padding-bottom: 10px; font-family: &quot;NotoSans Regular&quot;; font-size: 20px;\">지금여러분에게일이란무엇인가요?</h3><p style=\"margin-bottom: 0px; padding-bottom: 10px; font-family: &quot;NotoSans Regular&quot;; font-size: 20px;\"><br></p><div class=\"row\"style=\"justify-content: center !important;\"><div class=\"item item1\"style=\"flex: 0 0 50%; max-width: 50%; padding-right: 20px;\"><p class=\"text-justify\"style=\"margin-bottom: 0px; line-height: 24px;\">내용1</p><p class=\"text-justify\"style=\"margin-bottom: 0px; line-height: 24px;\"><br></p><p class=\"text-justify\"style=\"margin-bottom: 0px; line-height: 24px;\">내용3</p></div><div class=\"item item2\"style=\"flex: 0 0 50%; max-width: 50%; padding-left: 20px;\"><p class=\"text-justify\"style=\"margin-bottom: 0px; line-height: 24px;\">내용2</p><p class=\"text-justify\"style=\"margin-bottom: 0px; line-height: 24px;\"><br></p><p class=\"text-justify\"style=\"margin-bottom: 0px; line-height: 24px;\">내용4</p></div></div></div>";
	$("#summernote").summernote('code', type);
});

$("#type_4").click(function(){
	const type = "<style>._h1,._ul{font-family:'Do Hyeon',sans-serif}._hr{margin:0 30px}.profile{background-color:#8977ad;background-color:white;border-top:10px solid#6b5892;border-bottom:10px solid#6b5892;border-radius:10px;margin:0 auto;width:900px;text-align:center}.profile-image{width:200px;height:200px;border-radius:75px;margin-top:-100px}._text{color:gray;text-align:left;font-size:1.2em;list-style:none}</style><div class=\"profile\"><br>사진<br><h1 class='_h1'>타이틀&nbsp;</h1><hr class='_hr'><ul class=\"_text _ul\"><li>내용</li></ul></div>";
	$("#summernote").summernote('code', type);
});

$("#type_5").click(function(){
	const type = "<h2 style=\"margin-bottom: 0.5rem; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\">TITLE HEADING</h2><h5 style=\"margin-bottom: 0.5rem; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\">Title description, Dec 7, 2017</h5><div class=\"fakeimg\" style=\"height: 200px; background: rgb(170, 170, 170); color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\">Fake Image</div><p style=\"margin-bottom: 1rem; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\">Some text..</p><p style=\"margin-bottom: 1rem; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\">Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p><p><br style=\"color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\"></p><h2 style=\"margin-bottom: 0.5rem; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\">TITLE HEADING</h2><h5 style=\"margin-bottom: 0.5rem; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\">Title description, Sep 2, 2017</h5><div class=\"fakeimg\" style=\"height: 200px; background: rgb(170, 170, 170); color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\">Fake Image</div><p style=\"margin-bottom: 1rem; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\">Some text..</p><p style=\"margin-bottom: 1rem; color: rgb(33, 37, 41); font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;\">Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>";
	$("#summernote").summernote('code', type);
});

$("#portfolio_header").keyup(function(){
	const length = $(this).val().trim().length;
	$("#header_text_length").text("- 100 자 중 ( "+ length + " ) 자 작성");
});

$("#portfolio_title").keyup(function(){
	const length = $(this).val().trim().length;
	$("#title_text_length").text("- 100 자 중 ( "+ length + " ) 자 작성");
});

$("#resetBtn").click(()=>{
	$("#portfolio_header").val('');
	$("#portfolio_title").val('');
	$("#summernote").summernote('code','');
});

$('#summernote').summernote({
	dialogsInBody: true,
	  height : 820,
	  focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
		lang: "ko-KR",					// 한글 설정
		placeholder: '내용을 입력해주세요.',	//placeholder 설정
		callbacks: {	//여기 부분이 이미지를 첨부하는 부분
			onImageUpload : function(files) {
				if(files[0].size >= 1048576){
					alert('파일은 최대 5MB 까지 등록 가능합니다.');
					return;
				}
				uploadSummernoteImageFile(files[0],this);
			},
			onPaste: function (e) {
				var clipboardData = e.originalEvent.clipboardData;
				if (clipboardData && clipboardData.items && clipboardData.items.length) {
					var item = clipboardData.items[0];
					if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
						e.preventDefault();
					}
				}
			}
		},
		toolbar: [
	        ['style', ['style']],
	        ['font', ['bold', 'italic', 'underline', 'clear']],
	        // ['font', ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
	        ['fontname', ['fontname']],
	        ['fontsize', ['fontsize']],
	        ['color', ['color']],
	        ['para', ['ul', 'ol', 'paragraph']],
	        ['height', ['height']],
	        ['table', ['table']],
	        ['insert', ['link', 'picture', 'hr']],
//	        ['view', ['fullscreen' ,'codeview' ]],   // remove codeview button 
	      ],
});

function getTemporaryPortfolio(){
	findAllPortfolio("is-temporary",{
		page : 0,
		size : 10
	},(success)=>{
		let innerHtml = ``;
		temporaryPortfolioList = success;
		temporaryPortfolioList.map((val)=>{
			innerHtml += `<option value='${val['id']}'>${val['title']} [${val['createDate']}]<input type="text"></option>`;
		});
		if(innerHtml === ''){
			innerHtml = '<option value="">임시 저장 글이 존재하지 않습니다.</option>';
		}
		$("#temporaryList").html(innerHtml);
	},(error)=>{
	});
}

function uploadSummernoteImageFile(file, editor) {
	const token = localStorage.getItem('access_token');
	data = new FormData();
	data.append("file", file);
	$.ajax({
		data : data,
		type : "POST",
		url : "http://localhost:8081/api/v1/portfolio/fileUpload",
		beforeSend : function(xhr) {
			xhr.setRequestHeader("Authorization", "Bearer " + token);
		},
		contentType : false,
		processData : false,
		success : function(data) {
        	//항상 업로드된 파일의 url이 있어야 한다.
			$(editor).summernote('insertImage', "http://localhost:8081/" + data);
		}
	});
}