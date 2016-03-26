var SpacebookApp = function () {
  var posts = [
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]},
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]},
    // {text: "Hello world", id: 0, comments:[
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"},
    //   { text: "Man, this is a comment!"}
    // ]}
  ];

  // the current id to assign to a post
  var currentId = 0;
  var $posts = $('.posts');

  var _findPostById = function (id) {
    for (var i = 0; i < posts.length; i += 1) {
      if (posts[i].id === id) {
        return posts[i];
      }
    }
  };

  var createPost = function (text) {
    var post = {
      text: text,
      id: currentId,
      comments: []
    }

    currentId += 1;

    posts.push(post);
  };

  var createComment = function (commentText, currentPost) {
  	var comment = {
  		text: commentText
  	}
  	var $clickedPost = $(currentPost).closest('.post');
    var id = $clickedPost.data().id;
		console.log(id);
  	posts[id].comments.push(comment);
  	console.log(posts);
  };

  var renderPosts = function () {
    $posts.empty();

    var commentsContainer = '<div class="comments-container">' +
    '<input type="text" class="comment-name" placeholder="Post Comment">' +
    '<button class="btn btn-primary add-comment">Post Comment</button> </div> <div style="margin:20px;"></div>';
    for (var i = 0; i < posts.length; i += 1) {
      var post = posts[i];

      $posts.append('<div class="post" data-id=' + post.id + '>'
        + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' + post.text +
        commentsContainer + '</div>');
    }
  }

	// var renderComments = function (currentPost) {
	// 	$posts.find('.comment').remove();
 //  	var $clickedPost = $(currentPost).closest('.post');
 //    var id = $clickedPost.data().id;
	// 	console.log(id);
		
	// 	var commentsContainer = '<div class="comments-container">' +
	//   '<input type="text" class="comment-name" placeholder="Post Comment">' +
	//   '<button class="btn btn-primary add-comment">Post Comment</button> </div> <div style="margin:20px;"></div>';
	//   for (var i = 0; i < posts[id].comments.length; i++) {
	// 		$posts.find('.comments-container').remove();
	// 		$posts.find('comment-name').remove();
	// 		$posts.find('.add-comment').remove();
	// 		$posts.append('<div class="comment"' + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comment</a> '
	// 		 + posts[id].comments[i].text + commentsContainer +'</div');	
	// 	}
	// }; 


  var removePost = function (currentPost) {
    var $clickedPost = $(currentPost).closest('.post');
    console.log($clickedPost);
    var id = $clickedPost.data().id;

    var post = _findPostById(id);

    posts.splice(posts.indexOf(post), 1);
    $clickedPost.remove();
  }

  // var toggleComments = function (currentPost) {
  //   var $clickedPost = $(currentPost).closest('.post');
  //   $clickedPost.find('.comments-container').toggleClass('show');
  // }

  return {
    createPost: createPost,
    renderPosts: renderPosts,
    removePost: removePost,

    createComment: createComment
    // renderComments: renderComments

    // TODO: Implement
    // renderComments: renderComments,

    // TODO: Implement
    // removeComment: removeComment,
    // toggleComments: toggleComments
  }
};

var app = SpacebookApp();

// immediately invoke the render method
app.renderPosts();

// Events
$('.add-post').on('click', function (e) {
  e.preventDefault();

  var text = $('#post-name').val();
  app.createPost(text);
  app.renderPosts();
});

$('.posts').on('click','.add-comment', function(e) {
	e.preventDefault;
	var comment = $(this).prev().val();
	app.createComment(comment, this);
	// app.renderComments(this);
}); 

$('.posts').on('click', '.remove', function () {
  app.removePost(this);
});

// $('.posts').on('click','.show-comments', function () {
//   app.toggleComments(this);
// });


  