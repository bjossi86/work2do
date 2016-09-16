(function() {
    'use strict';

    angular
        .module('app')
        .controller('Login', Login);

    Login.$inject = ['firebase', '$location', '$scope'];
    function Login(firebase, $location, $scope, $rootScope) {
        var vm = this,
            auth = firebase.auth();

        vm.fbLogin = fbLogin;
        vm.signOut = signOut;
        vm.loggedIn = !!vm.currentAuth;

        activate();

        ///////////////////////////////
        function activate() {

        }

        function fbLogin() {
            var provider = new firebase.auth.FacebookAuthProvider();
            auth.signInWithPopup(provider)
            .then(function(result){
                vm.currentAuth = result.user;
                vm.loggedIn = true;
                $scope.$digest();
            })
            .catch((function(err) {
                vm.errorMessage = err.code;
            })
            .bind(this));
        }

        function signOut() {
            auth.signOut().then(function() {
                vm.currentAuth = null;
                vm.loggedIn = false;
                $scope.$digest();
            }, function(error) {
              // An error happened.
            });
        }
    }
})();