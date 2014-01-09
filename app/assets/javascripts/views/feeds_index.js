NewsReader.Views.FeedsIndex = Backbone.View.extend({

	initialize: function () {

	},

	template: JST["feeds/index"],

	render: function () {
		var contents = this.template({ feeds: this.collection });
		this.$el.html(contents);
		return this;
	}
});