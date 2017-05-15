app.controller('RecentCtrl', function(PicFactory, $scope) {
  $scope.stuff = "stuff"

  PicFactory.getAllPictures()
  .then( (pictures) => {
    $scope.pictures = pictures
    $scope.$apply()
  })
})
