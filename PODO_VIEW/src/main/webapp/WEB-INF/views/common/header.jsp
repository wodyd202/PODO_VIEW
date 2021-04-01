<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<header id="header" class="fixed-top header-transparent">
   <div class="container d-flex align-items-center">
     <h1 class="mr-auto"><a href="./index">
     <img style="width: 180px;" src="assets/img/logo.png"/>
     </a></h1>
     <nav class="main-nav d-none d-lg-block">
       <ul>
	       	<%
	       	String url = request.getRequestURI().toString();
       		int lastIdx = url.lastIndexOf("/") + 1;
       		url = url.substring(lastIdx,url.indexOf("."));
	       	if(url.equals("registerPortfolio")){
	       		%>
		         <li class="active"><a href="javascript:moveRegisterPortfolio()">포트폴리오 등록</a></li>
	       		<%
	       	}else{
	       		%>
		         <li><a href="javascript:moveRegisterPortfolio()">포트폴리오 등록</a></li>
	       		<%
	       	}
	       	%>
	         <li><a href="#">서비스</a></li>
	       	<%
	       	if(url.equals("today-portfolioList") || url.equals("my-portfolioList")){
	       		%>
	         <li class="drop-down active"><a href="./portfolioList">포트폴리오 광장</a>
	       		<%
	       	}else{
	       		%>
	         <li class="drop-down"><a href="./portfolioList">포트폴리오 광장</a>
	       		<%
	       	}
	       	%>
           <ul>
             <li><a href="./today-portfolioList">오늘 등록된 포트폴리오</a></li>
             <li><a href="#">추천 포트폴리오</a></li>
             <li><a href="javascript:moveMyPortfolio()">나의 포트폴리오</a></li>
           </ul>
         </li>
         <li><input type="text" class="form-control form-control-sm" style="margin-top: 5px;" placeholder="  Search..."></li>
         <li id="menu_login"><a href="./login">로그인</a></li>
         <li id="menu_logout"><a href="javascript:logout()">로그아웃</a></li>
         <li id="menu_mypage"><a href="">마이페이지</a></li>
       </ul>
     </nav>
  </div>
</header>