NewsReader.Views.NewSession = Backbone.View.extend({
	initialize: function () {
	},

	events: {
		"submit form": "createSession"
	},

	template: JST["session/form"],

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	},

	createSession: function(event){
		event.preventDefault();

		$form = $(event.currentTarget);
		formData = $form.serializeJSON();

		$.ajax({
			url: "/session",
			type: "POST",
			data: formData,
			success: function(data){
				NewsReader.currentUser = new NewsReader.Models.User(data);
				NewsReader.router.navigate("/", {trigger: true});
			},
			error: function (data, errors) {
				alert(errors);
			}
		});
	}
});