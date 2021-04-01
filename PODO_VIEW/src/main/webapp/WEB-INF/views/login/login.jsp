<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<body>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<section id="features" class="features">
		<div class="container" data-aos="fade-up">
			<div class="row feature-item">
				<div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
					<img src="assets/img/features-1.svg" class="img-fluid" alt="">
				</div>
				<div class="col-lg-6 wow fadeInUp pt-5 pt-lg-0" data-aos="fade-left" data-aos-delay="150">
					<br><br><br><br>
					<div class="form">
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
							<input class="form-control" type="password" id="password"
								placeholder="비밀번호를 입력해주세요." />
							<div class="validate" id="password_validation"></div>
						</div>
						<br>
						<hr>
						<div class="text-center">
							<button type="button" class="btn btn-outline-primary btn-block" style="margin-bottom: 5px;" id="loginBtn">로그인</button>
							<a href="./joinBefore">포도의 회원이 아니신가요?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="modal fade" id="loginErrorModal">
	    <div class="modal-dialog modal-dialog-centered">
	      <div class="modal-content">
	        <div class="modal-body">
				회원 이메일 혹은 비밀번호가 일치하지 않습니다. 다시 확인해주세요.
	        </div>
	        <div class="modal-footer">
	          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">확 인</button>
	        </div>
      </div>
    </div>
  </div>
</body>