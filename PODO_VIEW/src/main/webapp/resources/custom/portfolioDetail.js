const seq = get_query()['seq'];

findByIdPortfolio('',seq,
(success)=>{
	const email = localStorage.getItem('email');

	$("#major").text(success['major']);
	$("#writer").text(success['writer']);
	$("#createDate").text(success['createDate']);
	$("#portfolioTitle").text(success['title']);
	$("#post_header").text(success['header']);
	$("#post_section").html(success['content']);
	
	if(email === success['writer']){
		$("#updateBtn").show();
	}else{
		$("#updateBtn").hide();
	}
},(error)=>{
	$("#main").hide();
	$("#footer").hide();
	$("#portfolioNotFoundModal").modal();
});

$("#updateBtn").click(()=>{
	location.href = './updatePortfolio?seq=' + seq;
})