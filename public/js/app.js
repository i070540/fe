(function($){
	namespace("fe");
	fe.App = function(opts) {
		$.extend(this, opts);
	};

	$.extend(fe.App.prototype, {
		getController: function(){
			if(!this.controller ){
				this.controller = new fe.Controller();
			}
			return this.controller;
		},

		initService: function(){
			if(!this.service){
				this.service = new fe.Service();
			}
		},

		start:function(){
			this.router = new fe.Router(this.getController());
			this.router.start();
			this.initService();
			this.getController().initView();			
		}
	});
	
	
})(jQuery);