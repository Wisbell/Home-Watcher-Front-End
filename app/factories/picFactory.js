app.factory('PicFactory', function($http) {

  return {
    getAllPictures: function () {
      return new Promise( (resolve, reject) => {
        $http.get(`https://home-watcher.herokuapp.com/api/v1/media`)
        .then( (data) => {
          resolve(data.data.media)
        })
      })
    }
  }
})
