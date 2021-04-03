let page = 0;
let size = 9;
let totalPage = 0;

getTodayPortfolio(page);

$(window).scroll(function() {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    	page++;
    	getTodayPortfolio(page);
    }
});

function getTodayPortfolio(page){
	if(totalPage < page){
		return;
	}
	findAllPortfolio("is-today",{
		page : page,
		size : size,
		showType : 'PUBLIC'
	},(res)=>{
		const success = res['content'];
		$("#totalElement").text(res['totalElement']);
		totalPage = Math.ceil(res['totalElement'] / 9);
		let innerHtml = ``;
		for(let i =0;i<success.length;i++){
			innerHtml += `
				<a href="./portfolioDetail?seq=${success[i]['id']}">
				<div class="col-md-6 col-lg-4 wow bounceInUp" data-aos="zoom-in" data-aos-delay="100" style="cursor:pointer;">
				<div class="box" style="min-height:500px;">
				<div id="carousel_${i}" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
			`;
			var arr = success[i]['images'].split(',');
			if(arr.length === 1 && arr[0] === ''){
				innerHtml += `
						<div class="carousel-item active">
							<img style="width:250px; height:200px;" class="card-img-top" src="./assets/img/default.jpeg"/>
						</div>
					`;
			}else{
				for(let i =0; i<arr.length;i++){
					if(i === 0){
						innerHtml += `
							<div class="carousel-item active">
							<img style="width:250px; height:200px;" class="card-img-top" src="${arr[i]}"/>
							</div>
							`;
					}else{
						innerHtml += `
							<div class="carousel-item">
							<img style="width:250px; height:200px;" class="card-img-top" src="${arr[i]}"/>
							</div>
						`;
					}
				}
			}
			innerHtml += `
				</div>
				<a class="carousel-control-prev" href="#carousel_${i}" data-slide="prev">
				<span class="carousel-control-prev-icon"></span>
				</a>
				<a class="carousel-control-next" href="#carousel_${i}" data-slide="next">
				<span class="carousel-control-next-icon"></span>
				</a>
				</div>
				<h4 class="title" style="margin-top: 20px;">
				<a href="">${success[i]['title']}</a>
				</h4>
				<span style="font-size: 13px;">
				작성일 : ${formatDate(success[i]['createDate'])}
				</span>
				<hr>
				<p class="description" style="min-height:100px;">
				${success[i]['header'].length > 40 ? success[i]['header'].substring(0,40) + '... <a href="#">더보기</a>' : success[i]['header']}
				</p>
				<hr>
				<div style="float:left;">
					<a href="#" data-toggle="tooltip" data-placement="bottom" title="관심도">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
						  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"/>
						  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
						</svg>
					</a>
					${success[i]['attentionCnt']}
					&nbsp;&nbsp;
					<a href="#" data-toggle="tooltip" data-placement="bottom" title="조언수">
						<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
						  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
						</svg>
					</a>
					${success[i]['interestCnt']}
				</div>
				</div>
				</div>
				</a>
			`;
		}
		if(page === 0 && success.length === 0){
			innerHtml += `
			<div class="container text-center">
				나의 포트폴리오가 존재하지 않습니다.
			</div>
			`;
		}
		const originHtml = $("#todayPortfolioList").html();
		$("#todayPortfolioList").html(originHtml + innerHtml);
	},(error)=>{
	});
}

