/**
 * Created by islam on 1/10/2017.
 */

var App = angular.module('App', ['ngRoute']);

App.run(['$rootScope','$location', '$routeParams', function($rootScope, $location, $routeParams) {
    $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {

       console.log('Current route name: ' + $location.path());

       var current = $location.path();
       
       if(current == '/home' || current == '/'){
	        console.log('home page');
            $rootScope.active_menu = 'home';
            $rootScope.title = "Home";
       }else if(current.indexOf('/users') > -1){
	        console.log('users page');
	        $rootScope.active_menu = 'users';
            $rootScope.title = "Users";
       }	
       else if (current == '/about'){
	        console.log('about page');
	        $rootScope.active_menu = 'about';
            $rootScope.title = "About";
       }
    });

    
    $rootScope.getActiveMenu = function(menu) {
        if(menu ==  $rootScope.active_menu){
          return 'active';        
	}
    };

  }]);
