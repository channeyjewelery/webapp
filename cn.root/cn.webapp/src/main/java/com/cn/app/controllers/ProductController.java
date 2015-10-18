package com.cn.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cn.app.utils.ScreenUtils;

@Controller
@RequestMapping(value="product")
public class ProductController {
	
	@RequestMapping(value="/")
	public String root() {
		return index();
	}
	
	@RequestMapping(value="/index")
	public String index() {
		return ScreenUtils.PRODUCT_INDEX;
	}
}
