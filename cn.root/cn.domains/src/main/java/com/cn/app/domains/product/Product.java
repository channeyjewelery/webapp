package com.cn.app.domains.product;

import java.util.List;

import com.cn.app.domains.BaseDomainActivity;

/**
 * Class Product
 * @author chhornponleu@gmail.com
 * <br>This class contain basic information for product and its attribute (resource List)
 */
public class Product extends BaseDomainActivity {

	private int productId;
	private String productBarCode;
	private String productName;
	private List<ProductResource> resourceList;

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductBarCode() {
		return productBarCode;
	}

	public void setProductBarCode(String productBarCode) {
		this.productBarCode = productBarCode;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public List<ProductResource> getResourceList() {
		return resourceList;
	}

	public void setResourceList(List<ProductResource> resourceList) {
		this.resourceList = resourceList;
	}

}
