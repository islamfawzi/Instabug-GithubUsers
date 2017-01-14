/**
 * Created by islam on 1/10/2017.
 */

App.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'pages/home.html',
    }).
    when('/', {
        templateUrl: 'pages/home.html',
    }).
    when('/users', {
        templateUrl: 'pages/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'vm',
        resolve: {
            allUsers: function(Users) {
                return Users.allUsers();
            }
        }
    }).
    when('/users/:userId', {
        templateUrl: 'pages/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'vm',
        resolve: {
            allUsers: function(Users) {
                return Users.allUsers();
            }
        }
    }).
    when('/about', {
        templateUrl: 'pages/about.html'
    }).
    otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
}]);
