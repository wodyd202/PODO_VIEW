let page = 0;
let size = 9;
let totalPage = 0;

getRecommandPortfolio(page);

function getRecommandPortfolio(page){
	const email = localStorage.getItem('email');
	recommandPortfolio({
		page : page,
		size : size
	},(res)=>{
		const success = res;
		$("#totalElement").text(success.length);
		let innerHtml = ``;
		for(let i =0;i<success.length;i++){
			innerHtml += `
				<div class="col-md-6 col-lg-4 wow bounceInUp" data-aos="zoom-in" data-aos-delay="100" style="cursor:pointer;">
				<a href="./portfolioDetail?seq=${success[i]['id']}">
				<div class="box" style="min-height:200px;">
				<div id="carousel_${i}" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
				</div>
				<a class="carousel-control-prev" href="#carousel_${i}" data-slide="prev">
				<span class="carousel-control-prev-icon"></span>
				</a>
				<a class="carousel-control-next" href="#carousel_${i}" data-slide="next">
				<span class="carousel-control-next-icon"></span>
				</a>
				</div>
				<h4 class="title" style="margin-top: 20px;">
				<a href="./portfolioDetail?seq=${success[i]['id']}">
				${success[i]['title']}</a>
				</h4>
				<hr>
				<p class="description" style="min-height:100px;">
				${success[i]['header'].length > 40 ? success[i]['header'].substring(0,40) + '... <a href="#">더보기</a>' : success[i]['header']}
				</p>
				<hr>
				</div>
				</a>
				</div>
			`;
		}
		if(page === 0 && success.length === 0){
			innerHtml += `
			<div class="container text-center">
				나의 포트폴리오가 존재하지 않습니다.
			</div>
			`;
		}
		const originHtml = $("#recommandPortfolioList").html();
		$("#recommandPortfolioList").html(originHtml + innerHtml);
	},(error)=>{
	});
}

