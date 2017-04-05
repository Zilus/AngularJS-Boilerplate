;(function() {


  /**
   * Definition of the main app module and its dependencies
   */
  angular
    .module('myApp', [
      'ngRoute',
      'ngAnimate'
    ])
    .config(config);

  // safe dependency injection
  // this prevents minification issues
  config.$inject = ['$routeProvider', '$locationProvider'];

  /**
   * App routing
   *
   * You can leave it here in the config section or take it out
   * into separate file
   *
   */
  function config($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true)

    // routes
    $routeProvider
      .when('/', {
        templateUrl: 'views/slide1.html',
        controller: 'view1Ctrl'
      })
      .when('/slide2', {
        templateUrl: 'views/slide2.html',
        controller: 'view2Ctrl'
      })
      .when('/slide3', {
        templateUrl: 'views/slide3.html',
        controller: 'view3Ctrl'
      })
      .when('/slide4', {
        templateUrl: 'views/slide4.html',
        controller: 'view4Ctrl'
      })
      .when('/slide5', {
        templateUrl: 'views/slide5.html',
        controller: 'view5Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

  angular
    .module('myApp').controller("view1Ctrl", view1Ctrl);
      function view1Ctrl($scope) {
        var barra = document.querySelector('.barra');
        barra.style.visibility="hidden";

        TweenMax.to("#puntos-1", 1, {opacity: .25, display:'block', ease: Power2.easeOut, delay: 1.2});
        TweenMax.to("#puntos-2", .01, {opacity: 0, display:'none', ease: Power2.easeOut, delay: 1.2});
        TweenMax.from(".video_close", 1, {opacity: 0, ease: Power2.easeOut, delay: 1});
        TweenMax.from(".scroll", 1.3, {opacity: 0, ease: Power2.easeOut, delay: 2});
        TweenMax.from(".logo", 1, {opacity: 0, ease: Power2.easeOut, delay: 1});
        TweenMax.from(".cepsa", 1, {opacity: 0, ease: Power2.easeOut, delay: 1});
        TweenMax.from("#intro-p", 1, {left: 1350, opacity: 0, position: 'relative', ease: Power2.easeOut, delay: 1.3});
        TweenMax.from("#intro-h1", 1, {top: 50, opacity: 0, position: 'relative', ease: Power3.easeOut, delay: 2});
        TweenMax.from("#intro-btn", 1, {scale: 0, opacity: 0, ease: Elastic.easeOut.config(1, 0.3), delay: 2.3})
      }

  angular
    .module('myApp').controller("view2Ctrl", view2Ctrl);

    view2Ctrl.$inject = ['$scope', '$location'];

    function view2Ctrl($scope, $location) {
      var barra = document.querySelector('.barra');
      barra.style.visibility="visible";

      $scope.$on('$routeChangeSuccess', function($event, $current, $previous) {
        TweenMax.to("#puntos-2", 1, {opacity: .25, display:'block', ease: Power2.easeOut, delay: 1.2});
        TweenMax.to("#cruces-2", 1, {opacity: .25, display:'block', ease: Power2.easeOut, delay: 1.5});
        TweenMax.from("#barra", 1, {opacity: 0, display:'block', ease: Power2.easeOut, delay: 1.5});
        TweenMax.from("#slide2-h1", 2, {right: 350, opacity: 0, position: 'relative', ease: Power2.easeOut});
        TweenMax.from("#slide2-img1", 1, {top: 1350, opacity: 0, position: 'relative', ease: Power2.easeOut, delay: .3});
        TweenMax.from("#slide2-img2", 1, {top: 1350, opacity: 0, position: 'relative', ease: Power2.easeOut, delay: .5});
        TweenMax.from("#slide2-img3", 1, {top: 1350, opacity: 0, position: 'relative', ease: Power2.easeOut, delay: .7});
      })
    }

  angular
    .module('myApp').controller("view3Ctrl", view3Ctrl);
    view3Ctrl.$inject = ['$scope', '$location'];

    function view3Ctrl($scope, $location) {
      $scope.$on('$routeChangeStart', function($event, $current, $previous) {
        TweenMax.to("#puntos-1", .001, {opacity: 0, display:'none', ease: Power2.easeOut, delay: 1.2});
        TweenMax.to("#puntos-2", .001, {opacity: 0, display:'none', ease: Power2.easeOut, delay: 1.2});
      })
      $scope.$on('$routeChangeSuccess', function($event, $current, $previous) {
        TweenMax.to("#puntos-1", .001, {opacity: 0, display:'none', ease: Power2.easeOut, delay: 1.2});
        TweenMax.to("#puntos-2", .001, {opacity: 0, display:'none', ease: Power2.easeOut, delay: 1.2});
        TweenMax.from("#slide3-h1", 2, {right: 350, opacity: 0, position: 'relative', ease: Power2.easeOut});
        TweenMax.from(".content3_right", 1, {left: 350, opacity: 0, position: 'relative', ease: Power2.easeOut});
        TweenMax.to("#cruces-3", 1, {opacity: .25, display:'block', ease: Power2.easeOut, delay: 1.5});
        TweenMax.from("span", 3, {opacity: 0, display:'none', ease: Power2.easeOut, delay: 1.2});
      })

      $scope.img1 = "images/edificios.png";
      $scope.img2 = "images/abuelo.png";
      $scope.img3 = "images/dude.png";
      $scope.img4 = "images/desierto.png";

      $scope.enterImg = function(index) {
        switch (index) {
          case '1':
            $scope.img1 = "images/edificios.png";
            $scope.img2 = "images/edificios.png";
            $scope.img3 = "images/edificios.png";
            $scope.img4 = "images/edificios.png";
            break;
          case '2':
            $scope.img1 = "images/abuelo.png";
            $scope.img2 = "images/abuelo.png";
            $scope.img3 = "images/abuelo.png";
            $scope.img4 = "images/abuelo.png";
            break;
          case '3':
            $scope.img1 = "images/dude.png";
            $scope.img2 = "images/dude.png";
            $scope.img3 = "images/dude.png";
            $scope.img4 = "images/dude.png";
            break;
          case '4':
            $scope.img1 = "images/desierto.png";
            $scope.img2 = "images/desierto.png";
            $scope.img3 = "images/desierto.png";
            $scope.img4 = "images/desierto.png";
            break;
          default:
            $scope.img1 = "images/edificios.png";
            $scope.img2 = "images/abuelo.png";
            $scope.img3 = "images/dude.png";
            $scope.img4 = "images/desierto.png";
            break;
        }
      }

      $scope.outImg = function () {
        $scope.img1 = "images/edificios.png";
        $scope.img2 = "images/abuelo.png";
        $scope.img3 = "images/dude.png";
        $scope.img4 = "images/desierto.png";
      }

    }

  angular
    .module('myApp').controller("view4Ctrl", view4Ctrl);
    view4Ctrl.$inject = ['$scope', '$location'];

    function view4Ctrl($scope, $location) {
      $scope.$on('$routeChangeSuccess', function($event, $current, $previous) {
        TweenMax.from("#slide4-p", 1, {right: 350, opacity: 0, position: 'relative', ease: Power2.easeOut});
        TweenMax.from("#slide4-h1", 3, {right: 750, opacity: 0, position: 'relative', ease: Power3.easeOut});
        TweenMax.from(".content4_slider", 2.7, {left: 1350, opacity: 0, position: 'relative', ease: Power2.easeOut});
      })

      $scope.range = {
        value:  2,
        min:    1,
        max:    3
      }
      $scope.showBtn = false;
      $scope.classBg = "bg2";
      $scope.sliderChange = function() {
        $scope.classBg = "bg"+$scope.range.value;
        if($scope.range.value!=2) {
          $scope.showBtn = true;
        } else {
          $scope.showBtn = false;
        }
      };
    }

    angular
      .module('myApp').controller("view5Ctrl", view5Ctrl);
      view5Ctrl.$inject = ['$scope', '$location'];

      function view5Ctrl($scope, $location) {
        var barra = document.querySelector('.barra');
        barra.style.visibility="hidden";

        $scope.$on('$routeChangeSuccess', function($event, $current, $previous) {
          TweenMax.from("#slide5-p", 1, {right: 350, opacity: 0, position: 'relative', ease: Power2.easeOut});
          TweenMax.from("#slide5-h1", 2, {right: 750, opacity: 0, position: 'relative', ease: Power3.easeOut});
        })
      }

  angular
    .module('myApp').controller("BarraCtrl", BarraCtrl);

    BarraCtrl.$inject = ['$scope', '$location'];

      function BarraCtrl($scope, $location) {
        $scope.$on('$routeChangeSuccess', function($event, $current, $previous) {
          var path = $location.path().replace('/','');
          $scope.clase = path;
        })
      }

  angular
    .module('myApp').controller("TransCtrl", TransCtrl);
      TransCtrl.$inject = ['$scope', '$location'];

      function TransCtrl($scope, $location) {

        $scope.$on('$routeChangeSuccess', function($event, $current, $previous) {

          var prev = $previous ? $previous.loadedTemplateUrl : '1';
          if(prev==1) {
            var actual = prev;
            var actual = actual - 1;
          } else {
            var actual = prev.split("/");
            var actual = actual[1].split(".");
            var actual = actual[0].substr(-1);
            var actual = actual;
          }

          var next = $current.loadedTemplateUrl;

          var voy = next.split("/");
          var voy = voy[1].split(".");
          var voy = voy[0].substr(-1);
          var voy = parseInt(voy);

          var trans = (voy > actual) ? "slideup" : "slidedown"

          //console.log("V: " + voy + " A: " + actual);

          $scope.slideanim = trans;
          //console.log($scope.slideanim);
        })
       }

})();
