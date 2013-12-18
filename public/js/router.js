(function($) {
	namespace("fe");
	fe.Router = function(controller) {
		this.controller = controller;
	};

	$.extend(fe.Router.prototype, {
		start: function() {
			var controller = this.controller;
			var _appRouter = Backbone.Router.extend({
				routes: {
					"catalog/:cata": "goToCatalog"
				},

				goToCatalog: function(cata) {
					controller.goToView(cata);
				}
			});
			new _appRouter();
			Backbone.history.start();
		}
	});

})(jQuery);