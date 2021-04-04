countAllInterest((success)=>{
	$("#interestCount").text(numberWithCommas(success));
},(error)=>{
});

countAllPortfolio((success)=>{
	$("#portfolioCount").text(numberWithCommas(success));
},(error)=>{
});

countAllUser((success)=>{
	$("#userCount").text(numberWithCommas(success));
},(error)=>{
});

function numberWithCommas(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }

