(function($) {
	namespace("fe");
	fe.NaviView = Backbone.View.extend({
		el: '.container .naviBar>ul',
		initialize: function(options) {
			Backbone.View.prototype.initialize.apply(this, arguments);
			$.extend(this, options);
		},

		render: function() {
			this.$el.empty();
			_.each(this.model, function(naviItem, index) {
				var itemView = new fe.NaviItem({
					model: naviItem,
					index: index
				});
				this.listenTo(itemView,'onNavigation',function(subCatas){
					this.trigger('onNavigation', subCatas);
				});
				this.$el.append(itemView.render().$el);
				if(index == 0){
					itemView.onClick();
				}
			}, this);
			return this;
		}
	});

	fe.NaviItem = Backbone.View.extend({
		events: {
			'click a': "onClick"
		},

		onClick: function(){
			this.trigger('onNavigation', this.model.subCatas);
		},

		initialize: function(options) {
			Backbone.View.prototype.initialize.apply(this, arguments); // call super initialize
			$.extend(this, options);
		},

		render: function() {
			this.$el.empty();
			this.setElement(fe.Template.View.NaviItem(this.model));
			if (this.index == 0) {
				this.$el.addClass('active');
			}
			return this;

		}


	});
})(jQuery);