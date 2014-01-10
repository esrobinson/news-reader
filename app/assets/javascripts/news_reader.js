window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		if (typeof(CURRENT_USER) != 'undefined') {
			NewsReader.currentUser = new NewsReader.Models.User(CURRENT_USER);
		}
		NewsReader.Collections.feeds = new NewsReader.Collections.Feeds(INITIAL_FEEDS, {parse:true});
		this.router = new NewsReader.Routers.Feeds({ $el: $('#content') });
		Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
