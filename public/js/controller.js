(function($) {
	namespace("fe");
	fe.Controller = function(opts) {
		$.extend(this, opts);
		_.extend(this,Backbone.Events);
	};

	$.extend(fe.Controller.prototype, {
		initView: function() {
			var that = this;
			this.naviView = new fe.NaviView();
			this.leftNaviView = new fe.LeftNaviView();
			this.contentView = new fe.ContentView();
			app.service.getNaviCatalogs(function(naviItems) {
				that.naviView.model = naviItems;
				that.naviView.render();
			});
			this.listenTo(this.naviView, 'onNavigation',function(subCatas){
				that.leftNaviView.model = subCatas;
				that.leftNaviView.render();
			});

			this.listenTo(this.leftNaviView, 'onNavigation',function(src){
				that.contentView.src = src;
				that.contentView.render();
			});
		}
	});
})(jQuery)