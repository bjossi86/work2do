angular
    .module('app')
    .component('logout', {
        controller: function(firebase, $location) {
            var auth = firebase.auth();
            auth.signOut().then(function() {
                $location.path('/login');
                // vm.currentAuth = null;
                // vm.loggedIn = false;
                // $scope.$digest();
            }, function(error) {
              // An error happened.
            });
        }
    });