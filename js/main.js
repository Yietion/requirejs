require.config({
    baseUrl:"/requirejs/js/",
    paths: {
    	"jquery": "jquery.min",
        "dateUtil": "dateUtil"
    }
});


require(["jquery","dateUtil"], function($, dateUtil){
	console.log(requirejs.s.contexts._.config.config.name);
});