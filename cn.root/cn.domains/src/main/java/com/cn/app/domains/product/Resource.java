package com.cn.app.domains.product;

import com.cn.app.domains.BaseDomain;

public class Resource extends BaseDomain {
	
	private int resourceId;
	private String resourceName;
	public int getResourceId() {
		return resourceId;
	}
	public void setResourceId(int resourceId) {
		this.resourceId = resourceId;
	}
	public String getResourceName() {
		return resourceName;
	}
	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}
	
	
}