app.controller('AuthCtrl', function(AuthFactory, $scope, $location) {

  $scope.login = () => {

    $('#loginModal').modal('toggle')

    AuthFactory.login($scope.loginInfo)
    .then((data) => {

      if(data.data.auth) {
        AuthFactory.loggedIn = true

        // Toggle isn't removing modal classes - removing them with jQuery
        $('#loginModal').modal('toggle')
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $('#loggedInButton').addClass('hidden')

        $location.url('/')
      } else {

        // Toggle isn't removing modal classes - removing them with jQuery
        $('#loginModal').modal('toggle')
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $('#loggedInButton').addClass('hidden')

        $location.url('/login')
      }
      $scope.$apply()
    })
  }

  $scope.register = () => {
    console.log('Register button clicked')
    AuthFactory.register($scope.loginInfo)
    .then(() => {
      console.log('Registered!')
    })
  }
})
