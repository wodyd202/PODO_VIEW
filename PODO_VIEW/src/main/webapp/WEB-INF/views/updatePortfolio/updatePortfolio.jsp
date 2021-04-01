<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<body>
  <br><br><br><br><br><br><br><br>
  <main id="main">
  	<div class="container">
	  	<div class="form-group">
		  <label for="portfolio_title">포트폴리오 제 목 <span id="title_text_length" style="color: green; margin-left: 20px; font-size: 13px;">- 100 자 중 ( 0 ) 자 작성</span></label>
		  <textarea class="form-control" rows="2" id="portfolio_title" placeholder="포트폴리오 제목을 입력해주세요."></textarea>
		  <div class="validate" id="title_validation"></div>
		</div>
	  	<div class="form-group">
		  <label for="portfolio_header">포트폴리오 주 제 <span id="header_text_length" style="color: green; margin-left: 20px; font-size: 13px;">- 100 자 중 ( 0 ) 자 작성</span></label>
		  <textarea class="form-control" rows="5" id="portfolio_header" placeholder="포트폴리오 주제를 입력해주세요."></textarea>
		  <div class="validate" id="header_validation"></div>
		</div>
	  	<div class="form-group">
			<label>포트폴리오 내 용 <span id="content_text_length"></span></label>
			<br>
		 	<button class="btn btn-sm btn-primary" style="font-size: 13px;" id="type_1">이력서 양식</button>
            <button class="btn btn-sm btn-primary" style="font-size: 13px;" id="type_2">간단 자기소개 양식</button>
            <button class="btn btn-sm btn-primary" style="font-size: 13px;" id="type_3">basic_1</button>
            <button class="btn btn-sm btn-primary" style="font-size: 13px;" id="type_4">basic_2</button>
            <button class="btn btn-sm btn-primary" style="font-size: 13px;" id="type_5">basic_3</button>
            <br><br>
			<div id="summernote" class="d-none d-lg-flex align-items-end fixed-top topbar-transparent"></div>
			<div class="validate" id="content_validation"></div>
		</div>
		<label for="showType">공개 여부 :</label>
		<select class="form-control" id="showType">
		   <option value="PUBLIC">모두 보기</option>
		   <option value="PRIVATE">나만 보기</option>
		</select>
		<br>
		<hr>
		<div class="text-right">
			<button class="btn btn-outline-primary" id="updateConfirmBtn">포트폴리오 수정</button>
			<button class="btn btn-outline-secondary" data-toggle="modal" data-target="#cencelModal">취 소</button>
			<button class="btn btn-outline-danger" data-toggle="modal" data-target="#deleteModal">삭 제</button>
		</div>
  	</div>
  </main>
  <br><br><br>
  <div class="modal fade" id="cencelModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          	정말 수정을 취소하시겠습니까?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="cencelBtn">예</button>
          <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">아니요</button>
        </div>
        
      </div>
    </div>
  </div>
  <div class="modal fade" id="updateModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          	정말 작성한 포트폴리오를 위 사항대로 수정하시겠습니까?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="updateBtn">예</button>
          <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">아니요</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="deleteModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			포트폴리오 삭제시 되돌릴 수 없습니다. 그래도 삭제하시겠습니까?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="deleteBtn">예</button>
          <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">아니요</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="portfolioUpdateSuccessModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			포트폴리오가 정상적으로 수정되었습니다.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="portfolioUpdateSuccessBtn">확 인</button>
        </div>
      </div>
    </div>
  </div>
</body>