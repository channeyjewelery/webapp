package com.cn.app.domains;

import com.cn.app.domains.user.User;

public class BaseDomainActivity extends BaseDomain {

	private User createdBy;
	private User updatedBy;

	public User getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(User createdBy) {
		this.createdBy = createdBy;
	}

	public User getUpdatedBy() {
		return updatedBy;
	}

	public void setUpdatedBy(User updatedBy) {
		this.updatedBy = updatedBy;
	}
}
