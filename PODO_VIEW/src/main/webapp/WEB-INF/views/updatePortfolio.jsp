<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<%@include file="./common/head.jsp" %>
<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
<body>
  <%@include file="./common/topbar.jsp" %>
  <%@include file="./common/header.jsp" %>
  <%@include file="./updatePortfolio/updatePortfolio.jsp" %>
  <%-- <%@include file="./common/footer.jsp" %> --%>
  <%@include file="./common/top-button.jsp"%>
  <%@include file="./common/script.jsp" %>
  <script src="./api/portfolioAPI.js"></script>
  <script src="./custom/updatePortfolio.js"></script>
</body>
</html>