const email = localStorage.getItem('email');
const seq = get_query()['seq'];
let reviewAddFlag = false;
let totalPage = 0;
let page = 0;
let focusUpdateReviewBtn = null;
let focusCencelBtn = null;
let selectContent = null;
let selectAttentionId = null;
let updateReAttentionIdx = null;
let deleteReAttentionIdx = null;
let updateReAttentionTarget = null;

findAttentionList();
getInterest();

findByIdPortfolio('',seq,
(success)=>{
	$("#major").text(success['major']);
	$("#writer").text(success['writer']);
	$("#createDate").text(formatDate(success['createDate']));
	$("#portfolioTitle").text(success['title']);
	$("#post_header").text(success['header']);
	$("#post_section").html(success['content']);
	
	if(email === success['writer']){
		$("#interestRegisterBtn").hide();
		$("#updateBtn").show();
		$("#reviewWriteSection").hide();
		$("#convertPdfBtn").show();
	}else{
		$("#updateBtn").hide();
		$("#reviewWriteSection").show();
		$("#convertPdfBtn").hide();
	}
},(error)=>{
	$("#main").hide();
	$("#footer").hide();
	$("#portfolioNotFoundModal").modal();
});

$(window).scroll(function() {
	if(page >= totalPage){
		return;
	}
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    	page++;
    	findAttentionList();
    }
});

$("#deleteReAttentionBtn").click(()=>{
	const reAttention = {
		reAttentionId : deleteReAttentionIdx
	};
	deleteReAttention(reAttention,(success)=>{
		$("#deleteReAttentionSuccessModal").modal();
	},(error)=>{
	});
});

$("#updateReAttentionBtn").click(()=>{
	const reAttention = {
		reAttentionId : updateReAttentionIdx,
		content : $("#updateReAttentionContent").val().trim()
	};
	updateReAttention(reAttention,(success)=>{
		updateReAttentionTarget.innerText = $("#updateReAttentionContent").val().trim();
		$("#updateReAttentionSuccessModal").modal();
		$("#updateReAttentionContent").val('');
	},(error)=>{
		$("#updateReAttentionErrorContent").text(error['responseJSON']['msg']);
		$("#updateReAttentionErrorModal").modal();
	});
});

$("#registerReAttentionBtn").click(()=>{
	const reAttention = {
		attentionId : selectAttentionId,
		content : selectContent.value.trim()
	};
	registerReAttention(reAttention,(success)=>{
		selectContent.nextSibling.nextSibling.style.display='none';
		selectContent.value = "";
		$("#registerReAttentionSuccessModal").modal();
		focusCencelBtn.click();
		$("#" + nowReviewAddIdx + "_showReAttention")[0].click();
	},(error)=>{
		selectContent.nextSibling.nextSibling.innerText=error['responseJSON']['msg'];
		selectContent.nextSibling.nextSibling.style.color='red';
	});
});

$("#interestRegisterBtn").click(()=>{
	registerInterest({
		portfolioId : seq
	},(success)=>{
		getInterest();
	},(error)=>{
	});
});

$("#interestDeleteBtn").click(()=>{
	deleteInterest({
		portfolioId : seq
	},(success)=>{
		getInterest();
	},(error)=>{
	});
});

$("#deleteReviewBtn").click(()=>{
	const id = focusUpdateReviewBtn.parentNode.parentNode.firstChild.nextSibling.value;
	const attention = {
		attentionId : id
	};
	deleteAttention(attention,(success)=>{
		page = 0;
		$("#reviewList").html('');
		findAttentionList();
		$("#deleteReviewSuccessModal").modal();
	},(error)=>{
	});
});

$("#updateReviewBtn").click(()=>{
	const id = focusUpdateReviewBtn.parentNode.parentNode.firstChild.nextSibling.value;
	const content = focusUpdateReviewBtn.previousSibling.previousSibling.previousSibling.previousSibling.value.trim();
	const attention = {
		attentionId : id,
		content : content
	};
	updateAttention(attention,(success)=>{
		page = 0;
		$("#reviewList").html('');
		findAttentionList();
		$("#updateReviewSuccessModal").modal();
	},(error)=>{
	});
});

$("#registerReviewBtn").click(()=>{
	const content = $("#reviewContent").val().trim();
	registerAttention({
		portfolioId : seq,
		content : content
	},(success)=>{
    	page = 0;
		$("#reviewContent").val('');
		$("#reviewList").html('');
		findAttentionList();
		$("#registerReviewSuccessModal").modal();
	},(error)=>{
	});
});

$("#updateBtn").click(()=>{
	location.href = './updatePortfolio?seq=' + seq;
})

