package com.ljy.podo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

	@GetMapping("index")
	public String index() {
		return "index";
	}

	@GetMapping("join")
	public String join() {
		return "join";
	}

	@GetMapping("joinBefore")
	public String joinBefore() {
		return "joinBefore";
	}
	
	@GetMapping("login")
	public String login() {
		return "login";
	}
	
	@GetMapping("registerPortfolio")
	public String registerPortfolio() {
		return "registerPortfolio";
	}
	
	@GetMapping("updatePortfolio")
	public String updatePortfolio() {
		return "updatePortfolio";
	}
	
	@GetMapping("portfolioList")
	public String portfolioList() {
		return "portfolioList";
	}

	@GetMapping("today-portfolioList")
	public String today_portfolioList() {
		return "today-portfolioList";
	}

	@GetMapping("recommand-portfolioList")
	public String recommand_portfolioList() {
		return "recommand-portfolioList";
	}

	@GetMapping("my-portfolioList")
	public String my_portfolioList() {
		return "my-portfolioList";
	}

	@GetMapping("portfolioDetail")
	public String portfolioDetail() {
		return "portfolioDetail";
	}
}
