var posts = [];
var i = 0;

$('.add-post').on('click', function (e) {
	e.preventDefault();
	var text = $('#post-name').val();
	i++;
	var id = i;
	newPost(text,id);
	postToDiv();
	
	$('.remove').click(function() {
		$(this).parent().remove();
	});

});


var newPost = function (text, id) {
	var post = {
		text: text,
		id: id
	}
	posts.push(post);
};

var postToDiv = function () {
	$('.posts').find('p').remove();
	for (var t = 0; t < posts.length; t++) {
		$('.posts').append('<p class="post" data-id="' + posts[t].id + '"> <a href="#" class="remove">remove</a> ' + posts[t].text + '</p>');
	}
}