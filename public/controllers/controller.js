var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', '$window', function($scope, $http, $window){

	var setUsername = function(){
		if(!($window.sessionStorage.getItem("username")))
			$window.sessionStorage.setItem( "username", prompt("Enter a user name: ", "user"));
	};
	setUsername();
	
	var refresh = function(){
		$http.get('/fredpost').success(function(response){
			$scope.posts = response;
		});
	};
	refresh();

	$scope.addPost = function(){
		if(!$scope.post.title || $scope.post.title === '') { return; }
		$scope.post.upvotes = 0;
		$scope.post.comments = [];
		$http.post('/fredpost', $scope.post).success(function(response){
		});
		refresh();
		$scope.title = ''; 
		$scope.link = '';
	};

	$scope.incrementUpvotes = function(post){
		post.upvotes += 1;
		$http.put('/fredpost/' + post._id, post).success(function(response){
		});
	};

	$scope.postRoute = function(x){
		$window.sessionStorage.setItem("data", JSON.stringify(x));
		console.log($window.sessionStorage.getItem("data"));
		var newWindows = window.open("posts.html","_self");
	};
}]);

myApp.controller('PostsCtrl', ['$scope', '$window', '$http', function($scope, $window, $http){

	var x = JSON.parse($window.sessionStorage.getItem("data"));
	$scope.post = x;

	var refresh = function(){
		$http.get('/fredpost/posts/' + $scope.post._id).success(function(response){
			$scope.post = response;
			$window.sessionStorage.setItem("data", JSON.stringify(response));
		});
	};
	refresh();

	$scope.addComment = function(){
		if($scope.body === '') { return; }
		
		$scope.post.comments.push({
			body: $scope.body,
			author: $window.sessionStorage.getItem("username"),
			upvotes: 0
		});

		$http.put('/fredpost/posts/' + $scope.post._id, $scope.post).success(function(response){
			// $window.sessionStorage.setItem("data", JSON.stringify(response));
		});
		$scope.body = '';
		refresh();
	};

	$scope.incrementUpvotes = function(comment){
		comment.upvotes += 1;

		$http.put('/fredpost/posts/' + $scope.post._id, $scope.post).success(function(response){
			// $window.sessionStorage.setItem("data", JSON.stringify(response));
		});	
		refresh();
	};
}]);