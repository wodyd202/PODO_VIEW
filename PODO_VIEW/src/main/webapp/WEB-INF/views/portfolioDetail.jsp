<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<%@include file="./common/head.jsp" %>
<body>
  <%@include file="./common/topbar.jsp" %>
  <%@include file="./common/header.jsp" %>
  <%@include file="./portfolioDetail/portfolioDetail.jsp" %>
  <%@include file="./common/footer.jsp" %>
  <%@include file="./common/top-button.jsp"%>
  <%@include file="./common/script.jsp" %>
  <script type = "text/javascript" src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
  <script type = "text/javascript" src = "https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
  <script src="./api/portfolioAPI.js"></script>
  <script src="./api/attentionAPI.js"></script>
  <script src="./custom/portfolioDetail.js"></script>
</body>
</html>