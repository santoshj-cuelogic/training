angular.module('main.controller',['services'])
      .controller('mainCtrl',['$rootScope', '$location','loginService',mainController]);

function mainController($rootScope, $location,loginService) {
    var main = this;
    main.user = loginService.getStorage();
    
    if(!main.user) {
        $location.path('/login');
    }
    main.logout = function (){
        main.user = null;
        loginService.logout();
        $location.path('/login');
    }
    
    
    $rootScope.$on('authorized', function() {
        main.user = loginService.getStorage();
    });

    $rootScope.$on('unauthorized', function() {
        main.logout();
    });
    
};