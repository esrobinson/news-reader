window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		NewsReader.Collections.feeds = new NewsReader.Collections.Feeds;
		new NewsReader.Routers.Feeds({ $el: $('#content') });
		Backbone.history.start();
    // alert('Hello from Backbone!');
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
