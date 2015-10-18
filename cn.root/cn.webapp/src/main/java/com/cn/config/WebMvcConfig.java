package com.cn.config;

import java.util.Locale;
import java.util.Properties;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.http.MediaType;
import org.springframework.ui.freemarker.FreeMarkerConfigurationFactoryBean;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.handler.SimpleMappingExceptionResolver;
import org.springframework.web.servlet.i18n.CookieLocaleResolver;
import org.springframework.web.servlet.i18n.LocaleChangeInterceptor;
import org.springframework.web.servlet.view.freemarker.FreeMarkerConfigurer;
import org.springframework.web.servlet.view.freemarker.FreeMarkerViewResolver;

//@Import({BeanConfigurers.class})
@Configuration
@EnableWebMvc
@ComponentScan(basePackages="com.cn.app.controllers")
public class WebMvcConfig extends WebMvcConfigurerAdapter {	
	
	@Override
	public void configureDefaultServletHandling(DefaultServletHandlerConfigurer configurer) {
		configurer.enable();
	}
	
	@Override
	public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
		configurer
			.useJaf(true)
			.favorPathExtension(false)
			.ignoreAcceptHeader(true)
			.ignoreUnknownPathExtensions(true)
			.defaultContentType(MediaType.APPLICATION_JSON)
			.mediaType("xml", MediaType.APPLICATION_XML)
			.mediaType("html", MediaType.APPLICATION_XHTML_XML)
			.mediaType("json", MediaType.APPLICATION_JSON);
	}
	
	@Bean
	public ViewResolver viewResolver() {
		FreeMarkerViewResolver resolver = new FreeMarkerViewResolver();
		resolver.setCache(false);// TODO update to true in release
		resolver.setPrefix("");
		resolver.setSuffix(".ftl");
		resolver.setContentType("text/html; charset=UTF-8");
		return resolver;
	}

	@Bean
	public FreeMarkerConfigurer freemarkerConfig() throws Exception {
		FreeMarkerConfigurer result = new FreeMarkerConfigurer();
		result.setTemplateLoaderPath("/WEB-INF/views/");
		result.setDefaultEncoding("UTF-8");
		return result;
	}

	@Bean
	public FreeMarkerConfigurationFactoryBean freeMarkerConfigurationFactoryBean() {
		FreeMarkerConfigurationFactoryBean facBean = new FreeMarkerConfigurationFactoryBean();
		facBean.setTemplateLoaderPath("/WEB-INF/email/");
		return facBean;
	}

	@Bean
	public SimpleMappingExceptionResolver exceptionResolver() {
		Properties statusCodes = new Properties();
		statusCodes.put("error/404", "404");
		statusCodes.put("error/500", "500");

		SimpleMappingExceptionResolver exceptionResolver = new SimpleMappingExceptionResolver();
		exceptionResolver.setStatusCodes(statusCodes);
		return exceptionResolver;
	}
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
	    LocaleChangeInterceptor localeChangeInterceptor = new LocaleChangeInterceptor();
	    localeChangeInterceptor.setParamName("lang");
	    registry.addInterceptor(localeChangeInterceptor);
	}
	@Bean
	public LocaleResolver localeResolver() {
	    CookieLocaleResolver cookieLocaleResolver = new CookieLocaleResolver();
	    cookieLocaleResolver.setDefaultLocale(new Locale("en"));
	    return cookieLocaleResolver;
	}
	
	
	@Bean
	public ReloadableResourceBundleMessageSource messageSource() {
		ReloadableResourceBundleMessageSource source = new ReloadableResourceBundleMessageSource();
		source.setBasename("classpath:messages/messages");
		source.setDefaultEncoding("UTF-8");
		return source;
	}
	
	// @Bean
	// public RequestMappingHandlerAdapter annotationMethodHandlerAdapter()
	// {
	// final RequestMappingHandlerAdapter annotationMethodHandlerAdapter = new
	// RequestMappingHandlerAdapter();
	// final MappingJackson2HttpMessageConverter
	// mappingJacksonHttpMessageConverter = new
	// MappingJackson2HttpMessageConverter();
	//
	// List<HttpMessageConverter<?>> httpMessageConverter = new
	// ArrayList<HttpMessageConverter<?>>();
	// httpMessageConverter.add(mappingJacksonHttpMessageConverter);
	//
	// String[] supportedHttpMethods = { "POST", "GET", "HEAD" };
	//
	// annotationMethodHandlerAdapter.setMessageConverters(httpMessageConverter);
	// annotationMethodHandlerAdapter.setSupportedMethods(supportedHttpMethods);
	//
	// return annotationMethodHandlerAdapter;
	// }
}
