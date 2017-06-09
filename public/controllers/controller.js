var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http){

	var refresh = function(){
		$http.get('/fredpost').success(function(response){
			$scope.posts = response;
		});
	};

	refresh();

	$scope.addPost = function(){
		if(!$scope.post.title || $scope.post.title === '') { return; }
		$scope.post.upvotes = 0;
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


}]);