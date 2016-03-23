var posts = [];
var i = 0;

$('.add-post').on('click', function (e) {
	e.preventDefault();
	var text = $('#post-name').val();
	var id = i;
	newPost(text,id);
	postToDiv();
	console.log(posts[i].id);
	i++;
	bindEvents();
});

var bindEvents = function () 
{
  $('.remove').click(function () {
		$(this).parent().remove();
  	var removeIndex = $(this).parent().data().id;
		// var removeIndex = posts[removeIndex].id;
		console.log(removeIndex);
		for (x = 0; x < posts.length; x++) 
		{
			if (removeIndex === posts[x].id) 
			{
				posts.splice(x,1);
			}
		}
		console.log(posts);
		i--;
	});
}



// $('.remove').click(function() {
// 	var removeIndex = $(this).parent().data().id;
// 	// console.log(removeIndex);
// 	posts.splice(removeIndex,1);
// 	console.log(posts);

// 	for (var x = removeIndex; x < posts.length; x++) {
// 		posts[x].id = posts[x].id - 1;
// 	}
// 	console.log(posts);
// 		$(this).parent().remove();
// });

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