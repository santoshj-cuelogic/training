var routerApp = angular.module('routerApp',['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');
	$stateProvider
	// HOME STATES AND NESTED VIEWS ========================================
	.state('home',{
		url:'/home',
		templateUrl:'partial-home.html'
	})
	// nested list with custom controller
	.state('home.list',{
		url:'/list',
		templateUrl:'partial-home-list.html',
		controller: function ($scope) {
			$scope.dogs = ['Bernese', 'Husky', 'Goldendoodle']
		}
	})
	// nested list with just some random string data
	.state('home.paragraph', {
		url:'/paragraph',
		template:'I could sure use a drink right now.'
	})
	// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    .state('about', {
    	url:'/about',
    	views: {
    		// the main template will be placed here (relatively named)
            '': { templateUrl: 'partial-about.html' },
            'columnOne@about' : {
            	template : 'Look I am a column One',
            	controller : 'oneController'
            },
            // for column two, we'll define a separate controller
            'columnTwo@about' : {
            	templateUrl : 'table-data.html',
            	controller : 'scotchController'
            }
    	}    	
    });
});

routerApp.controller('oneController', function($scope){	
      	$scope.cities = ["Pune","Mumbai","Nashik"];
      	$scope.states = ["MH","UP","MP"];
      	
      	//Communicating between controller using emit = dispatches an event name upwards through the scope hierarchy
       	$scope.$on('eventName', function (event, args) {
			$scope.message = args.message;
			console.log($scope.message);
		});

       	//communicating between controller using broadcast = It dispatches an event name downwards to all child scopes (and their children)
		$scope.handleClick1 = function (msg) {
			$scope.$broadcast('eventName1', { message: msg });
		};
});

routerApp.controller('scotchController', function($scope){
	$scope.message = 'test';
	$scope.states = ["GJ","KA","RJ"];

	//Communicating between controller using emit
	$scope.handleClick = function (msg) {
		$scope.$emit('eventName', { message: msg });
	};

	//Communicating using broadcast
	$scope.$on('eventName1', function (event, args) {
		$scope.message = args.message;
		console.log($scope.message);
	});

	$scope.scotches = [{
		name: 'VAT69',
        price: 50
	},
	{
		name: 'Chivas Regal Royal',
        price: 600
	},
	{
		name: 'Glenfiddich 1937',
        price: 200
	}];

	$scope.whisky = [{
		name : 'RS',
		price : 20
	}]
});