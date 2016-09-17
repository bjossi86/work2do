var app = angular.module('app', ['ngRoute', 'firebase']);

app
.run(function(firebase) {
    var config = {
        apiKey: "AIzaSyANuOi06e7zAUaKV5GEjZXdpeewaPhjZ0c",
        authDomain: "work2do-9b0bf.firebaseapp.com",
        databaseURL: "https://work2do-9b0bf.firebaseio.com",
        storageBucket: "work2do-9b0bf.appspot.com",
    };
    firebase.initializeApp(config);
})
.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            template: '<home></home>'
        })
        .when('/login', {
            template: '<login current-auth="$resolve.currentAuth"></login>',
            resolve: {
                currentAuth: function(firebase, $q, $location) {
                    var deferred = $q.defer();
                    firebase.auth().onAuthStateChanged(function(user) {
                        deferred.resolve(user);
                        if (user) {
                            $location.path('/home');
                        }
                    });
                    return deferred.promise;
                }
            }
        })
        .when('/logout', {
            template: '<logout></logout>'
        })
        .otherwise('/home')
});