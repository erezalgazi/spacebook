var posts = [];
var comments = [];
var i = 0;

$('.add-post').on('click', function (e) {
	e.preventDefault();
	var text = $('#post-name').val();
	var id = i;
	newPost(text,id);
	postToDiv();
	i++;
	// $('.add-comment').on('click', function (e) {
	// 	e.preventDefault();
	// 	var userName = $('.user-name').val();
	// 	var comment = $('.comment').val(); 
	// 	newComment(userName,comment);
	// 	postToComment();
	// });	
	bindEvents();
});

var bindEvents = function () 
{
  $('.remove').click(function () {
		$(this).parent().remove();
  	var removeIndex = $(this).parent().data().id;
		for (x = 0; x < posts.length; x++) 
		{
			if (removeIndex === posts[x].id) 
			{
				posts.splice(x,1);
			}
		}
		// i = i-1;
	});
}

var newPost = function (text, id) {
	var post = {
		text: text,
		id: id
	};
	posts.push(post);
};

// var newComment = function (userName, comment) {
// 	var comment = {
// 		userName: userName,
// 		comment: comment
// 	};
// 	comments.push(comment);
// };

var postToDiv = function () {
	$('.posts').find('p').remove();
	// $('.posts').find('div').remove();
	// $('.posts').find('button').remove();
	for (var t = 0; t < posts.length; t++) {
		$('.posts').append('<p class="post" data-id="' + posts[t].id + '"> <a href="#" class="remove">remove</a> ' + posts[t].text + '</p>');
		// $('.posts').append('<div class="form-group"> <input type="text" class="form-control user-name" placeholder="User Name"> </input> </div> <div class="form-group"> <input type="text" class="form-control comment" placeholder="Commet Here"> </div> <button class="btn btn-primary add-comment">Comment</button> <div style="margin:30px;"></div>');
	}
};
// var postToComment = function () {
// 	$('.posts').find('div').remove();
// 	$('.posts').find('button').remove();
// 	for (var t = 0; t < comments.length; t++) {
// 		$('.posts').append('<p> User Name: ' + comments[t].userName + '</p> <p> Comment: ' + comments[t].comment + '</p>');	
// 		$('.posts').append('<div class="form-group"> <input type="text" classs="form-control user-name" placeholder="User Name"> </input> </div> <div class="form-group"> <input type="text" class="form-control comment" placeholder="Commet Here"> </div> <button class="btn btn-primary add-comment">Comment</button> <div style="margin:30px;"></div>');
// 	}
// };
