var myApp = angular.module('myApp', []);

myApp.factory('sharingData', [ function(){
	var o = {};
		// posts: []
	// };
	return o;
}]);

myApp.controller('AppCtrl', ['$scope', '$http', 'sharingData', '$rootScope', function($scope, $http, sharingData, $rootScope){

	var refresh = function(){
		$http.get('/fredpost').success(function(response){
			$scope.posts = response;
		});
	};

	refresh();

	$scope.addPost = function(){
		if(!$scope.post.title || $scope.post.title === '') { return; }
		$scope.post.upvotes = 0;
		$scope.post.comments = {author: 'Joe', body: 'Cool post!', upvotes: 0};
			// {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
		$http.post('/fredpost', $scope.post).success(function(response){
			console.log("Success");
			refresh();
		});

		$scope.title = ''; 
		$scope.link = '';
	};

	$scope.incrementUpvotes = function(post){
		post.upvotes += 1;
		console.log(post._id);
		$http.put('fredpost/' + post._id, post).success(function(response){
			console.log("Success");
		});
	};

	$scope.postRoute = function(x){

		$rootScope.$emit("sharing", "blah");

		var newWindows = window.open("posts.html","_self");

	};

}]);

myApp.controller('PostsCtrl', ['$scope', 'sharingData', '$rootScope', function($scope, sharingData, $rootScope){

	$rootScope.$on('sharing', function(event, data){
        console.log('blah');
    });

    console.log('blah');

}]);