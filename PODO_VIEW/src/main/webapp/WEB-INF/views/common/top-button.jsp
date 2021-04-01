<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<a href="#" class="back-to-top" id="topBtn"><i class="fa fa-chevron-up"></i></a>
<div class="modal fade" id="notLoginModal">
   <div class="modal-dialog modal-dialog-centered">
     <div class="modal-content">
       <div class="modal-body">
         	로그인한 사용자만 포트폴리오를 등록할 수 있습니다.
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="notLoginBtn">확 인</button>
       </div>
     </div>
   </div>
 </div>
<div class="modal fade" id="portfolioNotFoundModal">
   <div class="modal-dialog modal-dialog-centered">
     <div class="modal-content">
       <div class="modal-body">
			존재하지 않는 포트폴리오입니다. 포트폴리오 고유 번호를 다시 확인해주세요.
       </div>
       <div class="modal-footer">
         <button type="button" class="btn btn-success btn-sm" data-dismiss="modal" id="portfolioNotFoundBtn">확 인</button>
       </div>
     </div>
   </div>
 </div>