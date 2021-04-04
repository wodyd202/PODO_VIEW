<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<body>
  <main id="main" style="margin-top:130px;">
  	<section id="portfolio-details" class="portfolio-details">
      <div class="container" data-aos="fade-up">
        <div class="portfolio-details-container">
          <div class="owl-carousel portfolio-details-carousel" id="imgList">
            <img src="assets/img/portfolio/portfolio-details-1.jpg" class="img-fluid" alt="">
            <img src="assets/img/portfolio/portfolio-details-2.jpg" class="img-fluid" alt="">
            <img src="assets/img/portfolio/portfolio-details-3.jpg" class="img-fluid" alt="">
          </div>
          <div class="portfolio-info">
            <h4 id="portfolioTitle">
            </h4>
            <div style="float: right;">
				<button class="btn btn-outline-primary btn-sm" id="interestRegisterBtn" style="display: none;">
					관심 주기
				</button>
				<button class="btn btn-outline-danger btn-sm" id="interestDeleteBtn" style="display: none;">
					관심 주기 해제
				</button>
            </div>
            <ul>
              <li><strong>전 공</strong>: <span id="major"></span></li>
              <li><strong>작성자</strong>: <span id="writer"></span></li>
              <li><strong>작성일</strong>: <span id="createDate"></span></li>
            </ul>
            <hr>
            <div style="float: right;">
	            <button id="updateBtn" type="button" class="btn btn-outline-secondary btn-sm" style="display: none;">글 수정</button>
	            <button id="convertPdfBtn" type="button" class="btn btn-outline-success btn-sm" style="display: none;">PDF 변환</button>
            </div>
          </div>
        </div>
        <div id="pdfSection" class="portfolio-description">
          <h2 id="title"></h2>
          <p id="post_header">
          </p>
          <hr>
          <p id="post_section">
          </p>
        </div>
        <hr>
        <br>
        <h4><strong>조언글</strong><div style="font-size: 15px; float: right;"><span id="totalElement"></span> 건의 조언이 존재합니다.</div></h4>
        <div>
        	<div class="media p-3">
        		<div class="media-body" id="reviewList">
        		</div>
        	</div>
        </div>
        <hr>
        <div class="form-group" id="reviewWriteSection">
		  <textarea class="form-control" rows="5" id="reviewContent" placeholder="여러분의 소중한 의견을 남겨주세요."></textarea>
		  <button class="btn btn-primary" style="margin-top: 5px; float: right;" data-toggle="modal" data-target="#registerReviewModal">조언글 등록</button>
		</div>
		<br><br>
      </div>
    </section>
  </main>
  <div class="modal fade" id="registerReviewModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          	정말 작성한 조언을 등록하시겠습니까?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="registerReviewBtn">예</button>
          <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">아니요</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="updateReviewModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          	정말 작성한 조언을 수정하시겠습니까?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="updateReviewBtn">예</button>
          <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">아니요</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="deleteReviewModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          	정말 작성한 조언을 삭제하시겠습니까?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="deleteReviewBtn">예</button>
          <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">아니요</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="registerReAttentionModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			정말 해당 조언에 답글을 등록하시겠습니까?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="registerReAttentionBtn">예</button>
          <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">아니요</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="updateReAttentionModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			<label for="usr">해당 조언을 수정합니다 :</label>
  			<input type="text" class="form-control" id="updateReAttentionContent">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="updateReAttentionBtn">수 정</button>
          <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">취 소</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="deleteReAttentionModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			조언 답글 삭제시 복구가 불가능합니다. 정말 해당 조언 답글을 삭제하시겠습니까?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="deleteReAttentionBtn">예</button>
          <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">아니요</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="updateReAttentionErrorModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body" id="updateReAttentionErrorContent">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">확 인</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="updateReAttentionSuccessModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
        	조언 답글 수정이 정상적으로 완료 되었습니다.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">확 인</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="registerReAttentionSuccessModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			소중한 의견 감사합니다! 조언 답글이 정상적으로 등록되었습니다.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">확 인</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="registerReviewSuccessModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			소중한 의견 감사합니다! 조언이 정상적으로 등록되었습니다.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">확 인</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="updateReviewSuccessModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			조언이 정상적으로 수정되었습니다.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">확 인</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="deleteReAttentionSuccessModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			조언 답글이 정상적으로 삭제되었습니다.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" onclick="location.reload()">확 인</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="deleteReviewSuccessModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			조언이 정상적으로 삭제되었습니다.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">확 인</button>
        </div>
      </div>
    </div>
  </div>
</body>