(function($) {
	namespace('fe');
	fe.ContentView = Backbone.View.extend({
		el: '.rightContainer',
		initialize: function(options) {
			Backbone.View.prototype.initialize.apply(this, arguments);
			$.extend(this, options);
		},

		iFrameHeight: function() {
			var ifm = this;
			if (ifm != null) {
				/*if (ifm.contentDocument && ifm.contentDocument.body.offsetHeight) {
					ifm.height = ifm.contentDocument.body.offsetHeight;
				} else if (ifm.Document && ifm.Document.body.scrollHeight) {
					ifm.height = ifm.Document.body.scrollHeight;
				}*/
				//this.contentWindow.document.body.append($('<iframe id="proxy_iframe" height="0" width="0" src="http://localhost:3000/proxy" style="display:none" ></iframe> '));
				//this.contentWindow.document.body.append($('<script type="text/javascript">var b_width = Math.max(document.documentElement.clientWidth,document.body.clientWidth); var b_height = Math.max(document.documentElement.clientHeight,document.body.clientHeight); var c_iframe = document.getElementById("proxy_iframe"); c_iframe.src = c_iframe.src+"#"+b_width+"|"+b_height; alert(b_height) ;</script> '));
			}
		},

		render: function() {
			this.$el.empty();
			this.$el.html(fe.Template.View.ContentFrame(this.src));
			this.$el.find('iframe')[0].onload = this.iFrameHeight;
			return this;
		}

	});
})(jQuery);