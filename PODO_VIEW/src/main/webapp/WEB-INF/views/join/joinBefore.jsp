<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<body>
	<br>
	<br>
	<br>
	<br>
	<br>
	<section id="about" class="about">
		<div class="container card" data-aos="fade-up" style="text-align: left; padding:30px; margin-top: 20px;">
			(1) 수집하는 개인정보의 항목<br> 개인정보처리자(이하 주관사)는 아래와 같은 행사참여자의 개인정보를 수집하고
			있습니다.<br> - 성명, 소속, 부서명, 전화, 핸드폰, 메일, 주소<br> <br> (2)
			개인정보의 수집 및 이용 목적<br> 주관사는 원활한 행사진행 및 참여자 포상을 목적으로 행사참여자의 개인정보를
			수집 및 이용하고 있습니다.<br> <br> (3) 개인정보의 보유 및 이용기간<br>
			행사참여자의 개인정보는 개인정보의 수집 이용 및 목적에 명기된 제목을 달성한 때 혹은 고객이 자신의 개인정보 제공의 동의를
			철회한 때 파기합니다.<br> <br> (4) 개인정보 동의 철회<br> 본 동의서에 동의하신
			고객중 정보제공 동의를 철회하고 싶은 고객은 언제든지 정정, 삭제를 요구할 수 있습니다. 정보 제공 동의를 철회하고
			정보삭제를 요청한 고객님의 정보를 삭제하는 데에는 일정 시간이 소요됩니다. 따라서 활용동의 철회를 요청하시더라도 위와 같은
			이유로 수집 및 이용 목적에 명기된 활동에 사용될 수 있음을 알려드립니다.<br> <br> (5) 개인정보
			제공 동의<br>
			<table border="1" cellpadding="1" cellspacing="1"
				style="border-color: #434343; width: 100%;">
				<tr>
					<td style="width: 50%; text-align: center; height: 30px;">개인정보를
						제공 받는 자</td>
					<td style="width: 50%; text-align: center; height: 30px;">개인정보를
						제공받는 자의 개인정보 이용목적</td>
				</tr>
				<tr>
					<td style="width: 50%; text-align: center; padding: 5px;">(주)가가가
						/ (주)나나나</td>
					<td style="width: 50%; padding: 5px;">- 설문항목 6. 추가정보를
						받으시겠습니까?에 체크한 고객에게 연락 및 추가정보 제공<br> - 제품 및 서비스에 대한 문의사항 응대 및
						판매
					</td>
				</tr>
			</table>
			<div style="padding: 5px 0 0px 5px;">&nbsp;※ 서비스 제공을 위해서 필요한
				최소한의 개인정보이므로 동의를 해 주셔야 서비스를 이용하실 수 있습니다.</div>
			<div style="text-align: center; padding: 0 0 15px 0;">
				<input type="radio" value="1" name="agree1">&nbsp;<label
					for="agree11">동의합니다.</label> <input type="radio" value="0"
					name="agree1">&nbsp;<label for="agree10">동의하지
					않습니다.</label>
			</div>
			(6) 개인정보 취급 위탁<br>
			<table border="1" cellpadding="1" cellspacing="1"
				style="border-color: #434343; width: 100%;">
				<tr>
					<td style="width: 50%; text-align: center; height: 30px;">개인정보
						취급 위탁을 받는자(수탁자)</td>
					<td style="width: 50%; text-align: center; height: 30px;">개인정보
						취급 위탁을 하는 업무의 내용</td>
				</tr>
				<tr>
					<td style="width: 50%; text-align: center; padding: 5px;">(주)다다다
						/ (주)라라라</td>
					<td style="width: 50%; text-align: center; padding: 5px;">본 행사
						설문지 수집 및 제공받은 개인정보의 수집과 처리</td>
				</tr>
			</table>
			<div style="padding: 5px 0 0px 5px;">&nbsp;※ 서비스 제공을 위해서 필요한
				최소한의 개인정보이므로 동의를 해 주셔야 서비스를 이용하실 수 있습니다.</div>
			<div style="text-align: center; padding: 0 0 0px 0;">
				<input type="radio" value="1" name="agree2">&nbsp;<label
					for="agree21">동의합니다.</label> <input type="radio" value="0"
					name="agree2">&nbsp;<label for="agree20">동의하지
					않습니다.</label>
			</div>
			<br>
			<div class="text-center">
				<button type="button" class="btn btn-outline-primary btn-block" style="margin-bottom: 5px;" id="joinBtn">가입하러 가기</button>
				<button type="button" class="btn btn-outline-danger btn-block" style="margin-bottom: 5px;" onclick="location.href='./login'">가입 취소</button>
			</div>
	</section>
	<div class="modal fade" id="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          	개인정보 제공 동의를 모두 동의해주세요.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">닫 기</button>
        </div>
      </div>
    </div>
  </div>
</body>