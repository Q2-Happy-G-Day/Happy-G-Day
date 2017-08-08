function getComments(user, target) {
  $.get(url + '/comments/' + user.id).then((comments) => {
    let userComment = JSON.parse(localStorage.getItem('currUser'))
    if (userComment) {
      profile(userComment, user, comments, target)
    } else {
      let defaultUser = [{
          id: 0,
          name: ""
      }]
      profile(defaultUser, user, comments, target)
    }
  })
}
