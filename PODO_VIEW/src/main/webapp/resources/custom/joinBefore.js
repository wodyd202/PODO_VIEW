$("#joinBtn").click(()=>{
	 var agree1 = $('input[name="agree1"]:checked').val();
	 var agree2 = $('input[name="agree2"]:checked').val();
	 if(agree1 === '1' && agree2 === '1'){
		 location.href = './join';
	 }else{
		 $("#modal").modal();
	 }
});