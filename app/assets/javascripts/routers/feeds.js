NewsReader.Routers.Feeds = Backbone.Router.extend({

	initialize: function(options){
		this.$el = options.$el;
	},

	routes: {
		"": "feedsIndex",
		"feeds/:id": "feedShow",
		"feeds/:feed_id/entries/:id": "entryShow",
		"users/new": "newUser",
		"session/new": "newSession"
	},

	feedsIndex: function () {
		if(this._requireLoggedin()){
			var view = new NewsReader.Views.FeedsIndex({
				 collection: NewsReader.Collections.feeds
			 });
			 this._swapView(view);
		}
	},

	feedShow: function (id) {
		if(this._requireLoggedin()){
			var view = new NewsReader.Views.Feed({
				 model: NewsReader.Collections.feeds.get(id)
			 });
			 this._swapView(view);
		 }
	},

	entryShow: function (feed_id, id) {
		if(this._requireLoggedin()){
			var feed = NewsReader.Collections.feeds.get(feed_id)
			var view = new NewsReader.Views.Entry({
				model: feed.get('entries').get(id)
			});
			this._swapView(view);
		}
	},

	newUser: function () {
		var view = new NewsReader.Views.NewUser;
		this._swapView(view);
	},

	newSession: function () {
		var view = new NewsReader.Views.NewSession;
		this._swapView(view);
	},

	_swapView: function (view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$el.html(view.render().$el);
	},

	_requireLoggedin: function(){
		if(!NewsReader.currentUser) {
			this.navigate("/session/new", {trigger: true});
			return false;
		}
		return true;
	}
});








