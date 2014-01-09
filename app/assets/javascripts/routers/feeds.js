NewsReader.Routers.Feeds = Backbone.Router.extend({

	initialize: function(options){
		this.$el = options.$el;
	},

	routes: {
		"": "feedsIndex",
		"feeds/:id": "feedShow"
	},

	feedsIndex: function () {
		var that = this
		NewsReader.Collections.feeds.fetch({
			success: function(){
				var view = new NewsReader.Views.FeedsIndex({
					 collection: NewsReader.Collections.feeds
				 });
				 that._swapView(view);
			}
		});
	},

	feedShow: function (id) {
		var view = new NewsReader.Views.Feed({
			 model: NewsReader.Collections.feeds.get(id)
		 });
		 this._swapView(view);
	},

	_swapView: function (view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$el.html(view.render().$el);
	}
});