$('#convertPdfBtn').click(function() {
  html2canvas($('#pdfSection')[0]).then(canvas => {
      try {
          contentH = $('#pdfSection').height();
          var img = canvas.toDataURL("image/png", 1.0);
          $w = $actw = canvas.width;
          $h = $acth = canvas.height;
          var pdf = new jsPDF("p", "mm", "a4");
          var width = $maxw = pdf.internal.pageSize.width;
          var height = $maxh = pdf.internal.pageSize.height;
          if (!$maxw) $maxw = width;
          if (!$maxh) $maxh = height;
          if ($w > $maxw) {
              $w = $maxw;
              $h = Math.round($acth / $actw * $maxw);
          }
          pdf.addImage(img, 'JPEG', 0, 0, $w, $h);
          $count = Math.ceil($h) / Math.ceil($maxh);
          $count = Math.ceil($count);
          for (var i = 1; i <= $count; i++) {
              position = - $maxh * i
              pdf.addPage(img, 'JPEG', 0, 0, $w, $h);
              pdf.addImage(img, 'JPEG', 0, position, $w, $h);
          }
          pdf.save("포트폴리오.pdf");
      } catch (e) {
      }
  });
});

function getInterest(){
	findInterest({
		portfolioId : seq
	},(success)=>{
		if(success === ''){
			$("#interestRegisterBtn").show();
			$("#interestDeleteBtn").hide();
		}else{
			$("#interestRegisterBtn").hide();
			$("#interestDeleteBtn").show();
		}
	},(error)=>{
		$("#interestRegisterBtn").hide();
		$("#interestDeleteBtn").hide();
	});
}

function findAttentionList(){
	findAllAttention({
		portfolioId : seq,
		page : page,
		size : 10
	},(success)=>{
		const content = success['content'];
		totalPage = Math.ceil(success['totalElement'] / 10);
		$("#totalElement").text(success['totalElement']);
		let innerHtml = ``;
		content.map((val,idx)=>{
			if(email === val['writer']){
				innerHtml += `
					<div>
					<input type="hidden" value="${val['id']}">
					<h5>${val['writer']} <small><i>${formatDate(val['createDate'])}</i></small>
					<button id="${((page + 1) * 10) + idx}_addReviewBtn" onclick="showReviewArea(${((page + 1) * 10) + idx})" class="btn btn-small" style="margin-left:20px;">답글 작성</button>
					<button class="btn btn-small" style="margin-left:5px;" onclick="showReAttentionList('${((page + 1) * 10) + idx}')" id="${((page + 1) * 10) + idx}_showReAttention">답글 보기</button>
					<button onclick="hideReviewArea()" id="${((page + 1) * 10) + idx}_cencel" class="btn btn-small" style="display:none;">취소</button>
					<button onclick="showUpdateReview(${((page + 1) * 10) + idx},'${val['content']}')" class="btn btn-small" style="margin-left:0px;">수정</button>
					<button id="${((page + 1) * 10) + idx}_updateCencelBtn" onclick="hideUpdateReview(${((page + 1) * 10) + idx})" class="btn btn-small" style="margin-left:0px; display:none;">수정 취소</button>
					</h5>
					<p id="${((page + 1) * 10) + idx}_reviewContent">${val['content']}</p>
					<div id="${((page + 1) * 10) + idx}_update" style="display:none;">
					<textarea class="form-control" rows="2" placeholder="답글을 작성해주세요."></textarea>
					<div class="validate"></div>
					<div style="float:right; margin-top:3px;">
					<button class="btn btn-sm btn-primary" onclick="showRegisterReAttentionModal()">답글 작성</button>
					</div>
					</div>
					<div id="${((page + 1) * 10) + idx}_reAttentionList">
					</div>
					<br>
					<hr>
					</div>
					`;
			}else{
				innerHtml += `
					<div>
					<input type="hidden" value="${val['id']}">
					<h5>${val['writer']} <small><i>${formatDate(val['createDate'])}</i></small>
					<button id="${((page + 1) * 10) + idx}_addReviewBtn" onclick="showReviewArea(${((page + 1) * 10) + idx})" class="btn btn-small" style="margin-left:20px;">답글 작성</button>
					<button class="btn btn-small" style="margin-left:5px;" onclick="showReAttentionList('${((page + 1) * 10) + idx}')" id="${((page + 1) * 10) + idx}_showReAttention">답글 보기</button>
					<button onclick="hideReviewArea()" id="${((page + 1) * 10) + idx}_cencel" class="btn btn-small" style="display:none;">취소</button>
					<button id="${((page + 1) * 10) + idx}_updateCencelBtn" onclick="hideUpdateReview(${((page + 1) * 10) + idx})" class="btn btn-small" style="margin-left:0px; display:none;">수정 취소</button>
					</h5>
					<p id="${((page + 1) * 10) + idx}_reviewContent">${val['content']}</p>
					<div id="${((page + 1) * 10) + idx}_update" style="display:none;">
					<textarea class="form-control" rows="2" placeholder="답글을 작성해주세요."></textarea>
					<div class="validate"></div>
					<div style="float:right; margin-top:3px;">
					<button class="btn btn-sm btn-primary" onclick="showRegisterReAttentionModal()">답글 작성</button>
					</div>
					</div>
					<div id="${((page + 1) * 10) + idx}_reAttentionList">
					</div>
					<br>
					<hr>
					</div>
					`;
			}
		});
		$("#reviewList").html($("#reviewList").html() + innerHtml);
	},(error)=>{
	});
}

