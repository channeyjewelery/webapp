package com.channey.app.daos.product;

import java.util.List;

public interface BaseDAO<T> {

	public List<T> getAll();

	public T getById(String id);

	public T get(T entity);

	public int save(T entity);

	public int update(T entity);

	public int delete();
}
