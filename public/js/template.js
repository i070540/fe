(function($) {
	namespace("fe.Template");
	_.templateSettings = {
		interpolate: /\<\@\=(.+?)\@\>/gim,
		evaluate: /\<\@(.+?)\@\>/gim,
		escape: /\<\@\-(.+?)\@\>/gim
	};

	fe.Template.View = {
		NaviItem: function(model) {
			return _.template($("#naviItem").html(), {
				model: model
			});
		},

		ContentFrame: function(src) {
			return _.template($("#contentFrame").html(), {
				src: src
			});
		}
	};

}(jQuery));