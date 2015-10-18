package com.cn.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cn.app.utils.ScreenUtils;

@Controller
public class HomeController {
	
	@RequestMapping(value="/")
	public String index() {
		return ScreenUtils.DASHBOARD;
	}
}
