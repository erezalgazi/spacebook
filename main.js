var posts = [];
var i = 0;

$('.add-post').on('click', function (e) {
	e.preventDefault();
	var text = $('#post-name').val();
	var id = i;
	i++;
	newPost(text,id);
	postToDiv();
	
	$('.remove').click(function() {
		$(this).parent().remove();
		var removeIndex = $(this).parent().data().id;
		// console.log(removeIndex);
		posts.splice(removeIndex,1);
		// console.log(posts);

		for (var x = removeIndex; x < posts.length; x++) {
			posts[x].id = posts[x].id - 1;
		}
		// console.log(posts);

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