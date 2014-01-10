NewsReader.Views.FeedsIndex = Backbone.View.extend({

	events: {
		"click button#logout": "logout"
	},

	initialize: function () {

	},

	template: JST["feeds/index"],

	render: function () {
		var contents = this.template({ feeds: this.collection });
		this.$el.html(contents);
		return this;
	},

	logout: function () {
		NewsReader.currentUser = undefined;
		$.ajax({
			url: "/session",
			type: "DELETE",
			success: function(){
				NewsReader.router.navigate("#session/new", {trigger: true});
			}
		});
	}

});