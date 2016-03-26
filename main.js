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

  var createComment = function (commentText) {
  	var comment = {
  		text: commentText
  	}
  	posts[0].comments.push(comment);
  	// console.log (posts[0]);
  };

  var renderPosts = function () {
    $posts.empty();

    for (var i = 0; i < posts.length; i += 1) {
      var post = posts[i];

      var commentsContainer = '<div class="comments-container">' +
      '<input type="text" class="comment-name" placeholder="Post Comment">' +
      '<button class="btn btn-primary add-comment">Post Comment</button> </div> <div style="margin:20px;"></div>';

      $posts.append('<div class="post" data-id=' + post.id + '>'
        + '<a href="#" class="remove">remove</a> ' + '<a href="#" class="show-comments">comments</a> ' + post.text +
        commentsContainer + '</div>');
    }
  }

var renderComments = function () {
	for (var i =0; i<posts[0].comment.length; i++) {
		$posts.append()
	}
} 


  var removePost = function (currentPost) {
    var $clickedPost = $(currentPost).closest('.post');
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
	$('.add-comment').on('click',function(e) {
		e.preventDefault;
		var comment = $('.comment-name').val();
		app.createComment(comment);
	}); 
});

$('.posts').on('click', '.remove', function () {
  app.removePost(this);
});

// $('.posts').on('click','.show-comments', function () {
//   app.toggleComments(this);
// });


  