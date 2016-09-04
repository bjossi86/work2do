angular.module('app').component('login', {
    templateUrl: '/security/login.html',
    controller: function(firebase, $location) {
        this.anonLogin = function() {
            firebase.auth().signInAnonymously()
            .then(function(response){
                $location.path('/home');
                console.log('logged in');
            })
            .catch((function(err) {
                console.log('not logged in');
                this.errorMessage = err.code;
            })
            .bind(this));
        }

        this.fbLogin = function() {
            var provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider)
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
    }
})