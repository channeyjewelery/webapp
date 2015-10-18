(function(undefined) 
{
	'use strict';
	var libUrl = rootUrl ? rootUrl + "resources/js/" : "/resources/js/";

	var scripts = 
	[
	 	
	];
	
	for(var i =0; i< scripts.length; i++) 
	{
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = libUrl + scripts[i];
		document.write(script.outerHTML);
	}
})(undefined);