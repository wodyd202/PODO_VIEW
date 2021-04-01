const seq = get_query()['seq'];
let reviewAddFlag = false;
let totalPage = 0;
let page = 0;
let focusUpdateReviewBtn = null;

findAttentionList();

findByIdPortfolio('',seq,
(success)=>{
	const email = localStorage.getItem('email');

	$("#major").text(success['major']);
	$("#writer").text(success['writer']);
	$("#createDate").text(success['createDate']);
	$("#portfolioTitle").text(success['title']);
	$("#post_header").text(success['header']);
	$("#post_section").html(success['content']);
	
	if(email === success['writer']){
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
			innerHtml += `
			<div>
				<input type="hidden" value="${val['id']}">
				<h5>${val['writer']} <small><i>${val['createDate']}</i></small>
				<button id="${((page + 1) * 10) + idx}_addReviewBtn" onclick="showReviewArea(${((page + 1) * 10) + idx})" class="btn btn-small" style="margin-left:20px;">답글</button>
				<button onclick="hideReviewArea()" id="${((page + 1) * 10) + idx}_cencel" class="btn btn-small" style="display:none;">취소</button>
				<button onclick="showUpdateReview(${((page + 1) * 10) + idx},'${val['content']}')" class="btn btn-small" style="margin-left:0px;">수정</button>
				<button id="${((page + 1) * 10) + idx}_updateCencelBtn" onclick="hideUpdateReview(${((page + 1) * 10) + idx})" class="btn btn-small" style="margin-left:0px; display:none;">수정 취소</button>
				</h5>
				<p id="${((page + 1) * 10) + idx}_reviewContent">${val['content']}</p>
				<div id="${((page + 1) * 10) + idx}_update" style="display:none;">
					<textarea class="form-control" rows="2" placeholder="답글을 작성해주세요."></textarea>
				</div>
				<br>
				<hr>
			</div>
				`;
		});
		$("#reviewList").html($("#reviewList").html() + innerHtml);
	},(error)=>{
	});
}

function showReviewArea(seq){
	if(reviewAddFlag){
		$("#"+ nowReviewAddIdx + "_update").hide();
		$("#"+ nowReviewAddIdx + "_cencel").hide();
	}
	nowReviewAddIdx = seq;
	$("#"+ seq + "_update").show();
	$("#"+ seq + "_cencel").show();
	reviewAddFlag = true;
}

function hideReviewArea(){
	$("#"+ nowReviewAddIdx + "_update").hide();
	$("#"+ nowReviewAddIdx + "_cencel").hide();
	nowReviewAddIdx = null;
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
