app.factory('AuthFactory', ($http) => {

  // URL for API
  let rootUrl = 'http://localhost:8080'

  return {

    loggedIn: false,

    register: (loginInfo) => {
      return new Promise((resolve, reject) => {
        $http.post(`${rootUrl}/api/v1/register`, loginInfo)
        .then((data) => {
          resolve(data)
        })
        .catch((err) =>{
          console.log("error from factory:", err)
        })
      })
    },

    login: (loginInfo) => {
      console.log("loginInfo from factory", loginInfo)
      return new Promise((resolve, reject) => {
        $http.post(`${rootUrl}/api/v1/login`, loginInfo)
        .then((data) => {
          console.log("logged in from factory")
          console.log('data from API', data)
          resolve(data)
        })
        .catch((err) => {
          console.log("err from factory:", err)
        })
      })
    }
  }
})
