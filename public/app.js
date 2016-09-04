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
            template: '<login></login>',
            resolve: {
                currentUser: function(firebase) {
                    debugger
                    var user = firebase.auth().currentUser;
                }
            }
        })
        .otherwise('/home')
});