app.controller('AuthCtrl', function(AuthFactory, $scope, $location) {
  console.log('login controller loaded')

  $scope.login = () => {
    console.log('Login button clicked')
    // $('#loginModal').modal('show')
    $('#loginModal').modal('toggle')
    AuthFactory.login($scope.loginInfo)
    .then((data) => {
      console.log('Logged In!?')
      console.log('data', data)
      if(data.data.auth) {
        AuthFactory.loggedIn = true
        console.log('loggedIn?', AuthFactory.loggedIn)
        // $('#loginModal').modal('hide')
        $('#loginModal').modal('toggle')
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        $('#loggedInButton').addClass('hidden')
        $location.url('/')
      } else {
        // $('#loginModal').modal('hide')
        $('#loginModal').modal('toggle')
        $location.url('/login')
      }
      $scope.$apply()
    })
  }

  $scope.register = () => {
    console.log('Register button clicked')
    AuthFactory.register($scope.loginInfo)
    .then(() => {
      console.log('Registered!?')
    })
  }
})
