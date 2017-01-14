/**
 * Created by islam on 1/10/2017.
 */

App.factory('Users', function($http) {

        var usersFactory = {};

        // get all Github Users
        usersFactory.allUsers = function() {
            return $http.get('https://api.github.com/users').success(function (response) {
                    return response;
                });
        };

        // get User by login
        usersFactory.getUser = function(login) {
            return $http.get('https://api.github.com/users/'+login);
        };

        return usersFactory;
    });
