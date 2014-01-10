NewsReader.Views.NewUser = Backbone.View.extend({
	initialize: function () {
		console.log("initializing new user view");
	},

	events: {
		"submit form": "createUser"
	},

	template: JST["users/form"],

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},

	createUser: function(event){
		event.preventDefault();

		$form = $(event.currentTarget);
		formData = $form.serializeJSON();
		user = new NewsReader.Models.User(formData)
		user.save({}, {
			success: function(){
				NewsReader.currentUser = user;
				NewsReader.router.navigate("/", {trigger: true});
			}
		});
	}
});