(function() {
    'use strict';

    angular
        .module('app')
        .controller('Login', Login);

    Login.$inject = ['firebase', '$location', '$scope'];
    function Login(firebase, $location, $scope, $rootScope) {
        var vm = this;

        vm.anonLogin = anonLogin;
        vm.fbLogin = fbLogin;
        vm.signOut = signOut;

        activate();

        ///////////////////////////////
        function activate() {
            // vm.currentUser = firebase.auth().currentUser;
        }

        // firebase.auth().onAuthStateChanged(function(user) {
        //     vm.currentUser = user;
        // })

        function anonLogin() {
            firebase.auth().signInAnonymously()
            .then(function(response){
                $location.path('/home');
                console.log(response);
            })
            .catch((function(err) {
                console.log('not logged in');
                this.errorMessage = err.code;
            })
            .bind(this));
        }

        function fbLogin() {
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider)
            .then(function(result){
                var token = result.credential.accessToken;
                var user = result.user;
                console.log('token', token);
            })
            .catch((function(err) {
                console.log('not logged in');
                this.errorMessage = err.code;
            })
            .bind(this));
        }

        function signOut() {
            firebase.auth().signOut().then(function() {
                vm.currentUser = null;
                console.log('signed out!');
              // Sign-out successful.
            }, function(error) {
              // An error happened.
            });
        }
    }
})();