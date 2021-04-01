<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<body>
  <br><br><br><br><br><br><br><br>
  <main id="main" id="registerSection">
  	<div class="container">
		<div class="input-group mb-3 input-group-sm">
	  		<label for="sel1">임시 저장 글 목록 :</label>
			<select class="form-control" id="temporaryList" style="margin-left: 5px;">
			   <option>없 음</option>
			</select>
			<button class="btn btn-outline-success btn-sm" id="temporaryCallBtn" style="margin-left: 5px;">불러오기</button>
			<button class="btn btn-outline-danger btn-sm" id="deleteTemporaryConfrimBtn" data-target="#temporaryDeleteModal" data-toggle="modal" style="margin-left: 5px;">임시 저장 글 삭제</button>
			<button class="btn btn-outline-info btn-sm" style="margin-left: 5px; display: none;" id="newWriterPortfolioBtn">새 글로 전환하기</button>
		</div>
		<br>
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
		 	<button class="btn btn-sm btn-info" style="font-size: 13px;" id="type_1">이력서 양식</button>
            <button class="btn btn-sm btn-info" style="font-size: 13px;" id="type_2">간단 자기소개 양식</button>
            <button class="btn btn-sm btn-info" style="font-size: 13px;" id="type_3">basic_1</button>
            <button class="btn btn-sm btn-info" style="font-size: 13px;" id="type_4">basic_2</button>
            <button class="btn btn-sm btn-info" style="font-size: 13px;" id="type_5">basic_3</button>
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
			<button class="btn btn-outline-primary" id="registerPortfolioBtn">포트폴리오 개시</button>
			<button class="btn btn-outline-secondary" data-toggle="modal" data-target="#temporaryModal" id="temporaryPortfolioBtn">임시 저장</button>
			<button class="btn btn-outline-info" data-toggle="modal" data-target="#resetModal">초기화</button>
		</div>
  	</div>
  </main>
  <br><br><br>
  <div class="modal fade" id="resetModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          	정말 작성한 내용을 초기화하시겠습니까?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="resetBtn">예</button>
          <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">아니요</button>
        </div>
        
      </div>
    </div>
  </div>
  <div class="modal fade" id="temporaryModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          	정말 작성한 내용을 임시저장 하시겠습니까?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="temporaryBtn">예</button>
          <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">아니요</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="registerModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          	정말 작성한 포트폴리오를 등록하시겠습니까?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="registerBtn">예</button>
          <button type="button" class="btn btn-info btn-sm" data-dismiss="modal">아니요</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="portfolioRegisterSuccessModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			포트폴리오 등록이 완료되었습니다.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="confirmSuccessBtn">확 인</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="temporaryRegisterSuccessModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			포트폴리오 임시 저장이 완료되었습니다.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">확 인</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="newPortfolioWriteModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			임시 저장 글을 불러올 시 기존 작성 글 내역이 취소 됩니다. 그래도 불러오시겠습니까?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="temporaryCallModalBtn">예</button>
          <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">아니요</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="emptyTemporaryModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			임시 저장된 글이 존재하지 않습니다.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">확 인</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="temporaryDeleteModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
			정말 임시 저장글을 삭제하시겠습니까?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="deleteTemporaryBtn">예</button>
          <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">아니요</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="temporaryDeleteStateModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body" id="temporaryDeleteTitle">
        </div>
        <div class="modal-footer">
           <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">확 인</button>
        </div>
      </div>
    </div>
  </div>
</body>