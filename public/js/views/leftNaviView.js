(function($){
	namespace("fe");
	fe.LeftNaviView = Backbone.View.extend({
		el: '.content .leftContainer>ul.nav',
		initialize: function(options) {
			Backbone.View.prototype.initialize.apply(this, arguments); // call super initialize
			$.extend(this, options);
		},

		render: function(){
			this.$el.empty();
			_.each(this.model, function(naviItem, index) {
				var itemView = new fe.LeftNaviItem({
					model: naviItem,
					index: index
				});
				this.listenTo(itemView,'onNavigation',function(src){
					this.trigger('onNavigation', src);
				});
				
				this.$el.append(itemView.render().$el);
				if(index == 0){
					itemView.onClick();
				}
			}, this);
			return this;
		}
	});

	fe.LeftNaviItem = Backbone.View.extend({
		events: {
			'click a': "onClick"
		},

		onClick: function(){
			this.trigger('onNavigation', this.model.value);
		    $('.leftContainer li').removeClass('active');
		    this.$el.addClass('active');
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