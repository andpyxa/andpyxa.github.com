angular.module('myApp')
    .controller('MainController', function ($scope, UserService) {
        $scope.signedIn = function (oauth) {

            //This method would be an ideal place to set a redirect to a new route
            //(for instance, the /dashboard route for authenticated users).
            //


            //btDCGMshR_P1vBVvU492zdgt

            UserService.setCurrentUser(oauth)
                .then(function (user) {
                    $scope.user = user;
                });
            console.log(oauth);
            
        }
    });

