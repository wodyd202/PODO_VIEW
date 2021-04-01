<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<body>
	<br>
	<br>
	<br>
	<br>
	<br>
	<section id="about" class="about">
		<div class="container" data-aos="fade-up">
			<div class="row">
				<div class="col-lg-5 col-md-6">
					<div class="about-img" data-aos="fade-right" data-aos-delay="100">
						<img src="assets/img/features-2.svg" alt="" style="height: 500px;;">
					</div>
				</div>
				<div class="col-lg-7 col-md-6">
					<div class="about-content" data-aos="fade-left"
						data-aos-delay="100">
						<div class="col-lg-12">
							<div class="form">
								<h4>포트폴리오의 모든것</h4>
								<hr>
									<div class="form-group">
										<div class="input-group mb-3">
										  <input type="text" class="form-control" placeholder="이메일을 입력해주세요." id="email">
										  <div class="input-group-append">
											<select class="input-group-text" id="email_last" style="height: 38px;">
											    <option>직접 입력</option>
											    <option>@naver.com</option>
											    <option>@daum.net</option>
											</select>
										  </div>
										</div>
										<div class="validate" id="email_validation"></div>
									</div>
									<div class="form-group">
										<input class="form-control" type="password" id="password" placeholder="비밀번호를 입력해주세요."/>
										<div class="validate" id="password_validation"></div>
									</div>
									<div class="form-group">
										<input class="form-control" type="password" id="passwordChk" placeholder="비밀번호 확인란을 입력해주세요."/>
										<div class="validate" id="passwordChk_validation"></div>
									</div>
									<select class="form-control" id="major">
									</select>
									<select class="form-control" id="userType" style="margin-top: 20px;">
									    <option value="STUDENT">학 생</option>
									    <option value="COMPANY">기 업</option>
									</select>
									<br>
									<hr>
									<div class="text-center">
										<button type="button" class="btn btn-outline-primary btn-block" style="margin-bottom: 5px;" id="registerBtn">회원 가입</button>
										<a href="./login">이미 아이디가 존재합니다.</a>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="modal fade" id="registerModal">
	    <div class="modal-dialog modal-dialog-centered">
	      <div class="modal-content">
	        <div class="modal-body" id="registerBody">
	        	정말 위 사항대로 회원가입을 진행하시겠습니까?
	        </div>
	        <div class="modal-footer">
	          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="registerSuccessBtn">예</button>
	          <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">아니요</button>
	        </div>
      </div>
    </div>
  </div>
	<div class="modal fade" id="registerSuccessModal">
	    <div class="modal-dialog modal-dialog-centered">
	      <div class="modal-content">
	        <div class="modal-body" id="registerBody">
	        	축하합니다. 회원가입이 완료되었습니다.
	        </div>
	        <div class="modal-footer">
	          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="registerSuccessResultBtn">확 인</button>
	        </div>
      </div>
    </div>
  </div>
</body>