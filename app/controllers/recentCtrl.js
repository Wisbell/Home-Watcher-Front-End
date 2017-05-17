app.controller('RecentCtrl', function(PicFactory, $scope, AuthFactory, $location) {
  $scope.stuff = "stuff"

  let loggedIn = AuthFactory.loggedIn
  console.log("logged", loggedIn)

  if(loggedIn) {
    PicFactory.getAllPictures()
    .then( (pictures) => {
      $scope.pictures = pictures
      $scope.$apply()
    })

  } else {
    $location.url('/login')
  }
})
