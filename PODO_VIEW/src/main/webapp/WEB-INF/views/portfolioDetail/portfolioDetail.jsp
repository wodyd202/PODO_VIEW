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
            <div id="attentionBtn" style="display: none; cursor: pointer; float: right;">
			</div>
            </h4>
            <ul>
              <li><strong>전 공</strong>: <span id="major"></span></li>
              <li><strong>작성자</strong>: <span id="writer"></span></li>
              <li><strong>작성일</strong>: <span id="createDate"></span></li>
              <li><strong>관심도</strong>: 0</li>
            </ul>
            <div style="float: right;">
	            <button id="updateBtn" type="button" class="btn btn-outline-secondary btn-sm" style="display: none;">글 수정</button>
            </div>
          </div>
        </div>
        <div class="portfolio-description">
          <h2 id="title"></h2>
          <p id="post_header">
          </p>
          <hr>
          <p id="post_section">
          </p>
        </div>
        <hr>
        <br>
        <h4><strong>조언글</strong></h4>
        <div>
        	<div class="media p-3" id="reviewList">
        	</div>
        </div>
        <hr>
        <div class="form-group">
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
</body>