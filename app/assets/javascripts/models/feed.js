NewsReader.Models.Feed = Backbone.Model.extend({

	parse: function(data){
		var entries = data.entries;
		data.entries = new NewsReader.Collections.Entries(entries, { feed: this });
		return data;
	}

});