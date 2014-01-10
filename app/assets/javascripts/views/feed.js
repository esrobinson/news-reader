NewsReader.Views.Feed = Backbone.View.extend({

	initialize: function(){
		this.listenTo(this.model, "add change reset remove", this.render);
	},

	events: {
		"click button#refresh": "refresh"
	},

	template: JST["feeds/show"],

	render: function () {
		var content = this.template({ feed: this.model });
		this.$el.html(content);
		return this;
	},

	refresh: function () {
		NewsReader.Collections.feeds.fetch();
	}

})