$(document).ready(function() {
	var head = document.getElementsByTagName('head')[0];
	var loadJs = function(path, callback) {
		var el = document.createElement("script");
		var loaded = false;
		el.onload = el.onreadystatechange = function () {
			if ((el.readyState && el.readyState !== "complete" && el.readyState !== "loaded") || loaded) {
				return false;
			}
			el.onload = el.onreadystatechange = null;
			var loaded = true;
			callback();
			// done!
		};
		el.async = true;
		el.src = path;
		head.insertBefore(el, head.firstChild);
	}
	
	var loadCss = function(path) {
		var el   = document.createElement("link");
		el.type  = "text/css";
		el.rel   = "stylesheet";
		el.async = true;
		el.href  = path;
		head.insertBefore(el, head.firstChild);
	}
	
	var host = "https://github.com/abril/markitup_codebase/raw/origin/markitup/";
	loadCss(host + "skins/markitup/style.css");
	loadCss(host + "sets/markdown/style.css");
	loadJs(host + "jquery.markitup.js", function() {
		loadJs(host + "sets/markdown/set.js", function() {
			$('#page_content').markItUp(myMarkdownSettings);
		});
	});
});