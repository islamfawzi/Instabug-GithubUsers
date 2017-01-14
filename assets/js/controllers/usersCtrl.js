/**
 * Created by islam on 1/10/2017.
 */

App.controller('UsersCtrl', ['$scope', '$log', 'Users', 'allUsers', '$routeParams', function($scope, $log, Users, allUsers, $routeParams) {

    $log.info("users Controller")

    var vm = this;
    vm.limit = 10;


    // inject allUsers from route resolve
    vm.users = allUsers.data;
    
    // get user login from url
    vm.userId = $routeParams.userId;


    if(vm.userId != undefined){

     // if userId found get user by Users services

     $log.info(vm.userId);
	 Users.getUser(vm.userId).success(function (response) {
	    vm.user = response;
	 });
    }

    else{

     // if userId not found get the first user of all users
      vm.user = vm.users[0];
      vm.user.name = vm.user.login;
    }

    $log.info(vm.user);

    // load more users by increasinf limit variable
    vm.loadMore = function () {
        $log.info("load more");
        vm.limit += 5;
    };

    // get active user item
    vm.getActive = function(user_login){
     if(user_login == vm.userId){
        return "active-item";
      }
    };

}]);


