(function($){
	namespace('fe');
	fe.Service = function(){
		this.getNaviCatalogs = function(successHandler, errorHandler,alwaysHandler){
			this.get('catalog/',{
				success:successHandler,
				error:errorHandler,
				complete:alwaysHandler
			});
		}
	};

	$.extend(fe.Service.prototype,{

		apiPath:"/api/",
        defaultOption:{
        	type:'GET',
        	dataType:'json',
        	context:this
        },

		get: function(url,options){
			$.ajax(_.extend(this.defaultOption,{
				url: this.apiPath + url,
			},options));
		},

		post: function(url,options){
			$.ajax(_.extend(this.defaultOption,{
				url: this.apiPath + url,
				type:'POST'
			},options));
		}
	});

})(jQuery);