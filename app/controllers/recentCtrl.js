app.controller('RecentCtrl', function(PicFactory, $scope, AuthFactory, $location) {

  PicFactory.getAllPictures()
    .then( (pictures) => {
      $scope.pictures = pictures
      $scope.$apply()
    })

})