function showReAttentionList(idx){
	const attentionId = event.target.parentNode.parentNode.firstChild.nextSibling.value;
	const search = {
		attentionId : attentionId,
		page : 0,
		size : 100
	};
	findAllReAttention(search,(success)=>{
		let innerHtml = ``;
		success['content'].map((val)=>{
			if(email === val['writer']){
				innerHtml += `
					<div class="media p-5">
					<div class="media-body">
					<h5>${val['writer']}<small><i>${formatDate(val['createDate'])}</i></small></h5>
					<p>${val['content']}</p>
					<input type="hidden" value="${val['id']}">
					<button class="btn btn-sm" onclick="showReAttentionUpdateModal()">수정</button>
					<button class="btn btn-sm" onclick="showReAttentionDeleteModal()">삭제</button>
					</div>
					</div> 
					`;
			}else{
				innerHtml += `
					<div class="media p-5">
					<div class="media-body">
					<h5>${val['writer']}<small><i>${formatDate(val['createDate'])}</i></small></h5>
					<p>${val['content']}</p>
					</div>
					</div> 
				`;
			}
		});
		$("#" + idx + "_reAttentionList").html(innerHtml);
	},(error)=>{
	});
}

function showReAttentionDeleteModal(){
	deleteReAttentionIdx = event.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.value;
	$("#deleteReAttentionModal").modal();
}

function showReAttentionUpdateModal(){
	updateReAttentionIdx = event.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.value;
	updateReAttentionTarget = event.target.parentNode.firstChild.nextSibling.nextSibling.nextSibling;
	$("#updateReAttentionModal").modal();
}

function showRegisterReAttentionModal(){
	selectContent = event.target.parentNode.parentNode.firstChild.nextSibling;
	selectAttentionId = event.target.parentNode.parentNode.parentNode.firstChild.nextSibling.value;
	$("#registerReAttentionModal").modal();
}

function showReviewArea(seq){
	if(reviewAddFlag){
		$("#"+ nowReviewAddIdx + "_update").hide();
		$("#"+ nowReviewAddIdx + "_cencel").hide();
	}
	nowReviewAddIdx = seq;
	$("#"+ seq + "_update").show();
	$("#"+ seq + "_cencel").show();
	focusCencelBtn = $("#"+ seq + "_cencel");
	reviewAddFlag = true;
}

function hideReviewArea(){
	$("#"+ nowReviewAddIdx + "_update").hide();
	$("#"+ nowReviewAddIdx + "_cencel").hide();
	reviewAddFlag = false;
}

function showUpdateReview(seq,content){
	if(reviewAddFlag){
		hideReviewArea();
	}
	selectOriginContent = content;
	$("#"+seq+"_addReviewBtn").hide();
	$("#"+seq+"_updateCencelBtn").show();
	$("#"+seq+"_reviewContent").html(`
		<textarea class="form-control" rows="2">${content}</textarea>
		<button class="btn btn-sm btn-outline-danger" style="margin-top:5px; margin-left: 10px; float:right;" data-toggle="modal" data-target="#deleteReviewModal" onclick="focusUpdateReviewBtn=this;">삭 제</button>
		<button class="btn btn-sm btn-outline-primary" style="margin-top:5px; float:right;" data-toggle="modal" data-target="#updateReviewModal" onclick="focusUpdateReviewBtn=this;">수정 완료</button>
	`);
}

function hideUpdateReview(seq){
	$("#"+seq+"_addReviewBtn").show();
	$("#"+seq+"_updateCencelBtn").hide();
	$("#"+seq+"_reviewContent").html(`${selectOriginContent}`);
}