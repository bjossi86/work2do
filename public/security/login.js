angular
    .module('app')
    .component('login', {
        templateUrl: '/security/login.html',
        bindings: {
            currentAuth: '='
        },
        controller: 'Login',
        controllerAs: 'vm'
    })