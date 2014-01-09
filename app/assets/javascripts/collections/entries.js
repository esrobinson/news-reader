NewsReader.Collections.Entries = Backbone.Collection.extend({

	initialize: function (models, options) {
		this.feed = options.feed;
	},

	url: function () {
		if (this.feed) {
			return "/feeds/" + this.feed.id + "/entries";
		} else {
			return "something";
		}
	},


	model: NewsReader.Models.Entry

});